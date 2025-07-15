# 🚀 GitHub Deployment Guide

## 📋 Vorbereitung für GitHub Upload

### ✅ **Schritt 1: Repository vorbereiten**

```bash
# In das Projektverzeichnis wechseln
cd "/Users/marcelgaertner/Desktop/simplimed-foerderantrag/SimpliMed-Foerderstrategie"

# Git Repository initialisieren (falls nicht vorhanden)
git init

# Remote Repository hinzufügen
git remote add origin https://github.com/[username]/SimpliMed-Foerderstrategie.git
```

### ✅ **Schritt 2: Sensitive Daten prüfen**

**Bereits ausgeschlossen durch .gitignore:**
- ❌ `markus unterlagen/` - Persönliche Dokumente
- ❌ `marcus unterlagen/` - Persönliche Dokumente
- ❌ `*.pdf, *.docx, *.xlsx` - Binäre Dateien
- ❌ `*password*, *secret*, *private*` - Sensitive Patterns
- ❌ `WHATSAPP_NACHRICHT_MARCUS.txt` - Entfernt

**Sichere Dateien für GitHub:**
- ✅ HTML/CSS/JavaScript Code
- ✅ JSON Konfigurationsdateien
- ✅ Markdown Dokumentation
- ✅ Projektstruktur

### ✅ **Schritt 3: Finale Commits vorbereiten**

```bash
# Alle Änderungen stagen
git add .

# Commit mit aussagekräftiger Nachricht
git commit -m "feat: Vollständiges SimpliMed Förderstrategie Dashboard

- Interaktive Szenario-Auswahl mit 4 Förderoptionen
- Dynamische Finanzierungsplanung
- Adaptive Zeitplanung pro Szenario
- 25 validierte Förderprogramme
- Entscheidungsdokumentation mit Kommentaren
- Responsive Design für Desktop/Mobile
- Rechtlich geprüfte Szenarien (De-minimis konform)

🎯 Hauptfunktionen:
- CEO-Dashboard mit Entscheidungsvorlage
- Förderszenarien-Analyse (6 Szenarien)
- Förderprogramm-Datenbank (25 Programme)
- Dokumentenbibliothek

📊 Technische Features:
- Vanilla JavaScript (keine Dependencies)
- LocalStorage für Persistenz
- Kollapsible UI-Komponenten
- Echtzeit-Updates bei Szenario-Wechsel

🔧 Deployment-ready:
- .gitignore konfiguriert
- Sensitive Daten ausgeschlossen
- Vollständige Dokumentation
- GitHub Pages kompatibel

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### ✅ **Schritt 4: GitHub Repository erstellen**

1. **GitHub.com besuchen**
2. **Neues Repository erstellen**
   - Name: `SimpliMed-Foerderstrategie`
   - Beschreibung: `Interaktives Dashboard für Förderprogramm-Entscheidungen der SimpliMed GmbH`
   - Sichtbarkeit: `Private` (empfohlen für Geschäftsdaten)
   - README: `Nicht erstellen` (wir haben bereits eins)

3. **Repository-URL kopieren**

### ✅ **Schritt 5: Push zu GitHub**

```bash
# Remote Repository hinzufügen
git remote add origin https://github.com/[IHR-USERNAME]/SimpliMed-Foerderstrategie.git

# Hauptbranch umbenennen (falls nötig)
git branch -M main

# Ersten Push durchführen
git push -u origin main
```

## 🌐 **GitHub Pages Setup (Optional)**

### Live-Demo erstellen:

```bash
# GitHub Pages Branch erstellen
git checkout -b gh-pages

# Hauptdatei als index.html verfügbar machen
cp geschaeftsfuehrer-briefing.html index.html

# Commit und Push
git add index.html
git commit -m "docs: Add index.html for GitHub Pages"
git push origin gh-pages
```

**Dann in GitHub:**
1. `Settings` → `Pages`
2. Source: `Deploy from a branch`
3. Branch: `gh-pages`
4. Folder: `/ (root)`

**Live-URL:** `https://[username].github.io/SimpliMed-Foerderstrategie/`

## 📁 **Projektstruktur für GitHub**

```
SimpliMed-Foerderstrategie/
├── 📄 README-GITHUB.md              # Hauptdokumentation
├── 📄 geschaeftsfuehrer-briefing.html # HAUPT-DASHBOARD
├── 📄 .gitignore                     # Git-Konfiguration
├── 📄 GITHUB-DEPLOYMENT.md          # Diese Anleitung
├── 📁 01_Unternehmensdaten/          # Firmendaten (JSON)
├── 📁 02_Strategie_Dokumente/        # Strategiedokumente
├── 📁 03_Pitch_Deck/                # Präsentationen
├── 📁 04_Foerderanalyse/            # Förderanalyse
├── 📁 05_Anwendungen/               # Dashboard-Apps
├── 📁 06_ToDos_Dokumentation/       # Umsetzungspläne
└── 📁 ARCHIV/                       # Historische Versionen
```

## 🔒 **Sicherheitshinweise**

### ❌ **Ausgeschlossen von GitHub:**
- Persönliche Dokumente (markus unterlagen/)
- Binäre Dateien (PDFs, Word, Excel)
- Sensitive Informationen
- Backup-Dateien
- Temporäre Dateien

### ✅ **Sicher für GitHub:**
- HTML/CSS/JavaScript Code
- JSON-Konfigurationsdateien
- Markdown-Dokumentation
- Projektstruktur

## 📊 **Repository-Statistiken**

```bash
# Dateianzahl prüfen
find . -type f -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.json" -o -name "*.md" | wc -l

# Codezeilen zählen
find . -name "*.html" -o -name "*.js" -o -name "*.css" | xargs wc -l

# Repository-Größe
du -sh .
```

## 🤝 **Collaboration Setup**

### Für Teammitglieder:
```bash
# Repository klonen
git clone https://github.com/[username]/SimpliMed-Foerderstrategie.git

# Entwicklungsbranch erstellen
git checkout -b feature/neue-funktionalität

# Änderungen committen
git add .
git commit -m "feat: Neue Funktionalität hinzugefügt"

# Pull Request erstellen
git push origin feature/neue-funktionalität
```

### Branch-Strategie:
- `main` - Produktive Version
- `develop` - Entwicklungsversion
- `feature/xyz` - Neue Features
- `hotfix/xyz` - Schnelle Fixes

## 📈 **Maintenance**

### Regelmäßige Updates:
```bash
# Förderprogramme aktualisieren
git checkout -b update/foerderprogramme-2025

# Änderungen in fundingProgramsData
# Testen und committen
git add .
git commit -m "update: Förderprogramme für 2025 aktualisiert"
git push origin update/foerderprogramme-2025
```

### Backup-Strategie:
- GitHub ist das Hauptbackup
- Lokale Entwicklungsumgebung
- Regelmäßige Releases/Tags

## 🎯 **Nächste Schritte**

1. **✅ Repository erstellen** auf GitHub
2. **✅ Code hochladen** mit dem vorbereiteten Commit
3. **✅ README prüfen** und bei Bedarf anpassen
4. **✅ GitHub Pages aktivieren** für Live-Demo
5. **✅ Teammitglieder einladen** (falls nötig)
6. **✅ Issues einrichten** für Feedback und Bugs

## 📞 **Support**

Bei Fragen zum GitHub-Setup:
- GitHub Docs: https://docs.github.com
- Git Tutorial: https://git-scm.com/book
- GitHub Pages: https://pages.github.com

---

**Bereit für GitHub Upload! 🚀**