# SimpliMed 2.0 - Förderstrategie Dashboard

## 📋 Übersicht

Ein interaktives Dashboard zur Entscheidungsunterstützung für Förderprogramme der **SimpliMed GmbH**. Das System ermöglicht es Geschäftsführern, verschiedene Förderszenarien zu bewerten und fundierte Entscheidungen zu treffen.

## 🎯 Hauptfunktionen

### 📊 **CEO-Dashboard**
- **Interaktive Szenario-Auswahl**: 4 verschiedene Förderszenarien mit Radio-Button-Auswahl
- **Dynamische Finanzierungsplanung**: Automatische Anpassung von Förderquoten, Eigenanteilen und Kreditbedarf
- **Adaptive Zeitplanung**: Szenario-spezifische Meilensteine und Bewilligungszeiten
- **Entscheidungsdokumentation**: Kommentarfunktion und Entscheidungshistorie

### 🗂️ **Förderszenarien-Analyse**
- **6 validierte Szenarien**: Von ZIM-Hauptförderung bis Steuer-optimierte Kombinationen
- **Realistische Bewertung**: Alle Szenarien sind rechtlich geprüft und de-minimis-konform
- **Gruppierung**: Einzelförderungen, 2er-Pakete, 3er-Pakete und 4er-Pakete
- **Filterung**: Nach Priorität, Innovation und Kommentierungsstatus

### 🔍 **Förderprogramm-Datenbank**
- **25 aktuelle Programme**: ZIM, MID NRW, BAFA, KfW, Forschungszulage, etc.
- **Vollständige Dokumentation**: Anforderungen, Dokumente, Kontakte, Quellen
- **Eignung-Bewertung**: Kategorisiert nach Geeignet/Alternative/Nicht geeignet
- **Collapsible Interface**: Strukturierte Darstellung mit ausklappbaren Bereichen

## 🗂️ **Projektstruktur**

```
SimpliMed-Foerderstrategie/
├── 📁 01_Unternehmensdaten/        # Firmenprofil, Marktanalyse, Kennzahlen
├── 📁 02_Strategie_Dokumente/      # Strategische Grundlagen und Pläne
├── 📁 03_Pitch_Deck/              # Investorenpräsentationen
├── 📁 04_Foerderanalyse/          # Förderprogramme und Szenarien
├── 📁 05_Anwendungen/             # Dashboard-Anwendungen
├── 📁 06_ToDos_Dokumentation/     # Umsetzungspläne und Checklisten
├── 📁 ARCHIV/                     # Alte Versionen und Backups
└── 📄 geschaeftsfuehrer-briefing.html  # **HAUPT-DASHBOARD**
```

## 🚀 **Schnellstart**

### 1. Repository klonen
```bash
git clone [repository-url]
cd SimpliMed-Foerderstrategie
```

### 2. Dashboard starten
```bash
# Einfach die Hauptdatei im Browser öffnen
open geschaeftsfuehrer-briefing.html
```

### 3. Navigation
- **Tab 1**: Entscheidungsvorlage mit Szenario-Auswahl
- **Tab 2**: Alle Förderszenarien im Detail
- **Tab 3**: Förderprogramm-Datenbank
- **Tab 4**: Dokumentenbibliothek

## 💡 **Förderszenarien im Detail**

### 🏆 **Szenario 1: ZIM + Hausbank (HAUPTEMPFEHLUNG)**
- **Förderung**: 285.000 EUR
- **Laufzeit**: 18 Monate
- **Förderquote**: 45%
- **Besonderheit**: Nutzt AGVO Art. 25 (nicht De-minimis)

### 💰 **Szenario 2: MID NRW + Hausbank + BAFA**
- **Förderung**: 30.000 EUR
- **Laufzeit**: 12 Monate
- **Förderquote**: 16,7%
- **Besonderheit**: De-minimis-konform, schnelle Bewilligung

### 🚀 **Szenario 3: MID NRW + Hausbank Express**
- **Förderung**: 25.000 EUR
- **Laufzeit**: 6 Monate
- **Förderquote**: 14,3%
- **Besonderheit**: Hausbank-Zusage in 48h

### 💡 **Szenario 5: Forschungszulage + KfW + MID + BAFA**
- **Förderung**: 80.000 EUR
- **Laufzeit**: 24 Monate
- **Förderquote**: 16%
- **Besonderheit**: Rückwirkende Steuervorteile 2021-2024

## 📊 **Technische Features**

