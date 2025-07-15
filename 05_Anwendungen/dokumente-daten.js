// Vollständige Dokumente für Download
const dokumenteInhalt = {
    "ZIM": {
        "Projektbeschreibung": {
            filename: "01_Projektbeschreibung_Datenbank-Infrastruktur.pdf",
            contentType: "application/pdf",
            getContent: function() {
                // In einer echten Anwendung würde hier die PDF-Generierung erfolgen
                // Für die Demo geben wir den vollständigen Markdown-Inhalt zurück
                return `# Projektbeschreibung

## Cloud-Native Datenbank-Infrastruktur für skalierbare Praxisverwaltung im Gesundheitswesen

### Antragsteller
SimpliMed GmbH  
Am Ehrenmal 19  
51588 Nümbrecht  
HRB 11878, Amtsgericht Siegburg

**Projektleiter:** Marcus Schmitz (Geschäftsführer)  
**Projektlaufzeit:** 18 Monate  
**Beantragte Fördersumme:** 285.000 EUR

---

## 1. Ausgangssituation und Problemstellung

### 1.1 Unternehmensprofil
Die SimpliMed GmbH ist seit 1998 führender Anbieter von Praxisverwaltungssoftware für Heilpraktiker, Ärzte und Osteopathen. Mit über 8.500 aktiven Kunden und einem Marktanteil von 15-18% im Heilpraktiker-Segment ist SimpliMed ein etablierter Player im Digital-Health-Markt.

### 1.2 Technische Herausforderungen
Die aktuelle Datenbankarchitektur basiert auf einer monolithischen Struktur aus dem Jahr 2012, die zunehmend an ihre Leistungsgrenzen stößt:

- **Performance-Engpässe:** Bei Lastspitzen (Quartalsabrechnungen) Antwortzeiten > 5 Sekunden
- **Skalierungslimitierung:** Vertikale Skalierung bei max. 15.000 gleichzeitigen Nutzern erschöpft
- **Datenschutz-Compliance:** Aktuelle Architektur erschwert Ende-zu-Ende-Verschlüsselung
- **Interoperabilität:** Fehlende FHIR-Schnittstellen für Datenaustausch mit anderen Systemen
- **Wartungsaufwand:** 40% der Entwicklungszeit für Datenbankoptimierung

### 1.3 Marktanforderungen
Der Digital-Health-Markt wächst mit 15,3% CAGR. Praxen fordern zunehmend:
- Echtzeit-Synchronisation zwischen Standorten
- KI-gestützte Analysen ihrer Praxisdaten
- Nahtlose Integration mit Telemedizin-Plattformen
- Höchste Datenschutzstandards (DSGVO, ePA-Ready)

## 2. Projektziel und Innovationsgehalt

### 2.1 Hauptziel
Entwicklung einer hochmodernen Cloud-Native Datenbank-Infrastruktur, die SimpliMed zur technologischen Spitze im Praxissoftware-Markt positioniert und die Basis für 20.000+ Kunden bis 2029 schafft.

### 2.2 Technische Innovationen

#### a) Microservices-Architektur
- **Innovation:** Zerlegung der monolithischen Datenbank in 12 spezialisierte Microservices
- **Vorteil:** Unabhängige Skalierung kritischer Komponenten, 99.9% Verfügbarkeit
- **Technologie:** Kubernetes-orchestriert, Service-Mesh (Istio)

#### b) Multi-Model Database Design
- **Innovation:** Hybride Datenhaltung (SQL + NoSQL + Graph + Time-Series)
- **Vorteil:** Optimale Datenmodelle für unterschiedliche Anwendungsfälle
- **Technologie:** PostgreSQL, MongoDB, Neo4j, InfluxDB

#### c) Edge-Computing Integration
- **Innovation:** Lokale Datenverarbeitung in Praxen bei Netzwerkausfall
- **Vorteil:** Offline-Fähigkeit mit automatischer Synchronisation
- **Technologie:** Edge-Nodes mit CockroachDB

#### d) KI-Ready Infrastructure
- **Innovation:** Integrierte ML-Pipeline für Echtzeit-Analysen
- **Vorteil:** Grundlage für zukünftige KI-Features ohne Architekturänderung
- **Technologie:** Apache Kafka, TensorFlow Serving

### 2.3 Alleinstellungsmerkmale
1. **Erste FHIR-native Praxissoftware-DB** im deutschen Markt
2. **Quantenkryptographie-Ready** für zukunftssichere Verschlüsselung
3. **Green-IT zertifiziert** mit 60% geringerem Energieverbrauch
4. **DSGVO-by-Design** mit automatisierter Datenschutz-Compliance

## 3. Wirtschaftliche Verwertung

### 3.1 Marktpotenzial
- **Zielmarkt:** 47.000 Heilpraktiker + 6.900 Osteopathen + 3.000 Privatärzte
- **Adressierbarer Markt:** 1,2 Mrd. EUR (Praxissoftware Deutschland)
- **Wachstumsprognose:** Von 8.500 auf 20.000 Kunden bis 2029

### 3.2 Geschäftsmodell-Innovation
- **Premium-Tier:** Erweiterte Features für 30 EUR/Monat Aufpreis
- **API-Marketplace:** Drittanbieter-Integrationen (15% Revenue-Share)
- **Data-Analytics-as-a-Service:** Anonymisierte Brancheninsights

### 3.3 ROI-Berechnung
- **Investition:** 500.000 EUR (285.000 Förderung + 215.000 Eigenanteil)
- **Zusatzumsatz:** 2,4 Mio. EUR/Jahr ab Jahr 3
- **Break-Even:** Monat 24
- **5-Jahres-ROI:** 380%

## 4. Technisches Konzept

### 4.1 Architektur-Migration
\`\`\`
Alt: Monolithische 3-Tier-Architektur
     └── Single PostgreSQL Instance
     
Neu: Cloud-Native Microservices
     ├── API Gateway (Kong)
     ├── Service Mesh (Istio)
     ├── Container Orchestration (Kubernetes)
     └── Multi-Model Databases
         ├── Patient Service → PostgreSQL
         ├── Billing Service → MongoDB
         ├── Analytics Service → InfluxDB
         └── Relationship Service → Neo4j
\`\`\`

### 4.2 Sicherheitskonzept
- **Zero-Trust-Architektur:** Keine impliziten Vertrauensbeziehungen
- **Ende-zu-Ende-Verschlüsselung:** AES-256 + Post-Quantum-Algorithmen
- **Audit-Trail:** Blockchain-basierte Änderungsprotokolle
- **Compliance-Automation:** Automatische DSGVO/HIPAA-Reports

### 4.3 Performance-Ziele
- **Antwortzeit:** < 100ms für 95% aller Queries
- **Durchsatz:** 50.000 Transaktionen/Sekunde
- **Verfügbarkeit:** 99.99% SLA
- **Skalierung:** Horizontal bis 100.000 gleichzeitige Nutzer

## 5. Arbeitsplan und Meilensteine

### Phase 1: Konzeption & Prototyping (Monate 1-3)
- Detaillierte Anforderungsanalyse
- Technologie-Evaluation und PoC
- Sicherheitskonzept mit BSI-Standards

### Phase 2: Entwicklung Core-Services (Monate 4-9)
- Patient-Management-Service
- Billing-Service mit GebüH/GOÄ-Engine
- Authentication & Authorization Service

### Phase 3: Migration & Testing (Monate 10-15)
- Schrittweise Datenmigration (Blue-Green-Deployment)
- Lasttests mit 20.000 simulierten Nutzern
- Penetrationstests durch externe Sicherheitsfirma

### Phase 4: Rollout & Optimierung (Monate 16-18)
- Pilotphase mit 100 ausgewählten Praxen
- Performance-Tuning basierend auf Real-World-Daten
- Vollständiger Rollout an alle 8.500 Kunden

## 6. Projektrisiken und Mitigation

### 6.1 Technische Risiken
- **Risiko:** Komplexität der Microservices-Orchestrierung
- **Mitigation:** Erfahrene DevOps-Experten, schrittweise Migration

### 6.2 Regulatorische Risiken
- **Risiko:** Änderungen in Datenschutzbestimmungen
- **Mitigation:** Enge Zusammenarbeit mit Datenschutzbeauftragten

### 6.3 Marktrisiken
- **Risiko:** Wettbewerber mit ähnlichen Lösungen
- **Mitigation:** First-Mover-Advantage, Patentanmeldungen

## 7. Nachhaltigkeit und gesellschaftlicher Nutzen

### 7.1 Ökologische Nachhaltigkeit
- **60% Energieeinsparung** durch effiziente Ressourcennutzung
- **CO2-neutrale Cloud-Provider** (100% Ökostrom)
- **Beitrag zu UN SDG 13** (Climate Action)

### 7.2 Gesellschaftlicher Mehrwert
- **Verbesserte Patientenversorgung** durch schnellere Datenverarbeitung
- **Datenschutz als Grundrecht** durch Privacy-by-Design
- **15-20 neue Arbeitsplätze** für hochqualifizierte IT-Experten

## 8. Qualifikation des Projektteams

### Projektleitung
**Marcus Schmitz** - Geschäftsführer, 25 Jahre Erfahrung im Digital Health

### Technische Leitung
**N.N.** - CTO (zu rekrutieren), Anforderung: Cloud-Architektur-Expertise

### Entwicklungsteam
- 3 Senior Backend-Entwickler (vorhanden)
- 2 DevOps-Engineers (zu rekrutieren)
- 1 Security-Spezialist (zu rekrutieren)
- 2 Datenbank-Architekten (1 vorhanden, 1 zu rekrutieren)

### Externe Partner
- **Cloud-Beratung:** Zu vergeben an spezialisiertes Systemhaus
- **Security-Audit:** Kooperation mit Fraunhofer AISEC geplant

## 9. Zusammenfassung

Das Projekt "Cloud-Native Datenbank-Infrastruktur" ist ein entscheidender Innovationsschritt für SimpliMed. Es kombiniert modernste Technologien mit den spezifischen Anforderungen des Gesundheitswesens und schafft die Grundlage für nachhaltiges Wachstum.

Mit der beantragten Förderung von 285.000 EUR kann SimpliMed:
- Seine **Technologieführerschaft** ausbauen
- Die **Kundenbasis verdoppeln**
- **15-20 neue Arbeitsplätze** schaffen
- Einen wichtigen Beitrag zur **Digitalisierung des Gesundheitswesens** leisten

Das Projekt erfüllt alle Kriterien des ZIM-Programms:
✓ Hoher Innovationsgrad  
✓ Technisches Risiko  
✓ Wirtschaftliche Verwertbarkeit  
✓ KMU-Förderung  
✓ Nachhaltigkeit

---
*Stand: Juli 2025*`;
            }
        },
        "Kostenplan": {
            filename: "02_Kostenplan_Datenbank-Infrastruktur.pdf",
            contentType: "application/pdf",
            getContent: function() {
                return `# Kostenplan - Cloud-Native Datenbank-Infrastruktur

## SimpliMed GmbH - ZIM-Einzelprojekt

**Projektlaufzeit:** 18 Monate  
**Gesamtkosten:** 500.000 EUR  
**Beantragte Förderung:** 285.000 EUR (57%)  
**Eigenanteil:** 215.000 EUR (43%)

---

## 1. Personalkosten

### 1.1 Interne Mitarbeiter

| Position | Anzahl | Stundensatz | Stunden gesamt | Kosten |
|----------|---------|-------------|----------------|---------|
| Projektleiter (Marcus Schmitz) | 1 | 95 EUR | 540 h (30h/Monat) | 51.300 EUR |
| Senior Backend-Entwickler | 3 | 75 EUR | 5.400 h (100h/Monat/Person) | 405.000 EUR |
| Datenbank-Architekt (vorhanden) | 1 | 80 EUR | 1.440 h (80h/Monat) | 115.200 EUR |
| **Zwischensumme intern** | | | **7.380 h** | **571.500 EUR** |

### 1.2 Neu zu rekrutierende Mitarbeiter

| Position | Anzahl | Stundensatz | Stunden gesamt | Kosten |
|----------|---------|-------------|----------------|---------|
| CTO/Technische Leitung | 1 | 100 EUR | 1.080 h (60h/Monat) | 108.000 EUR |
| DevOps-Engineers | 2 | 70 EUR | 2.880 h (80h/Monat/Person) | 201.600 EUR |
| Security-Spezialist | 1 | 85 EUR | 1.440 h (80h/Monat) | 122.400 EUR |
| Datenbank-Architekt | 1 | 80 EUR | 1.440 h (80h/Monat) | 115.200 EUR |
| **Zwischensumme neu** | | | **6.840 h** | **547.200 EUR** |

**Personalkosten gesamt: 1.118.700 EUR**  
*Förderfähig (25%): 279.675 EUR*

---

## 2. Sachkosten

### 2.1 Hardware & Infrastruktur

| Komponente | Anzahl | Einzelpreis | Gesamtpreis | Bemerkung |
|------------|---------|-------------|-------------|-----------|
| Development Server | 3 | 5.000 EUR | 15.000 EUR | High-Performance für Tests |
| Edge-Computing Nodes | 5 | 2.000 EUR | 10.000 EUR | Für Offline-Fähigkeit |
| Netzwerk-Equipment | 1 | 8.000 EUR | 8.000 EUR | 10Gbit Switch, Firewall |
| Backup-System | 1 | 12.000 EUR | 12.000 EUR | Redundante Datensicherung |
| **Zwischensumme Hardware** | | | **45.000 EUR** | |

### 2.2 Software-Lizenzen

| Software | Lizenztyp | Laufzeit | Kosten |
|----------|-----------|----------|---------|
| Kubernetes Enterprise | 3-Jahres-Lizenz | 18 Monate genutzt | 24.000 EUR |
| PostgreSQL Enterprise | Support-Vertrag | 18 Monate | 18.000 EUR |
| MongoDB Enterprise | Cluster-Lizenz | 18 Monate | 21.000 EUR |
| Neo4j Enterprise | Graph-DB Lizenz | 18 Monate | 15.000 EUR |
| Monitoring Tools (Datadog) | SaaS | 18 Monate | 9.000 EUR |
| Security Tools | Various | 18 Monate | 12.000 EUR |
| **Zwischensumme Software** | | | **99.000 EUR** |

**Sachkosten gesamt: 144.000 EUR**  
*Förderfähig (60%): 86.400 EUR*

---

## 3. Fremdleistungen

### 3.1 Beratung & Externe Dienstleistungen

| Dienstleistung | Anbieter | Umfang | Kosten |
|----------------|----------|---------|---------|
| Cloud-Architektur-Beratung | Spezialisiertes Systemhaus | 30 Tage | 45.000 EUR |
| Security-Audit & Penetration Testing | Externe Sicherheitsfirma | 3 Audits | 36.000 EUR |
| DSGVO-Compliance-Beratung | Datenschutzexperte | 10 Tage | 12.000 EUR |
| Performance-Optimierung | DB-Spezialist | 15 Tage | 22.500 EUR |
| **Zwischensumme Beratung** | | | **115.500 EUR** |

### 3.2 Entwicklungsunterstützung

| Leistung | Umfang | Kosten |
|----------|---------|---------|
| UI/UX-Design für Admin-Interface | 20 Tage | 15.000 EUR |
| Testautomatisierung | 30 Tage | 22.500 EUR |
| Dokumentation & Schulungsmaterial | 15 Tage | 11.250 EUR |
| **Zwischensumme Entwicklung** | | **48.750 EUR** |

**Fremdleistungen gesamt: 164.250 EUR**  
*Förderfähig (100%): 164.250 EUR*

---

## 4. Sonstige Kosten

### 4.1 Cloud-Services (Entwicklung & Test)

| Service | Anbieter | Laufzeit | Kosten |
|---------|----------|----------|---------|
| AWS Development Environment | Amazon | 18 Monate | 27.000 EUR |
| Azure Backup Services | Microsoft | 18 Monate | 9.000 EUR |
| Load Testing Services | Various | Projektbezogen | 6.000 EUR |
| **Zwischensumme Cloud** | | | **42.000 EUR** |

### 4.2 Zertifizierungen & Audits

| Zertifizierung | Kosten |
|----------------|---------|
| ISO 27001 Vorbereitung | 15.000 EUR |
| BSI-Grundschutz | 12.000 EUR |
| FHIR-Konformität | 8.000 EUR |
| **Zwischensumme Zertifizierung** | **35.000 EUR** |

### 4.3 Reise- & Schulungskosten

| Zweck | Kosten |
|-------|---------|
| Konferenzen & Workshops | 8.000 EUR |
| Projektmeetings | 4.000 EUR |
| Schulungen für neue Technologien | 12.000 EUR |
| **Zwischensumme Reise/Schulung** | **24.000 EUR** |

**Sonstige Kosten gesamt: 101.000 EUR**  
*Förderfähig (50%): 50.500 EUR*

---

## 5. Kostenübersicht nach Quartalen

| Quartal | Personal | Sachkosten | Fremdleistungen | Sonstige | Gesamt |
|---------|----------|------------|-----------------|----------|---------|
| Q1 2025 | 155.400 EUR | 65.000 EUR | 45.000 EUR | 15.000 EUR | 280.400 EUR |
| Q2 2025 | 186.450 EUR | 35.000 EUR | 35.000 EUR | 18.000 EUR | 274.450 EUR |
| Q3 2025 | 186.450 EUR | 20.000 EUR | 30.000 EUR | 16.000 EUR | 252.450 EUR |
| Q4 2025 | 186.450 EUR | 12.000 EUR | 25.000 EUR | 17.000 EUR | 240.450 EUR |
| Q1 2026 | 186.450 EUR | 8.000 EUR | 20.000 EUR | 20.000 EUR | 234.450 EUR |
| Q2 2026 | 155.400 EUR | 4.000 EUR | 9.250 EUR | 15.000 EUR | 183.650 EUR |
| **Gesamt** | **1.056.600 EUR** | **144.000 EUR** | **164.250 EUR** | **101.000 EUR** | **1.465.850 EUR** |

---

## 6. Finanzierungsplan

### 6.1 Förderfähige Kosten nach ZIM

| Kostenart | Gesamtkosten | Fördersatz | Förderfähig |
|-----------|--------------|------------|-------------|
| Personalkosten (intern) | 571.500 EUR | 25% | 142.875 EUR |
| Personalkosten (neu) | 547.200 EUR | 25% | 136.800 EUR |
| Sachkosten | 144.000 EUR | 0% | 0 EUR |
| Fremdleistungen | 164.250 EUR | 100% | 164.250 EUR |
| Sonstige Kosten | 101.000 EUR | 0% | 0 EUR |
| **Summe** | **1.527.950 EUR** | | **443.925 EUR** |

**Maximale ZIM-Förderung (25% der Gesamtkosten, max. 380.000 EUR): 285.000 EUR**

### 6.2 Eigenanteil-Finanzierung

| Quelle | Betrag | Anteil |
|--------|---------|---------|
| Liquiditätsreserven | 150.000 EUR | 30% |
| Geplanter Cashflow 2025/26 | 200.000 EUR | 40% |
| Bankdarlehen (bereits zugesagt) | 150.000 EUR | 30% |
| **Gesamt Eigenfinanzierung** | **500.000 EUR** | **100%** |

---

## 7. Wirtschaftlichkeitsberechnung

### 7.1 Investition
- **Gesamtprojektkosten:** 500.000 EUR
- **ZIM-Förderung:** 285.000 EUR
- **Eigenanteil:** 215.000 EUR

### 7.2 Erwartete Erträge

| Jahr | Neue Kunden | Zusatzumsatz Premium | API-Revenue | Gesamt/Jahr |
|------|-------------|---------------------|-------------|-------------|
| 2026 | 500 | 180.000 EUR | 50.000 EUR | 230.000 EUR |
| 2027 | 1.500 | 540.000 EUR | 150.000 EUR | 690.000 EUR |
| 2028 | 3.000 | 1.080.000 EUR | 300.000 EUR | 1.380.000 EUR |
| 2029 | 5.000 | 1.800.000 EUR | 500.000 EUR | 2.300.000 EUR |

### 7.3 ROI-Berechnung
- **Break-Even:** Monat 24 (Q4 2026)
- **ROI nach 3 Jahren:** 215%
- **ROI nach 5 Jahren:** 380%

---

## 8. Kostencontrolling

### 8.1 Controlling-Maßnahmen
- Monatliche Soll-Ist-Vergleiche
- Quartalsweise Meilenstein-Reviews
- Projektsteuerungsausschuss (monatlich)

### 8.2 Risikopuffer
- 10% Puffer in Personalkosten einkalkuliert
- Flexible Fremdleistungsvergabe
- Priorisierung von Features bei Budgetengpässen

---

## 9. Anlagen zum Kostenplan

- **Anlage 1:** Detaillierte Stundensatzkalkulation
- **Anlage 2:** Angebote für Fremdleistungen
- **Anlage 3:** Finanzierungszusage Bank
- **Anlage 4:** Liquiditätsplanung 2025-2027

---

*Dieser Kostenplan wurde nach bestem Wissen und Gewissen erstellt und basiert auf aktuellen Marktpreisen und realistischen Aufwandsschätzungen.*

**Nümbrecht, Juli 2025**

_____________________  
Marcus Schmitz  
Geschäftsführer SimpliMed GmbH`;
            }
        },
        "Arbeits- und Zeitplan": {
            filename: "03_Arbeits-und-Zeitplan_Datenbank-Infrastruktur.pdf",
            contentType: "application/pdf",
            getContent: function() {
                return `# Arbeits- und Zeitplan

## Cloud-Native Datenbank-Infrastruktur für SimpliMed GmbH

**Projektdauer:** 18 Monate (01.10.2025 - 31.03.2027)  
**Projektleiter:** Marcus Schmitz

---

## 1. Projektphasen-Übersicht

\`\`\`
Phase 1: Konzeption & Design        (Monate 1-3)   Okt 2025 - Dez 2025
Phase 2: Entwicklung Core-Services  (Monate 4-9)   Jan 2026 - Jun 2026
Phase 3: Migration & Testing        (Monate 10-15) Jul 2026 - Dez 2026
Phase 4: Rollout & Optimierung     (Monate 16-18) Jan 2027 - Mär 2027
\`\`\`

---

## 2. Detaillierter Arbeitsplan

### PHASE 1: Konzeption & Design (Monate 1-3)

#### Arbeitspaket 1.1: Anforderungsanalyse
**Dauer:** 4 Wochen (Okt 2025)  
**Verantwortlich:** Marcus Schmitz, CTO  
**Ressourcen:** 2 Senior Entwickler, 1 DB-Architekt

**Aufgaben:**
- Detaillierte Analyse der Ist-Architektur
- Stakeholder-Interviews (10 Pilotkunden)
- Performance-Baseline der aktuellen Lösung
- Compliance-Anforderungen (DSGVO, MDR)
- Erstellung Lastenheft

**Deliverables:**
- [ ] Anforderungsdokument (50 Seiten)
- [ ] Performance-Baseline-Report
- [ ] Compliance-Matrix

#### Arbeitspaket 1.2: Technologie-Evaluation
**Dauer:** 3 Wochen (Nov 2025)  
**Verantwortlich:** CTO, DB-Architekten  
**Ressourcen:** 2 DB-Architekten, 1 DevOps

**Aufgaben:**
- Evaluation Cloud-Provider (AWS, Azure, GCP)
- Datenbank-Technologie-Vergleich
- Proof of Concepts für kritische Komponenten
- Sicherheitsarchitektur-Design
- Kostenmodelle verschiedener Ansätze

**Deliverables:**
- [ ] Technologie-Entscheidungsmatrix
- [ ] 3 funktionierende PoCs
- [ ] Cloud-Provider-Vergleich

#### Arbeitspaket 1.3: Architektur-Design
**Dauer:** 5 Wochen (Nov-Dez 2025)  
**Verantwortlich:** DB-Architekten  
**Ressourcen:** 2 DB-Architekten, 3 Senior Entwickler

**Aufgaben:**
- Microservices-Schnitt definieren
- API-Design (REST/GraphQL/gRPC)
- Datenmodelle für Multi-Model-Ansatz
- Sicherheitskonzept ausarbeiten
- CI/CD-Pipeline-Design

**Deliverables:**
- [ ] Detaillierte Systemarchitektur
- [ ] API-Spezifikationen
- [ ] Datenmodell-Dokumentation
- [ ] Sicherheitskonzept

**Meilenstein M1 (31.12.2025): Architektur-Design abgeschlossen ✓**

---

### PHASE 2: Entwicklung Core-Services (Monate 4-9)

#### Arbeitspaket 2.1: Infrastruktur-Setup
**Dauer:** 4 Wochen (Jan 2026)  
**Verantwortlich:** DevOps-Team  
**Ressourcen:** 2 DevOps-Engineers

**Aufgaben:**
- Kubernetes-Cluster aufsetzen
- Service-Mesh implementieren
- Monitoring & Logging Setup
- CI/CD-Pipeline implementieren
- Development-Environments

**Deliverables:**
- [ ] Funktionierendes K8s-Cluster
- [ ] CI/CD-Pipeline
- [ ] Monitoring-Dashboard

#### Arbeitspaket 2.2: Patient-Management-Service
**Dauer:** 6 Wochen (Jan-Feb 2026)  
**Verantwortlich:** Team Lead Backend  
**Ressourcen:** 2 Senior Entwickler

**Aufgaben:**
- Service-Implementierung (Go/Java)
- PostgreSQL-Schema Design
- FHIR-Ressourcen-Mapping
- Unit- und Integrationstests
- Performance-Optimierung

**Deliverables:**
- [ ] Deployable Patient-Service
- [ ] API-Dokumentation
- [ ] Test-Coverage > 90%

#### Arbeitspaket 2.3: Billing-Service
**Dauer:** 8 Wochen (Feb-Apr 2026)  
**Verantwortlich:** Senior Backend-Entwickler  
**Ressourcen:** 3 Senior Entwickler

**Aufgaben:**
- GebüH/GOÄ-Engine portieren
- MongoDB-Schema für Abrechnungen
- Transaktionssicherheit implementieren
- Batch-Processing für Quartalsabrechnungen
- Integration Finanzbuchhaltung

**Deliverables:**
- [ ] Billing-Service mit allen Abrechnungsarten
- [ ] Batch-Processing-System
- [ ] Reconciliation-Reports

**Meilenstein M2 (30.04.2026): Core-Services funktionsfähig ✓**

#### Arbeitspaket 2.4: Analytics-Service
**Dauer:** 6 Wochen (Apr-Mai 2026)  
**Verantwortlich:** DB-Architekt  
**Ressourcen:** 1 DB-Architekt, 2 Entwickler

**Aufgaben:**
- Time-Series-DB Setup (InfluxDB)
- Real-Time Analytics Pipeline
- Dashboard-Backend
- KI-Ready Data Pipeline
- Anonymisierung für Benchmarks

**Deliverables:**
- [ ] Analytics-Service
- [ ] Streaming-Pipeline
- [ ] Anonymisierungs-Engine

#### Arbeitspaket 2.5: Security & Auth Service
**Dauer:** 4 Wochen (Jun 2026)  
**Verantwortlich:** Security-Spezialist  
**Ressourcen:** 1 Security-Spezialist, 1 Senior Entwickler

**Aufgaben:**
- OAuth2/OIDC Implementation
- Zero-Trust-Policies
- Verschlüsselungs-Layer
- Audit-Trail mit Blockchain
- Penetration-Testing

**Deliverables:**
- [ ] Auth-Service
- [ ] Security-Policies
- [ ] Pentest-Report

**Meilenstein M3 (30.06.2026): Alle Services entwickelt ✓**

---

### PHASE 3: Migration & Testing (Monate 10-15)

#### Arbeitspaket 3.1: Migrations-Tools
**Dauer:** 4 Wochen (Jul 2026)  
**Verantwortlich:** DB-Architekten  
**Ressourcen:** 2 DB-Architekten, 1 Entwickler

**Aufgaben:**
- ETL-Pipeline für Datenmigration
- Validierungs-Scripts
- Rollback-Mechanismen
- Delta-Sync während Migration
- Migrations-Dashboard

**Deliverables:**
- [ ] Migrations-Toolkit
- [ ] Validierungs-Suite
- [ ] Rollback-Prozeduren

#### Arbeitspaket 3.2: Testumgebung & Lasttests
**Dauer:** 6 Wochen (Aug-Sep 2026)  
**Verantwortlich:** DevOps-Team  
**Ressourcen:** 2 DevOps, 1 QA-Engineer

**Aufgaben:**
- Produktionsnahe Testumgebung
- Lasttest-Szenarien (20.000 User)
- Chaos-Engineering Tests
- Performance-Baseline neue Architektur
- Disaster-Recovery-Tests

**Deliverables:**
- [ ] Testumgebung
- [ ] Lasttest-Reports
- [ ] DR-Prozeduren getestet

**Meilenstein M4 (30.09.2026): System performance-validiert ✓**

#### Arbeitspaket 3.3: Pilotmigration
**Dauer:** 8 Wochen (Okt-Nov 2026)  
**Verantwortlich:** Projektleiter  
**Ressourcen:** Gesamtes Team

**Aufgaben:**
- Auswahl 50 Pilotkunden
- Schrittweise Migration
- 24/7 Monitoring
- Performance-Tuning
- Feedback-Integration

**Deliverables:**
- [ ] 50 migrierte Pilotkunden
- [ ] Performance-Reports
- [ ] Optimierungsliste

#### Arbeitspaket 3.4: Vollständige Migration
**Dauer:** 4 Wochen (Dez 2026)  
**Verantwortlich:** CTO  
**Ressourcen:** Gesamtes Team + Support

**Aufgaben:**
- Gestaffelte Migration (500 Kunden/Tag)
- Blue-Green-Deployment
- Echtzeit-Monitoring
- Incident-Management
- Kommunikation mit Kunden

**Deliverables:**
- [ ] 8.500 Kunden migriert
- [ ] Migrations-Report
- [ ] Lessons Learned

**Meilenstein M5 (31.12.2026): Migration abgeschlossen ✓**

---

### PHASE 4: Rollout & Optimierung (Monate 16-18)

#### Arbeitspaket 4.1: Performance-Optimierung
**Dauer:** 4 Wochen (Jan 2027)  
**Verantwortlich:** DevOps-Team  
**Ressourcen:** 2 DevOps, 1 DB-Architekt

**Aufgaben:**
- Analyse Produktionsdaten
- Query-Optimierung
- Caching-Strategien
- Resource-Scaling
- Cost-Optimierung

**Deliverables:**
- [ ] Optimierte Services
- [ ] Performance-Steigerung 30%
- [ ] Kosten-Reduktion 20%

#### Arbeitspaket 4.2: Feature-Rollout
**Dauer:** 4 Wochen (Feb 2027)  
**Verantwortlich:** Produktmanager  
**Ressourcen:** 3 Entwickler

**Aufgaben:**
- Premium-Features aktivieren
- API-Marketplace Launch
- Partner-Integrationen
- Kundenschulungen
- Marketing-Kampagne

**Deliverables:**
- [ ] Premium-Tier live
- [ ] 5 Partner-Integrationen
- [ ] Schulungsmaterialien

#### Arbeitspaket 4.3: Dokumentation & Abschluss
**Dauer:** 4 Wochen (Mär 2027)  
**Verantwortlich:** Projektleiter  
**Ressourcen:** Gesamtes Team

**Aufgaben:**
- Technische Dokumentation
- Betriebshandbücher
- Knowledge-Transfer
- Abschlussbericht ZIM
- Projektevaluation

**Deliverables:**
- [ ] Vollständige Dokumentation
- [ ] ZIM-Abschlussbericht
- [ ] Übergabe an Betrieb

**Meilenstein M6 (31.03.2027): Projekt erfolgreich abgeschlossen ✓**

---

## 3. Ressourcenplan (Gantt-Chart)

\`\`\`
                    2025                    2026                    2027
Team/Rolle      Q4  | Q1  | Q2  | Q3  | Q4  | Q1  |
--------------------------------------------------------
Projektleiter   ████|████|████|████|████|████|
CTO             ████|████|████|████|████|████|
DB-Architekt 1  ████|████|████|████|████|████|
DB-Architekt 2   ░░░|████|████|████|████|████|
Backend-Dev 1   ████|████|████|████|████|████|
Backend-Dev 2   ████|████|████|████|████|████|
Backend-Dev 3   ████|████|████|████|████|████|
DevOps 1         ░░░|████|████|████|████|████|
DevOps 2         ░░░|████|████|████|████|████|
Security-Exp     ░░░|░░░░|████|████|████|████|
QA-Engineer      ░░░|░░░░|░░░░|████|████|████|

████ = Vollzeit (100%)
░░░░ = Nicht im Projekt
\`\`\`

---

## 4. Kritischer Pfad

Die folgenden Arbeitspakete liegen auf dem kritischen Pfad:

1. **AP 1.3**: Architektur-Design → Verzögerung blockiert gesamte Entwicklung
2. **AP 2.3**: Billing-Service → Kernfunktionalität, ohne die keine Migration möglich
3. **AP 3.1**: Migrations-Tools → Ohne diese keine sichere Migration
4. **AP 3.4**: Vollständige Migration → Größtes Risiko, höchste Komplexität

**Risiko-Mitigation:**
- Wöchentliche Reviews für kritische Pfad-Elemente
- 15% Zeitpuffer bei kritischen Arbeitspaketen
- Parallele Entwicklung wo möglich
- Frühzeitige Eskalation bei Verzögerungen

---

## 5. Qualitätssicherung

### QS-Maßnahmen pro Phase:

**Phase 1:** 
- Architecture Review Board (externe Experten)
- Compliance-Check durch Datenschutzbeauftragten

**Phase 2:**
- Code-Reviews (4-Augen-Prinzip)
- Automatisierte Tests (>90% Coverage)
- Security-Audits

**Phase 3:**
- Strukturierte Testpläne
- Performance-Benchmarks
- User Acceptance Tests

**Phase 4:**
- Produktions-Monitoring
- Customer Satisfaction Surveys
- Post-Implementation Review

---

## 6. Kommunikationsplan

### Regelmäßige Meetings:
- **Daily Standup:** Täglich, 15 Min, Entwicklungsteam
- **Sprint Review:** 2-wöchentlich, Stakeholder
- **Lenkungsausschuss:** Monatlich, Geschäftsführung
- **ZIM-Statusbericht:** Quartalsweise

### Kommunikationskanäle:
- Slack: Tägliche Kommunikation
- Jira: Aufgabenverwaltung
- Confluence: Dokumentation
- GitHub: Code-Repository

---

## 7. Erfolgskriterien

### Technische Kriterien:
- ✓ Antwortzeit < 100ms für 95% aller Queries
- ✓ 99.99% Verfügbarkeit erreicht
- ✓ Alle 8.500 Kunden erfolgreich migriert
- ✓ Zero-Downtime-Deployment implementiert

### Geschäftliche Kriterien:
- ✓ Projekt im Zeit- und Budgetrahmen
- ✓ 500 neue Kunden im ersten Jahr
- ✓ 30% Performance-Verbesserung
- ✓ Kundenzufriedenheit > 90%

---

*Dieser Arbeits- und Zeitplan wurde unter Berücksichtigung aller bekannten Risiken und mit angemessenen Puffern erstellt.*

**Stand: Juli 2025**`;
            }
        }
    }
};

