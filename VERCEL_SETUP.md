# Frontend mit Backend verbinden

## ✅ Was ich gemacht habe:

1. **Admin Timeline-Ansicht erstellt** ✅
   - Neue Seite: `/admin/today`
   - Zeigt alle heutigen Termine von 8-20 Uhr
   - Rote Linie zeigt die aktuelle Uhrzeit
   - Aktueller Termin wird rot hervorgehoben
   - Nächster Termin wird blau hervorgehoben
   - Zeigt alle Kontaktdaten des Kunden

2. **Navigation aktualisiert** ✅
   - "Heute Timeline" Button im Admin-Menü

---

## 📝 Was du jetzt machen musst:

### 1. Vercel Environment Variable setzen

**Gehe zu Vercel Dashboard:**
1. Öffne https://vercel.com/dashboard
2. Wähle dein Projekt: `limktree-keinfriseur`
3. Klicke auf **"Settings"**
4. Klicke links auf **"Environment Variables"**

**Füge die Variable hinzu:**
- **Key (Name)**: `NEXT_PUBLIC_API_URL`
- **Value (Wert)**: `https://barberdarioapi.runasp.net/api`
- **Environment**: Wähle alle 3 aus:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- Klicke **"Save"**

### 2. Frontend deployen

**Option A: Git Push (Empfohlen)**
```bash
cd "/Users/berkcan/Dropbox/Mac (2)/Documents/Dario_Friseur Homepage/limktree_keinfriseur"

git add .
git commit -m "Add admin timeline view and connect to MonsterASP backend"
git push origin main
```
→ Vercel deployed automatisch

**Option B: Manuell Redeploy in Vercel**
1. Gehe zu **"Deployments"** in Vercel
2. Klicke auf die neueste Deployment
3. Klicke **"... More"** → **"Redeploy"**
4. Bestätige

---

## 🧪 Nach dem Deployment testen:

### 1. Frontend API Connection
Gehe zu: https://limktree-keinfriseur.vercel.app/booking
- Wähle einen Service
- Buche einen Termin
- ✅ Sollte funktionieren ohne Fehler

### 2. Admin Timeline
1. Gehe zu: https://limktree-keinfriseur.vercel.app/admin/login
2. Login:
   - Username: `admin`
   - Password: `barber2025`
3. Klicke auf **"Heute Timeline"** im Menü
4. ✅ Du solltest alle heutigen Termine sehen mit:
   - Timeline von 8-20 Uhr
   - Rote Linie bei der aktuellen Uhrzeit
   - Alle Kundenkontakte (Name, Telefon, Email)
   - Aktueller Termin rot markiert
   - Nächster Termin blau markiert

### 3. Email testen
1. Buche einen neuen Termin über `/booking`
2. Checke deine Email (die du bei der Buchung angibst)
3. Falls keine Email kommt:
   - Checke Spam-Ordner
   - Gehe zu MonsterASP Dashboard → Logs
   - Suche nach "Email" oder "SMTP" Fehlern

---

## 🚨 Troubleshooting

### CORS Error im Browser
- ❌ Environment Variable wurde nicht gesetzt
- ✅ Überprüfe in Vercel Settings → Environment Variables
- ✅ Redeploy nochmal

### API gibt 404
- ❌ NEXT_PUBLIC_API_URL ist falsch
- ✅ Sollte sein: `https://barberdarioapi.runasp.net/api` (ohne `/` am Ende!)

### Timeline zeigt keine Daten
- ❌ Backend Connection Problem
- ✅ Öffne Browser DevTools (F12) → Console
- ✅ Checke nach Fehlern

### Email kommt nicht an
**Mögliche Ursachen:**
1. MonsterASP blockiert Port 587 (SMTP)
2. Brevo Credentials sind falsch
3. Brevo Daily Limit erreicht (300 Emails/Tag)

**Lösung:**
1. Checke MonsterASP Logs:
   - https://admin.monsterasp.net
   - Deine Website → Logs
   - Suche nach "Email" oder "SMTP"
2. Falls Port blockiert:
   - Kontaktiere MonsterASP Support
   - Oder verwende einen anderen Email-Service (z.B. SendGrid, Mailgun)

---

## 📞 Nächste Schritte nach erfolgreicher Verbindung:

1. ✅ Teste eine komplette Buchung (Frontend → Backend → Email)
2. ✅ Teste die Timeline-Ansicht
3. ✅ Teste "Meine Buchungen" Seite
4. ✅ Hangfire wieder aktivieren für automatische Erinnerungen
5. ✅ Admin-Passwort ändern (in `app/admin/login/page.tsx`)

---

**Bei Erfolg solltest du sehen:**
- ✅ Buchungen funktionieren
- ✅ Timeline zeigt heutige Termine
- ✅ Alle Kundendaten sind sichtbar
- ✅ Aktuelle Uhrzeit wird als rote Linie angezeigt
- ⚠️ Email (möglicherweise noch nicht - kann später gefixt werden)

**Schicke mir einen Screenshot wenn es funktioniert!** 🎉
