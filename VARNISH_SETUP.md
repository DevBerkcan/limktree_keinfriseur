# Varnish Cache Setup für KEINFRISEUR Linktree

Varnish ist ein hochperformanter HTTP-Reverse-Proxy-Cache, der deine Next.js-App **10-100x schneller** macht! 🚀

## 🎯 Was macht Varnish?

- ⚡ **Extrem schnell**: Liefert gecachte Seiten in Millisekunden
- 📈 **Skalierbar**: Handlet 1000+ Requests pro Sekunde
- 💰 **Kostenersparnis**: Reduziert Server-Last massiv
- 🌍 **Besseres SEO**: Schnellere Ladezeiten = besseres Ranking

## 📊 Performance-Verbesserungen

| Metrik | Ohne Varnish | Mit Varnish | Verbesserung |
|--------|--------------|-------------|--------------|
| Response Time | 200ms | 5-10ms | **20-40x schneller** |
| Server Load | 100% | 10-20% | **80-90% weniger** |
| Concurrent Users | 100 | 10,000+ | **100x mehr** |

## 🚀 Schnellstart mit Docker

### Option 1: Docker Compose (Empfohlen)

```bash
# 1. Build und starte alle Services
docker-compose up -d

# 2. Prüfe Status
docker-compose ps

# 3. Logs ansehen
docker-compose logs -f varnish
```

**Fertig!** Deine App läuft jetzt mit Varnish auf Port 80! 🎉

### Option 2: Manuell ohne Docker

```bash
# 1. Varnish installieren (macOS)
brew install varnish

# 2. Varnish Config kopieren
sudo cp varnish/default.vcl /usr/local/etc/varnish/default.vcl

# 3. Next.js App starten
npm run build
npm start  # Läuft auf Port 3000

# 4. Varnish starten
varnishd -f /usr/local/etc/varnish/default.vcl -s malloc,256m -a 0.0.0.0:80
```

## 🏗️ Architektur

```
Internet → Varnish (Port 80) → Next.js (Port 3000)
                ↓
           Cache (RAM)
```

**Flow:**
1. User-Request → Varnish
2. **Cache HIT?** → Sofort zurückgeben (5ms)
3. **Cache MISS?** → Next.js anfragen → Cachen → Zurückgeben

## ⚙️ Konfiguration

### Cache-Zeiten

In `varnish/default.vcl` anpassen:

```vcl
# HTML Pages: 5 Minuten
set beresp.ttl = 5m;

# Static Assets: 1 Woche
set beresp.ttl = 1w;

# API: Nicht cachen
set beresp.ttl = 0s;
```

### Cache-Purging (Invalidierung)

Cache manuell leeren:

```bash
# Einzelne URL purgen
curl -X PURGE http://localhost/

# Kompletten Cache leeren (Varnish neu starten)
docker-compose restart varnish
```

### Monitoring

Varnish-Statistiken live ansehen:

```bash
# Cache-Hit-Rate prüfen
docker exec -it varnish varnishstat

# Request-Log live
docker exec -it varnish varnishlog
```

## 📈 Cache-Optimierung

### Cache-Hit-Rate verbessern

1. **Cookies minimieren**: Nur notwendige Cookies (OneTrust)
2. **Query-Parameter normalisieren**: Irrelevante ignorieren
3. **Vary-Header vermeiden**: Reduziert Cache-Fragmentierung

### Grace Mode

Bei Backend-Problemen: Varnish liefert veralteten Cache

```vcl
set beresp.grace = 1h;  # Bis zu 1 Stunde alter Cache OK
```

## 🧪 Testing

### 1. Cache-Status prüfen

```bash
# HTTP-Header ansehen
curl -I http://localhost/

# Output:
# X-Cache: HIT (gecacht) oder MISS (nicht gecacht)
# X-Cache-Hits: 5 (wie oft aus Cache geliefert)
```

### 2. Performance testen

```bash
# Install Apache Bench
brew install httpd

# 1000 Requests, 10 concurrent
ab -n 1000 -c 10 http://localhost/

# Ergebnis: Requests/Sekunde sollte massiv steigen!
```

