# 🚀 SCHNELLANLEITUNG: GitHub Upload in 5 Minuten

## ✅ Das haben Sie bereits:
- Git Repository ist initialisiert ✓
- Alle Dateien sind bereit ✓
- README.md erstellt ✓
- .gitignore konfiguriert ✓

## 📋 Jetzt nur noch diese Schritte:

### 1️⃣ **GitHub Repository erstellen** (2 Min)
1. Öffnen Sie [github.com/new](https://github.com/new)
2. Name: `simplimed-foerderstrategie`
3. **WICHTIG:** Wählen Sie **Public** (für GitHub Pages)
4. NICHT "Initialize this repository" ankreuzen!
5. Click **"Create repository"**

### 2️⃣ **Terminal-Befehle kopieren** (2 Min)
```bash
# Sie sind bereits im richtigen Ordner, also direkt:

# Alle Dateien zum Commit hinzufügen
git add .

# Commit erstellen
git commit -m "SimpliMed Förderstrategie Dashboard - Vollständige Version mit CEO-FAQ"

# Mit GitHub verbinden (IHREN_GITHUB_NAMEN ersetzen!)
git remote add origin https://github.com/IHREN_GITHUB_NAMEN/simplimed-foerderstrategie.git

# Hochladen
git branch -M main
git push -u origin main
```

### 3️⃣ **GitHub Pages aktivieren** (1 Min)
1. Gehen Sie zu: `github.com/IHREN_NAMEN/simplimed-foerderstrategie`
2. Click **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**

## 🎯 Fertig! Ihre URL:
```
https://IHREN_GITHUB_NAMEN.github.io/simplimed-foerderstrategie/geschaeftsfuehrer-briefing.html
```

⏱️ **Warten Sie 3-5 Minuten** bis die Seite live ist!

---

## 🆘 Häufige Probleme:

**"fatal: remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/IHREN_NAMEN/simplimed-foerderstrategie.git
```

**"Permission denied"**
- Prüfen Sie ob Sie bei GitHub eingeloggt sind
- Repository muss **Public** sein

**404 Fehler**
- Warten Sie weitere 5 Minuten
- Prüfen Sie die URL genau (mit .html am Ende!)

---

**🎉 Das war's! In 5 Minuten online!**