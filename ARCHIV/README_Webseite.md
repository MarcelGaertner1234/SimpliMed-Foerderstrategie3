# SimpliMed Förderstrategie Dashboard

## 🚀 Schnellstart

1. Öffnen Sie die Datei `index.html` in einem modernen Webbrowser (Chrome, Firefox, Safari, Edge)
2. Die Webseite lädt automatisch alle JSON-Daten aus dem Projektordner

**Wichtig**: Die Webseite muss über einen Webserver gestartet werden, damit die JSON-Dateien geladen werden können.

### Lokalen Webserver starten:

**Option 1 - Python (empfohlen):**
```bash
cd /Users/marcelgaertner/Desktop/simplimed-foerderantrag
python3 -m http.server 8000
```
Dann öffnen Sie: http://localhost:8000

**Option 2 - VS Code:**
- Installieren Sie die "Live Server" Extension
- Rechtsklick auf `index.html` → "Open with Live Server"

**Option 3 - Node.js:**
```bash
npx http-server -p 8000
```

## 📱 Features

### 1. **Übersicht Dashboard**
- Zeigt Kernmetriken: Gesamtfördersumme, Anzahl Szenarien, Mitarbeiter, Kunden
- Zusammenfassung des Unternehmens

### 2. **Förderszenarien**
- Alle 8 Szenarien aus `foerderstrategie.json`
- Filteroptionen: Alle, Hohe Priorität, Innovation, Quick Wins
- Details pro Szenario:
  - Fördersumme und Programme
  - Vorteile und Maßnahmen
  - Projektdauer und Verantwortliche
  - Erfolgswahrscheinlichkeit

### 3. **Kommentarfunktion**
- Klick auf "Kommentieren" bei jedem Szenario
- Bewertungsstatus wählbar:
  - 🔵 Noch prüfen
  - 🟢 Gut / Umsetzen
  - 🟡 Diskutieren
  - 🔴 Nicht umsetzbar
- Kommentare werden im Browser gespeichert (localStorage)

### 4. **Unternehmensdaten**
- Firmenprofil aus `firmenprofil.json`
- Kennzahlen und Prognosen aus `kennzahlen.json`
- Umsatzentwicklung 2024-2029

### 5. **Marktanalyse**
- Digital Health Marktdaten
- Zielmarktanalyse (Heilpraktiker, Osteopathen)
- Marktchancen kurz-/mittel-/langfristig

### 6. **Export-Funktionen**
- **PDF Export**: Browser-Druckfunktion (Strg+P / Cmd+P)
- **Excel Export**: CSV-Download aller Szenarien
- **Kommentare Export**: JSON-Download aller Bewertungen

## 🎨 Design

- **Responsive**: Funktioniert auf Desktop, Tablet und Smartphone
- **Farbschema**: Cyan/Grün für Vertrauen und Innovation
- **Icons**: Font Awesome für bessere Visualisierung
- **Hover-Effekte**: Interaktive Karten und Buttons

## 💾 Datenspeicherung

- Kommentare werden lokal im Browser gespeichert
- Bleiben auch nach Neuladen der Seite erhalten
- Können als JSON exportiert werden

## 🔧 Anpassungen

### Neue Szenarien hinzufügen:
1. Bearbeiten Sie `foerderprogramme/foerderstrategie.json`
2. Fügen Sie neue Szenarien zum Array hinzu
3. Laden Sie die Seite neu

### Farben ändern:
- Bearbeiten Sie die CSS-Variablen in `index.html` (Zeile 15-22)

### Icons anpassen:
- Ändern Sie die Icon-Zuordnung in `app.js` (Funktion `getScenarioIcon`)

## 📋 Browser-Kompatibilität

- Chrome/Edge: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Internet Explorer: ❌ Nicht unterstützt

## 🚨 Fehlerbehebung

**Problem: "Keine Daten verfügbar"**
- Stellen Sie sicher, dass die Webseite über einen Webserver läuft
- Prüfen Sie, ob alle JSON-Dateien im richtigen Pfad liegen

**Problem: Kommentare verschwinden**
- Browser-Cache/Cookies wurden gelöscht
- Nutzen Sie die Export-Funktion zur Sicherung

## 📞 Support

Bei Fragen oder Problemen wenden Sie sich an:
- IT-Support SimpliMed GmbH
- Marcus Schmitz (Geschäftsführer)

---
Stand: Juli 2025 | Version 1.0