### 3. Cache invalidieren & neu testen

```bash
# Cache leeren
curl -X PURGE http://localhost/

# Erster Request: MISS
curl -I http://localhost/ | grep X-Cache

# Zweiter Request: HIT
curl -I http://localhost/ | grep X-Cache
```

## 🔧 Troubleshooting

### Problem: Cache-Hit-Rate zu niedrig

**Lösung:**
```bash
# 1. Prüfe ob Cookies das Problem sind
docker exec -it varnish varnishlog -q 'RespHeader ~ "Set-Cookie"'

# 2. Prüfe VCL-Konfiguration
docker exec -it varnish varnishadm vcl.list
```

### Problem: Varnish startet nicht

**Lösung:**
```bash
# 1. Config-Syntax prüfen
varnishd -C -f varnish/default.vcl

# 2. Logs ansehen
docker-compose logs varnish

# 3. Port 80 bereits belegt?
sudo lsof -i :80
```

### Problem: Updates werden nicht angezeigt

**Lösung:**
```bash
# 1. Cache für spezifische URL purgen
curl -X PURGE http://localhost/

# 2. Oder kompletten Cache leeren
docker-compose restart varnish
```

## 📱 Production Deployment

### 1. Hosting-Provider Setup

#### Vercel/Netlify
- Haben eigenes CDN → Varnish nicht nötig
- Nutze deren Edge-Caching

#### VPS (DigitalOcean, Hetzner, etc.)

```bash
# 1. Docker auf Server installieren
ssh user@your-server.com
curl -fsSL https://get.docker.com | sh

# 2. Projekt deployen
git clone your-repo
cd limktree_keinfriseur

# 3. Environment Variables setzen
cp .env.example .env.local
nano .env.local

# 4. Starten
docker-compose up -d

# 5. Nginx als SSL-Proxy (optional)
# Varnish → Nginx → Internet (mit HTTPS)
```

### 2. SSL/HTTPS mit Nginx

Varnish unterstützt kein SSL direkt. Setup:

```
Internet (HTTPS) → Nginx (SSL) → Varnish → Next.js
```

Nginx Config:
```nginx
upstream varnish {
    server 127.0.0.1:80;
}

server {
    listen 443 ssl http2;
    server_name keinfriseur.de;

    ssl_certificate /etc/letsencrypt/live/keinfriseur.de/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/keinfriseur.de/privkey.pem;

    location / {
        proxy_pass http://varnish;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 🎛️ Advanced Features

### ESI (Edge Side Includes)

Teile der Seite unterschiedlich cachen:

```html
<!-- Statischer Teil: 1 Woche -->
<div>Header</div>

<!-- Dynamischer Teil: 5 Minuten -->
<esi:include src="/api/user-info" />
```

### Geo-IP Caching

Verschiedene Versionen für verschiedene Länder:

```vcl
sub vcl_recv {
    if (geoip.country_code == "DE") {
        set req.http.X-Country = "DE";
    }
}
```

## 📊 Monitoring & Analytics

### Varnish Top

Real-time Top-Requests:

```bash
docker exec -it varnish varnishtop -i ReqURL
```

### Custom Dashboard

Tools wie **Varnish Agent** oder **Grafana** für Monitoring.

## 💡 Best Practices

1. ✅ **Static Assets lange cachen** (1 Jahr)
2. ✅ **HTML kurz cachen** (5-10 Minuten)
3. ✅ **APIs nicht cachen** (oder sehr kurz)
4. ✅ **Grace Mode aktivieren** (1 Stunde)
5. ✅ **Compression aktivieren**
6. ✅ **Health Checks** für Backend
7. ✅ **Monitoring** für Cache-Hit-Rate

## 🆘 Support

- [Varnish Docs](https://varnish-cache.org/docs/)
- [Varnish Book](https://book.varnish-software.com/)
- [VCL Reference](https://varnish-cache.org/docs/trunk/reference/vcl.html)

---

**Performance-Tip:** Eine gute Cache-Hit-Rate ist **>90%**. Prüfe mit:
```bash
docker exec -it varnish varnishstat | grep cache_hit
```

Viel Erfolg! 🚀
