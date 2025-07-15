# Projektbeschreibung

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
```
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
```

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
*Stand: Juli 2025*