// Erweiterte Download-Funktion mit vollständigen Dokumenten
function downloadVollstaendigesDokument(foerderprogramm, dokumentTyp) {
    const doc = dokumenteInhalt[foerderprogramm] && dokumenteInhalt[foerderprogramm][dokumentTyp];
    if (doc) {
        const content = doc.getContent();
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = doc.filename.replace('.pdf', '.txt'); // Für Demo als .txt
        a.click();
        URL.revokeObjectURL(url);
        
        showSuccess(`Dokument "${doc.filename}" wurde heruntergeladen!`);
    }
}

// Funktion zum Anzeigen des Upload-Status
function getUploadStatus(foerderprogramm, dokumentTyp) {
    const uploadedDocs = JSON.parse(localStorage.getItem('uploaded_documents') || '{}');
    return uploadedDocs[foerderprogramm] && uploadedDocs[foerderprogramm][dokumentTyp];
}

// Funktion zum Löschen eines hochgeladenen Dokuments
function deleteUploadedDocument(foerderprogramm, dokumentTyp) {
    const uploadedDocs = JSON.parse(localStorage.getItem('uploaded_documents') || '{}');
    if (uploadedDocs[foerderprogramm] && uploadedDocs[foerderprogramm][dokumentTyp]) {
        delete uploadedDocs[foerderprogramm][dokumentTyp];
        localStorage.setItem('uploaded_documents', JSON.stringify(uploadedDocs));
        showSuccess('Dokument wurde entfernt.');
        
        // Refresh checklist
        const content = generateChecklist(foerderprogramm);
        document.getElementById('checklistContent').innerHTML = content;
    }
}