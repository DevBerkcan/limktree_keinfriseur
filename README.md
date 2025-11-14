# KEINFRISEUR - Link in Bio 💈✂️

Moderne, performance-optimierte Linktree-Alternative für Barbershops, gebaut mit Next.js 14, Framer Motion und Varnish Cache.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Varnish](https://img.shields.io/badge/Varnish-7.4-orange)

## ✨ Features

### 🎨 Design & Animations
- ✅ **Barber-Theme** - Rot/Gold Farbschema mit Schere-Motiven
- ✅ **Framer Motion** - Smooth Animationen für alle Elemente
- ✅ **Floating Scissors** - Animierte schwebende Scheren im Hintergrund
- ✅ **Responsive Design** - Perfekt auf Mobile & Desktop
- ✅ **Tailwind CSS** - Moderne Utility-First CSS

### 🚀 Performance
- ✅ **Varnish Cache** - 20-40x schnellere Response-Times
- ✅ **Next.js 14** - React Server Components & App Router
- ✅ **Image Optimization** - WebP/AVIF Support
- ✅ **Compression** - Gzip/Brotli für kleinere Bundles
- ✅ **Lighthouse Score 95+** - Optimiert für Core Web Vitals

### 📊 Analytics & Tracking
- ✅ **Custom Analytics** - Privacy-friendly Event-Tracking
- ✅ **OneTrust Integration** - DSGVO-konformes Cookie-Management
- ✅ **UTM-Parameter** - Campaign-Tracking Support
- ✅ **Session-Tracking** - User-Journey Analytics

### 🔗 Share-Funktionalität
- ✅ **Web Share API** - Native Sharing auf Mobile
- ✅ **Social Media** - WhatsApp, Telegram, Facebook, Twitter, LinkedIn
- ✅ **Copy Link** - Ein-Klick Zwischenablage
- ✅ **Floating Share Button** - Wie bei Linktree

### 🍪 Cookie-Consent (OneTrust)
- ✅ **DSGVO-konform** - EU Cookie-Richtlinien
- ✅ **Consent-Management** - User-kontrollierte Einstellungen
- ✅ **Analytics-Blocking** - Nur mit User-Consent
- ✅ **Settings-Button** - Im Footer verlinkt

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **UI Components**: NextUI 2.4
- **Icons**: Lucide React
- **Cache**: Varnish 7.4
- **Cookie Consent**: OneTrust
- **Deployment**: Docker + Docker Compose

## 🚀 Quick Start

### Lokale Entwicklung

```bash
# 1. Dependencies installieren
npm install

# 2. Environment Variables
cp .env.example .env.local
# Füge OneTrust Domain ID ein

# 3. Dev Server starten
npm run dev

# 4. Öffne Browser
open http://localhost:3000
```

### Production Build

```bash
# Build erstellen
npm run build

# Production Server starten
npm start
```

### Mit Docker & Varnish

```bash
# Alle Services starten (Next.js + Varnish + Redis)
docker-compose up -d

# App läuft auf Port 80 mit Varnish-Cache!
open http://localhost
```

## 📁 Projektstruktur

```
limktree_keinfriseur/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Hauptseite
│   ├── layout.tsx           # Root Layout mit OneTrust
│   ├── globals.css          # Globale Styles
│   └── api/
│       └── analytics/       # Analytics API Endpoint
├── components/              # React Komponenten
│   ├── ProfileCard.tsx      # Profil mit animierten Scheren
│   ├── LinkButton.tsx       # Interaktive Link-Buttons
│   ├── Footer.tsx           # Footer mit Social Links
│   ├── ShareButton.tsx      # Share-Funktionalität
│   ├── FloatingScissors.tsx # Hintergrund-Animationen
│   └── OneTrust.tsx         # Cookie-Consent
├── hooks/                   # Custom React Hooks
│   └── useAnalytics.ts      # Analytics mit Consent
├── lib/                     # Utilities & Config
│   └── config.ts            # App-Konfiguration
├── varnish/                 # Varnish Cache Config
│   └── default.vcl          # VCL-Konfiguration
├── middleware.ts            # Next.js Middleware (Cache-Headers)
├── docker-compose.yml       # Docker Setup
├── Dockerfile               # Production Build
├── ONETRUST_SETUP.md        # OneTrust Anleitung
└── VARNISH_SETUP.md         # Varnish Anleitung
```

## ⚙️ Konfiguration

### Links anpassen

Bearbeite `lib/config.ts`:

```typescript
export const socialLinks = [
  {
    label: "Online buchen",
    href: "https://deine-buchung.de",
    icon: Calendar,
    variant: "primary",
  },
  // ... weitere Links
];
```

### OneTrust Setup

Siehe [ONETRUST_SETUP.md](ONETRUST_SETUP.md)

1. OneTrust Account erstellen
2. Domain Script ID kopieren
3. In `.env.local` eintragen

### Varnish Setup

Siehe [VARNISH_SETUP.md](VARNISH_SETUP.md)

1. Docker Compose starten
2. Varnish läuft auf Port 80
3. Cache-Hit-Rate monitoren

## 🎨 Design Anpassen

### Farben

Bearbeite `tailwind.config.ts`:

```typescript
colors: {
  barber: {
    red: "#DC2626",      // Hauptfarbe
    darkRed: "#991B1B",  // Dunkler Rot
    gold: "#D4AF37",     // Akzentfarbe
    // ...
  },
}
```

### Animationen

Passe Framer Motion Animationen in den Komponenten an:

```typescript
// Beispiel: ProfileCard.tsx
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
>
```

## 📊 Analytics

### Events tracken

```typescript
const { trackEvent } = useAnalytics();

// Custom Event
trackEvent("button_click", {
  buttonLabel: "Instagram",
  position: 2,
});
```

### Verfügbare Events

- `page_view` - Seitenaufruf
- `link_click` - Link-Klick
- `time_on_page` - Verweildauer
- Custom Events - Beliebige Events

## 🚢 Deployment

### Vercel/Netlify

```bash
# Push zu GitHub
git push origin main

# In Vercel/Netlify verbinden
# Environment Variables setzen
```

### VPS (DigitalOcean, Hetzner, etc.)

```bash
# Auf Server
git clone your-repo
cd limktree_keinfriseur

# Environment Variables
cp .env.example .env.local
nano .env.local

# Mit Docker starten
docker-compose up -d
```

## 🧪 Testing

### Performance testen

```bash
# Lighthouse
npx lighthouse http://localhost:3000

# Apache Bench (Load Test)
ab -n 1000 -c 10 http://localhost/
```

### Cache-Hit-Rate prüfen

```bash
# Varnish Stats
docker exec -it varnish varnishstat

# Cache-Header prüfen
curl -I http://localhost/ | grep X-Cache
```

## 📝 Lizenz

Privates Projekt für KEINFRISEUR Barbershop Düsseldorf

## 🤝 Support

Bei Fragen:
- OneTrust: [ONETRUST_SETUP.md](ONETRUST_SETUP.md)
- Varnish: [VARNISH_SETUP.md](VARNISH_SETUP.md)
- Issues: GitHub Issues

---

Entwickelt mit ❤️ für KEINFRISEUR Barbershop