### Frontend
- **Vanilla JavaScript**: Keine externen Abhängigkeiten
- **Responsive Design**: Optimiert für Desktop und Mobile
- **LocalStorage**: Persistente Kommentare und Entscheidungen
- **Dynamic Content**: Echzeit-Updates bei Szenario-Wechsel

### Datenstruktur
- **JSON-basiert**: Strukturierte Datenmodelle
- **Modular**: Getrennte Daten für Szenarien, Programme, Dokumente
- **Validiert**: Alle Finanzberechnungen sind geprüft

## 🔧 **Konfiguration**

### Anpassung der Szenarien
```javascript
// In geschaeftsfuehrer-briefing.html
const scenariosData = [
    {
        id: 1,
        titel: "Ihr Szenario",
        foerdersumme_geschaetzt: "100000",
        // ... weitere Eigenschaften
    }
];
```

### Förderprogramme hinzufügen
```javascript
// In geschaeftsfuehrer-briefing.html
const fundingProgramsData = [
    {
        id: 26,
        name: "Neues Förderprogramm",
        type: "Bundesförderung",
        // ... weitere Eigenschaften
    }
];
```

## 📚 **Dokumentation**

### Für Entwickler
- `NUTZUNGSANLEITUNG.md` - Detaillierte Bedienungsanleitung
- `DEPLOYMENT.md` - Deployment-Anweisungen
- `BUGFIXES_CHANGELOG.md` - Änderungshistorie

### Für Anwender
- `QUICK_START_GITHUB.md` - Schnellstart-Guide
- `INDEX.md` - Projekt-Übersicht
- `Analyse-Bewertung-Foerderszenarien-AKTUALISIERT-2025.md` - Fachliche Analyse

## 🔍 **Rechtliche Hinweise**

### De-minimis-Beihilfe
- **Grenze**: 200.000 EUR in 3 Jahren
- **Ausnahmen**: F&E-Beihilfen (AGVO Art. 25)
- **Dokumentation**: Alle Szenarien sind rechtlich geprüft

### Kombinierbarkeit
- **Erlaubt**: Verschiedene Beihilfearten
- **Verboten**: Doppelförderung gleicher Kosten
- **Empfehlung**: Zeitliche Staffelung von Anträgen

## 🎯 **Zielgruppe**

### Primär
- **Geschäftsführer**: Strategische Entscheidungen
- **Förderberater**: Fachliche Unterstützung
- **Steuerberater**: Optimierung der Förderung

### Sekundär
- **Entwickler**: Technische Anpassungen
- **Investoren**: Transparenz über Förderstruktur

## 📈 **Projektziele**

### Unternehmensziele
- **Modernisierung**: KI-gestützte Praxissoftware
- **Skalierung**: 20.000+ Kunden bis 2029
- **Innovation**: Erste KI-Assistenz für Heilpraktiker
- **Finanzierung**: Optimale Förderquote erreichen

### Technische Ziele
- **Cloud-Native**: Microservices-Architektur
- **Interoperabilität**: FHIR-Standard Integration
- **Performance**: 50% Steigerung der Verarbeitungsgeschwindigkeit
- **Sicherheit**: Ende-zu-Ende-Verschlüsselung

## 🤝 **Contributing**

### Voraussetzungen
- Grundkenntnisse in HTML, CSS, JavaScript
- Verständnis für Förderprogramme
- Versionskontrolle mit Git

### Entwicklung
```bash
# Repository forken
git clone [your-fork-url]

# Änderungen vornehmen
git add .
git commit -m "Beschreibung der Änderung"

# Pull Request erstellen
git push origin main
```

## 📞 **Support**

### Technischer Support
- **Issues**: GitHub Issues für Bugs und Feature-Requests
- **Dokumentation**: Alle Guides im Repository

### Fachlicher Support
- **Förderberatung**: Externe Beratung empfohlen
- **Rechtsfragen**: Steuerberater konsultieren

## 📄 **Lizenz**

Dieses Projekt ist für den internen Gebrauch der SimpliMed GmbH entwickelt. Alle Rechte vorbehalten.

## 🔄 **Versionshistorie**

### Version 1.0 (Juli 2025)
- ✅ Grundlegendes Dashboard
- ✅ 6 Förderszenarien
- ✅ 25 Förderprogramme
- ✅ Dynamische Finanzierungsplanung
- ✅ Entscheidungsdokumentation

---

**Entwickelt für SimpliMed GmbH** | **Stand: Juli 2025** | **Status: Produktiv**