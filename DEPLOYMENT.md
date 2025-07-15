# 🚀 GitHub Deployment Anleitung

## 📋 Schritt-für-Schritt Anleitung

### 1️⃣ **GitHub Repository erstellen**

1. Gehen Sie zu [github.com](https://github.com)
2. Klicken Sie auf **"New"** oder **"+"** → **"New repository"**
3. Repository-Einstellungen:
   - **Repository name:** `simplimed-foerderstrategie`
   - **Description:** "Interaktives Fördermittel-Dashboard für SimpliMed 2.0"
   - **Public/Private:** Wählen Sie **Public** für GitHub Pages
   - **Initialize:** NICHT ankreuzen (wir haben bereits Dateien)
4. Klicken Sie auf **"Create repository"**

### 2️⃣ **Dateien hochladen**

```bash
# Terminal öffnen und zum Projektordner navigieren
cd /Users/marcelgaertner/Desktop/simplimed-foerderantrag/SimpliMed-Foerderstrategie

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit: SimpliMed Förderstrategie Dashboard"

# Remote Repository hinzufügen (USERNAME durch Ihren GitHub-Namen ersetzen)
git remote add origin https://github.com/USERNAME/simplimed-foerderstrategie.git

# Zum main Branch wechseln
git branch -M main

# Dateien hochladen
git push -u origin main
```

### 3️⃣ **GitHub Pages aktivieren**

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **"Settings"** (oben rechts)
3. Scrollen Sie zu **"Pages"** (linke Sidebar)
4. Unter **"Source"**:
   - Select: **"Deploy from a branch"**
   - Branch: **"main"**
   - Folder: **"/ (root)"**
5. Klicken Sie auf **"Save"**

### 4️⃣ **Warten und testen**

- ⏱️ Warten Sie **2-5 Minuten** für die Bereitstellung
- 🔗 Ihre URL wird sein: `https://USERNAME.github.io/simplimed-foerderstrategie/geschaeftsfuehrer-briefing.html`
- ✅ GitHub zeigt einen grünen Haken wenn fertig

## 🔧 Alternative: Manueller Upload über GitHub Web

Falls Sie kein Git installiert haben:

1. Gehen Sie zu Ihrem leeren Repository
2. Klicken Sie auf **"uploading an existing file"**
3. Drag & Drop diese Dateien:
   - `geschaeftsfuehrer-briefing.html`
   - `README.md`
   - `.gitignore`
   - `DEPLOYMENT.md`
4. Commit message: "Initial commit: SimpliMed Dashboard"
5. Klicken Sie auf **"Commit changes"**

## 🐛 Troubleshooting

### "404 Fehler"
- Prüfen Sie die URL: `...github.io/REPOSITORY-NAME/geschaeftsfuehrer-briefing.html`
- Warten Sie weitere 5 Minuten
- Prüfen Sie ob Repository **public** ist

### "Seite wird nicht aktualisiert"
- Browser-Cache leeren (Cmd+Shift+R oder Ctrl+Shift+R)
- In Settings → Pages → Source nochmal Save klicken

### "Permission denied"
- Repository muss **public** sein für GitHub Pages
- Oder Sie brauchen GitHub Pro für private Pages

## 📱 Teilen des Links

Nach erfolgreicher Bereitstellung können Sie den Link teilen:

```
https://IhrGitHubName.github.io/simplimed-foerderstrategie/geschaeftsfuehrer-briefing.html
```

### QR-Code generieren
Für einfaches Teilen können Sie einen QR-Code erstellen:
- [qr-code-generator.com](https://www.qr-code-generator.com/)
- URL eingeben → QR-Code downloaden

## 🔒 Sicherheit

- Das Dashboard läuft komplett im Browser
- Keine Serverdaten werden übertragen
- LocalStorage bleibt auf dem Gerät des Nutzers
- Perfekt für vertrauliche Finanzplanungen

## ✅ Fertig!

Das Dashboard ist jetzt online verfügbar und kann geteilt werden!

---

**Support:** Bei Problemen erstellen Sie ein Issue im Repository oder kontaktieren Sie marcus.schmitz@simplimed.de