# Arbeits- und Zeitplan

## Cloud-Native Datenbank-Infrastruktur für SimpliMed GmbH

**Projektdauer:** 18 Monate (01.10.2025 - 31.03.2027)  
**Projektleiter:** Marcus Schmitz

---

## 1. Projektphasen-Übersicht

```
Phase 1: Konzeption & Design        (Monate 1-3)   Okt 2025 - Dez 2025
Phase 2: Entwicklung Core-Services  (Monate 4-9)   Jan 2026 - Jun 2026
Phase 3: Migration & Testing        (Monate 10-15) Jul 2026 - Dez 2026
Phase 4: Rollout & Optimierung     (Monate 16-18) Jan 2027 - Mär 2027
```

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

```
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
```

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

**Stand: Juli 2025**