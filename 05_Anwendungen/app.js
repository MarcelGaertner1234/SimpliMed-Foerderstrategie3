// Embedded data from our JSON files
const embeddedData = {
    firmenprofil: {
        "firmenprofil": {
            "name": "SimpliMed GmbH",
            "sitz": "Am Ehrenmal 19, 51588 Nümbrecht",
            "gründungsjahr": "2012",
            "gründungsdatum": "13.01.2012",
            "geschäftsführer": "Marcus Schmitz",
            "handelsregister_nr": "HRB 11878",
            "registergericht": "Amtsgericht Siegburg",
            "stammkapital": "25.000 €",
            "umsatz_letztes_jahr": "2.2 - 3.0 Mio. EUR (2024, geschätzt)",
            "anzahl_mitarbeiter": "10 (bestätigt)",
            "branche": "Softwareentwicklung für das Gesundheitswesen",
            "tätigkeitsfeld": "Softwareentwicklung und Vertrieb sowie die Durchführung von Chefarztabrechnungen",
            "website": "https://www.simplimed.de",
            "markenrechte": ["questiomed"],
            "zielgruppe": ["Heilpraktiker", "Ärzte", "Osteopathen"],
            "kundenbasis": "Über 8.500 Kunden in Deutschland und EU"
        }
    },
    kennzahlen: {
        "kennzahlen": {
            "umsatz_schaetzung": {
                "2022": "1.500.000 - 2.000.000 EUR",
                "2023": "1.800.000 - 2.400.000 EUR",
                "2024": "2.200.000 - 3.000.000 EUR",
                "2025_prognose": "2.700.000 - 3.600.000 EUR",
                "2026_prognose": "3.200.000 - 4.300.000 EUR",
                "2027_prognose": "3.800.000 - 5.100.000 EUR",
                "2028_prognose": "4.500.000 - 6.100.000 EUR",
                "2029_prognose": "5.400.000 - 7.300.000 EUR"
            },
            "mitarbeiterzahl": {
                "geschätzt_aktuell": "10 Mitarbeiter (bestätigt)",
                "entwicklung": {
                    "2022": "8-9",
                    "2023": "9-10",
                    "2024": "10",
                    "prognose_2025": "11-13",
                    "prognose_2026": "13-16",
                    "prognose_2027": "15-20",
                    "prognose_2028": "18-25"
                }
            },
            "marktanteil_schaetzung": {
                "aktueller_marktanteil": "15-18% (Heilpraktiker-Segment)",
                "erreichbarer_marktanteil_2029": "20-25%"
            },
            "bewertungspotenzial": {
                "skalierungspotenzial": "SEHR HOCH - SaaS-Modell mit niedrigen Grenzkosten",
                "zielmarktwachstum": "Heilpraktiker-Markt stabil, Digitalisierungsdruck steigt",
                "förderquote_realistisch": "40-50% bei ZIM, bis zu 70% bei Kooperationsprojekten"
            }
        }
    },
    marktanalyse: {
        "marktanalyse": {
            "gesamtmarkt_digital_health": {
                "deutschland": {
                    "volumen_2024": "32.69 Mrd. USD",
                    "volumen_2025": "57 Mrd. EUR",
                    "wachstumsrate": "15.30% CAGR (2023-2033)"
                },
                "praxissoftware_segment": {
                    "marktvolumen_global_2024": "11.69 Mrd. USD",
                    "marktvolumen_global_2029": "17.92 Mrd. USD",
                    "wachstumsrate": "8.92% CAGR"
                }
            },
            "zielmarkt_analyse": {
                "heilpraktiker": {
                    "anzahl_praktiker": "47.000",
                    "anzahl_praxen": "33.275",
                    "patientenkontakte_jahr": "46 Millionen",
                    "marktvolumen": "1 Mrd. EUR/Jahr"
                },
                "osteopathen": {
                    "anzahl_registriert": "6.900+ (VOD)",
                    "wachstum": "Stark wachsender Markt"
                }
            },
            "wettbewerbsanalyse": {
                "simplimed_position": {
                    "marktanteil_geschätzt": "15-18% im Heilpraktiker-Segment",
                    "unique_selling_points": [
                        "Spezialisierung auf Heilpraktiker/Osteopathen",
                        "25+ Jahre Markterfahrung",
                        "Expertise in GebüH/Hufeland-Abrechnung",
                        "Hybrid-Modell (Cloud + On-Premises)"
                    ]
                }
            },
            "marktchancen": {
                "kurzfristig": [
                    "Integration von KI-Funktionen",
                    "Telemedizin-Module",
                    "Mobile Apps Ausbau",
                    "Schnittstellen zu Krankenkassen"
                ],
                "mittelfristig": [
                    "Expansion in angrenzende Märkte",
                    "Internationale Expansion (AT, CH)",
                    "Plattform-Ökosystem aufbauen"
                ],
                "langfristig": [
                    "Marktkonsolidierung nutzen",
                    "Strategische Partnerschaften",
                    "Exit-Optionen vorbereiten"
                ]
            }
        }
    },
    foerderstrategie: {
        "szenarien": [
            {
                "titel": "Datenbank-Infrastruktur ausbauen",
                "beschreibung": "Erweiterung der bestehenden Cloud-Datenbank-Architektur zur Steigerung von Performance, Datenschutz und Interoperabilität für 8.500+ Kunden.",
                "förderprogramme": ["ZIM", "Digital Jetzt"],
                "foerdersumme_geschaetzt": "285000",
                "eigenanteil": "215000",
                "projektdauer_monate": "18",
                "vorteile": [
                    "Skalierbarkeit für 20.000+ Kunden bis 2029",
                    "DSGVO-optimierte Datenspeicherung mit Ende-zu-Ende-Verschlüsselung",
                    "50% Performance-Steigerung bei Abrechnungsprozessen",
                    "Grundlage für KI-Integration und Big Data Analytics"
                ],
                "konkrete_massnahmen": [
                    "Migration auf moderne Cloud-Native Architektur",
                    "Implementierung von Microservices",
                    "Aufbau redundanter Systeme für 99.9% Verfügbarkeit",
                    "FHIR-Standard Integration für Interoperabilität"
                ],
                "bewertung": {
                    "break_even_berechnung": {
                        "wichtigkeit": "🔶 Mittel",
                        "lösung": "Excel-Modell: 285k Investition amortisiert sich in 24 Monaten durch 15% mehr Neukunden + 20% geringere Betriebskosten",
                        "break_even_zeitpunkt": "Q3 2027"
                    },
                    "verantwortlicher": {
                        "intern": "Marcus Schmitz (Geschäftsführer)",
                        "extern": "TBD – IT-Infrastruktur Berater + ZIM-Förderberater"
                    },
                    "erfolgswahrscheinlichkeit": "85%",
                    "reifegrad": "🟢 Hoch - Technologie etabliert, Bedarf klar definiert"
                }
            },
            {
                "titel": "Digitales Marketing & Vertriebsautomatisierung",
                "beschreibung": "Implementierung eines CRM-gestützten Marketing- und Vertriebssystems zur systematischen Kundengewinnung im Heilpraktiker-Markt.",
                "förderprogramme": ["Digitalbonus NRW", "Digital Jetzt"],
                "foerdersumme_geschaetzt": "45000",
                "eigenanteil": "35000",
                "projektdauer_monate": "9",
                "vorteile": [
                    "30% Steigerung der Lead-Generierung",
                    "Automatisierte Nurturing-Kampagnen für 47.000 potenzielle Kunden",
                    "Reduzierung der Kundenakquisitionskosten um 40%",
                    "Datengetriebene Vertriebssteuerung"
                ],
                "konkrete_massnahmen": [
                    "HubSpot CRM Implementation",
                    "Marketing Automation für E-Mail-Kampagnen",
                    "Lead-Scoring-System entwickeln",
                    "Integration mit bestehender SimpliMed-Software"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "90%",
                    "reifegrad": "🟢 Hoch - Bewährte Technologien, klarer Business Case",
                    "verantwortlicher": {
                        "intern": "Neuer Marketing Manager (zu rekrutieren)",
                        "extern": "Digitalbonus NRW autorisiertes Beratungsunternehmen"
                    }
                }
            },
            {
                "titel": "Cybersecurity & Compliance Upgrade",
                "beschreibung": "Umfassendes IT-Sicherheitsaudit und Implementierung von Enterprise-Security-Standards für sensible Gesundheitsdaten.",
                "förderprogramme": ["Digitalbonus NRW", "ZIM"],
                "foerdersumme_geschaetzt": "125000",
                "eigenanteil": "95000",
                "projektdauer_monate": "12",
                "vorteile": [
                    "BSI-Grundschutz-Zertifizierung angestrebt",
                    "Zero-Trust-Security-Architektur",
                    "Erfüllung aller DSGVO-Anforderungen für Gesundheitsdaten",
                    "Wettbewerbsvorteil durch Sicherheitszertifikate"
                ],
                "konkrete_massnahmen": [
                    "Penetration Testing und Vulnerability Assessment",
                    "Implementierung von SIEM-System",
                    "Ende-zu-Ende-Verschlüsselung aller Patientendaten",
                    "ISO 27001 Vorbereitung"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "95%",
                    "reifegrad": "🟢 Hoch - Notwendigkeit klar, Lösungen am Markt verfügbar",
                    "verantwortlicher": {
                        "intern": "IT-Sicherheitsbeauftragter (zu benennen)",
                        "extern": "Spezialisiertes IT-Security Beratungshaus"
                    }
                }
            },
            {
                "titel": "Weiterbildung für digitale Transformation",
                "beschreibung": "Systematisches Qualifizierungsprogramm für alle 10 Mitarbeiter zu KI, Cloud-Technologien und agilen Methoden.",
                "förderprogramme": ["Bildungsscheck NRW", "Qualifizierungschancengesetz", "Digital Jetzt"],
                "foerdersumme_geschaetzt": "35000",
                "eigenanteil": "25000",
                "projektdauer_monate": "24",
                "vorteile": [
                    "Innovationsfähigkeit des Teams steigern",
                    "Mitarbeiterbindung durch Entwicklungsperspektiven",
                    "Interne Expertise für neue Technologien aufbauen",
                    "Agilität und Reaktionsfähigkeit erhöhen"
                ],
                "konkrete_massnahmen": [
                    "KI/ML-Grundlagen für Entwickler (40h)",
                    "Cloud-Architekturen (AWS/Azure Zertifizierungen)",
                    "Agile/Scrum Master Ausbildungen",
                    "Datenschutz-Fachkunde für Gesundheitswesen"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "100%",
                    "reifegrad": "🟢 Hoch - Förderprogramme etabliert, hohe Erfolgsquote",
                    "verantwortlicher": {
                        "intern": "HR-Verantwortlicher (Marcus Schmitz)",
                        "extern": "Zertifizierte Bildungsträger"
                    }
                }
            },
            {
                "titel": "KI-Assistenzsystem für Heilpraktiker-Software",
                "beschreibung": "Entwicklung eines KI-basierten Assistenzsystems für automatisierte Dokumentation, intelligente Abrechnungsoptimierung und Therapieempfehlungen.",
                "förderprogramme": ["ZIM", "KMU-innovativ", "Horizont Europa"],
                "foerdersumme_geschaetzt": "450000",
                "eigenanteil": "350000",
                "projektdauer_monate": "36",
                "vorteile": [
                    "Alleinstellungsmerkmal im Heilpraktiker-Software-Markt",
                    "70% Zeitersparnis bei Dokumentation",
                    "Umsatzsteigerung der Praxen um 15-20%",
                    "Grundlage für Platform-as-a-Service Modell"
                ],
                "konkrete_massnahmen": [
                    "NLP-Engine für medizinische Dokumentation",
                    "Machine Learning für Abrechnungsoptimierung",
                    "Therapieempfehlungs-Algorithmen",
                    "Integration mit bestehender SimpliMed-Plattform"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "70%",
                    "reifegrad": "🟡 Mittel - Innovative Technologie, Marktakzeptanz zu validieren",
                    "verantwortlicher": {
                        "intern": "CTO (zu rekrutieren) + Marcus Schmitz",
                        "extern": "KI-Forschungsinstitut (Fraunhofer/Hochschule)"
                    }
                }
            },
            {
                "titel": "Telemedizin-Plattform Integration",
                "beschreibung": "Entwicklung eines Telemedizin-Moduls für Videosprechstunden, digitale Rezepte und Remote-Patientenbetreuung.",
                "förderprogramme": ["Innovationsfonds", "Digital Jetzt", "EFRE"],
                "foerdersumme_geschaetzt": "320000",
                "eigenanteil": "180000",
                "projektdauer_monate": "24",
                "vorteile": [
                    "Erschließung neuer Geschäftsfelder",
                    "Reaktion auf Post-COVID Marktanforderungen",
                    "Erhöhung der Praxis-Reichweite",
                    "Zusätzliche Einnahmequelle für SimpliMed"
                ],
                "konkrete_massnahmen": [
                    "WebRTC-basierte Videosprechstunden",
                    "E-Rezept-Integration",
                    "Digitale Patientenakte",
                    "Mobile Apps für Patienten"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "75%",
                    "reifegrad": "🟢 Hoch - Marktbedarf validiert, Technologie verfügbar",
                    "verantwortlicher": {
                        "intern": "Produktmanager Digital Health (zu rekrutieren)",
                        "extern": "Telemedizin-Experten + Krankenkassen-Partner"
                    }
                }
            },
            {
                "titel": "Internationale Expansion DACH-Region",
                "beschreibung": "Markterschließung Österreich und Schweiz mit lokalisierten Versionen der SimpliMed-Software.",
                "förderprogramme": ["go-international", "EFRE", "Digitalbonus NRW"],
                "foerdersumme_geschaetzt": "180000",
                "eigenanteil": "120000",
                "projektdauer_monate": "18",
                "vorteile": [
                    "Verdopplung des adressierbaren Marktes",
                    "Diversifizierung der Einnahmequellen",
                    "Skaleneffekte nutzen",
                    "Erste Schritte zur EU-weiten Expansion"
                ],
                "konkrete_massnahmen": [
                    "Lokalisierung für AT/CH Abrechnungssysteme",
                    "Partnerschaften mit lokalen Verbänden",
                    "Compliance mit nationalen Regelungen",
                    "Lokale Cloud-Infrastruktur"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "80%",
                    "reifegrad": "🟡 Mittel - Produkt ready, Marktkenntnis aufzubauen",
                    "verantwortlicher": {
                        "intern": "Business Development Manager (zu rekrutieren)",
                        "extern": "Lokale Marktexperten + Rechtsberater"
                    }
                }
            },
            {
                "titel": "Nachhaltigkeitsinitiative: Green-IT Infrastruktur",
                "beschreibung": "Aufbau einer energieeffizienten, CO2-reduzierten IT-Infrastruktur für langfristig nachhaltige Softwareentwicklung und Betrieb.",
                "förderprogramme": ["EFRE", "Umweltinnovationsprogramm", "Digital Jetzt"],
                "foerdersumme_geschaetzt": "150000",
                "eigenanteil": "100000",
                "projektdauer_monate": "15",
                "vorteile": [
                    "60% Reduzierung des Stromverbrauchs",
                    "CO2-neutrale Cloud-Infrastruktur bis 2027",
                    "Nachhaltigkeitsimage stärkt Marke und Kundenbindung",
                    "Förderfähigkeit für EU-Green-Deal-Projekte",
                    "Kosteneinsparungen von 40.000 EUR/Jahr bei Energiekosten"
                ],
                "konkrete_massnahmen": [
                    "Migration zu Green-Cloud-Providern (100% Ökostrom)",
                    "Implementierung von Energy-Efficient-Coding-Standards",
                    "Server-Konsolidierung und Virtualisierung",
                    "Nachhaltigkeits-Monitoring und CO2-Reporting",
                    "Zertifizierung nach ISO 14001 Umweltmanagement"
                ],
                "bewertung": {
                    "erfolgswahrscheinlichkeit": "90%",
                    "reifegrad": "🟢 Hoch - Technologien verfügbar, hohe Förderpriorität",
                    "verantwortlicher": {
                        "intern": "Nachhaltigkeitsbeauftragter (zu benennen)",
                        "extern": "Energieberater + Green-IT-Consultants"
                    }
                }
            },
            {
                "id": 9,
                "titel": "🚀 KOMBINATION: ZIM + Digitalbonus NRW für maximale Förderung",
                "foerderprogramm": "ZIM + Digitalbonus NRW",
                "foerdersumme_geschaetzt": "335000",
                "dauer_monate": 18,
                "prioritaet": "sehr hoch",
                "innovationsgrad": "sehr hoch",
                "beschreibung": "Optimale Kombination zweier Förderprogramme für Technologie-Innovation und erfolgreiche Markteinführung. 46,3% staatliche Förderung bei nur 100.000 EUR Kreditbedarf.",
                "kombinationsvorteil": true
            }
        ],
        "meta": {
            "gesamt_foerdersumme_potenzial": "2125000",
            "priorisierung": [
                "1. KI-Assistenzsystem (Innovationsführerschaft)",
                "2. Datenbank-Infrastruktur (Technische Basis)",
                "3. Cybersecurity (Risikominimierung)",
                "4. Telemedizin-Plattform (Markterweiterung)",
                "5. Nachhaltigkeitsinitiative (ESG-Compliance + Kosteneinsparung)",
                "6. Digitales Marketing (Wachstumsbeschleunigung)",
                "7. Internationale Expansion (Skalierung)",
                "8. Weiterbildung (Enabler für alle Projekte)"
            ]
        }
    }
};

// Global data storage
let globalData = {
    firmenprofil: embeddedData.firmenprofil,
    kennzahlen: embeddedData.kennzahlen,
    marktanalyse: embeddedData.marktanalyse,
    foerderstrategie: embeddedData.foerderstrategie,
    comments: JSON.parse(localStorage.getItem('simplimed_comments')) || {}
};

// Initialize app
document.addEventListener('DOMContentLoaded', async function() {
    // Try to load from files first, fallback to embedded data
    try {
        await loadAllData();
    } catch (error) {
        console.log('Using embedded data as fallback');
        // Data already set from embeddedData
    }
    
    setupNavigation();
    renderScenarios();
    renderCompanyData();
    renderMarketAnalysis();
    hideLoader();
});

// Keep all the existing functions from app.js below...
// (Rest of the code remains the same)

// Load all JSON data
async function loadAllData() {
    try {
        // Load all JSON files
        const files = [
            'unternehmensdaten/firmenprofil.json',
            'unternehmensdaten/kennzahlen.json',
            'unternehmensdaten/marktanalyse.json',
            'foerderprogramme/foerderstrategie.json'
        ];

        const promises = files.map(file => 
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    return response.json();
                })
                .catch(error => {
                    console.error(`Error loading ${file}:`, error);
                    return null;
                })
        );

        const [firmenprofil, kennzahlen, marktanalyse, foerderstrategie] = await Promise.all(promises);

        // Only update if successfully loaded
        if (firmenprofil) globalData.firmenprofil = firmenprofil;
        if (kennzahlen) globalData.kennzahlen = kennzahlen;
        if (marktanalyse) globalData.marktanalyse = marktanalyse;
        if (foerderstrategie) globalData.foerderstrategie = foerderstrategie;

    } catch (error) {
        console.error('Error loading data:', error);
        console.log('Using embedded data');
    }
}

// Navigation setup
function setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Update active navigation
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Set up comment form
    document.getElementById('commentForm').addEventListener('submit', saveComment);
}

// Render scenarios
function renderScenarios() {
    const container = document.getElementById('scenarios-container');
    if (!globalData.foerderstrategie || !globalData.foerderstrategie.szenarien) {
        container.innerHTML = '<p class="text-gray-500">Keine Szenarien verfügbar.</p>';
        return;
    }

    container.innerHTML = globalData.foerderstrategie.szenarien.map((scenario, index) => {
        const scenarioId = `scenario-${index}`;
        const comment = globalData.comments[scenarioId];
        const priorityClass = getPriorityClass(scenario.bewertung?.erfolgswahrscheinlichkeit);
        
        return `
            <div class="scenario-card bg-white rounded-lg shadow-md p-6 card-hover ${priorityClass}" data-scenario="${index}">
                <div class="flex justify-between items-start mb-4">
                    <div class="flex-1">
                        <h3 class="text-2xl font-semibold text-gray-800 mb-2">
                            ${getScenarioIcon(scenario.titel)} ${scenario.titel}
                        </h3>
                        <p class="text-gray-600">${scenario.beschreibung}</p>
                    </div>
                    <div class="text-right ml-4">
                        <p class="text-3xl font-bold text-green-600">${formatCurrency(scenario.foerdersumme_geschaetzt)}</p>
                        <p class="text-sm text-gray-500">Fördersumme</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2"><i class="fas fa-check-circle mr-1"></i> Vorteile</h4>
                        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                            ${scenario.vorteile.map(v => `<li>${v}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-700 mb-2"><i class="fas fa-tasks mr-1"></i> Maßnahmen</h4>
                        <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                            ${(scenario.konkrete_massnahmen || []).slice(0, 3).map(m => `<li>${m}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${scenario.förderprogramme.map(fp => 
                        `<span class="status-badge bg-blue-100 text-blue-800">${fp}</span>`
                    ).join('')}
                    <span class="status-badge bg-gray-100 text-gray-800">
                        <i class="fas fa-calendar mr-1"></i>${scenario.projektdauer_monate || 'N/A'} Monate
                    </span>
                    ${scenario.bewertung?.reifegrad ? 
                        `<span class="status-badge bg-green-100 text-green-800">${scenario.bewertung.reifegrad}</span>` : ''
                    }
                </div>

                <div class="border-t pt-4">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-gray-600">
                                <i class="fas fa-user mr-1"></i>
                                ${scenario.bewertung?.verantwortlicher?.intern || 'TBD'}
                            </span>
                            ${scenario.bewertung?.erfolgswahrscheinlichkeit ? 
                                `<span class="text-sm font-semibold text-green-600">
                                    <i class="fas fa-chart-line mr-1"></i>
                                    ${scenario.bewertung.erfolgswahrscheinlichkeit} Erfolg
                                </span>` : ''
                            }
                        </div>
                        <div class="flex space-x-2">
                            <button onclick="openChecklistModal('${scenario.förderprogramme[0]}')" 
                                class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
                                <i class="fas fa-clipboard-check mr-2"></i>Antragsunterlagen
                            </button>
                            <button onclick="openCommentModal('${scenarioId}')" 
                                class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
                                <i class="fas fa-comment mr-2"></i>Kommentieren
                            </button>
                        </div>
                    </div>
                </div>

                ${comment ? renderComment(comment) : ''}
            </div>
        `;
    }).join('');
}

// Render company data
function renderCompanyData() {
    // Company profile
    const profileContainer = document.getElementById('company-profile');
    if (globalData.firmenprofil?.firmenprofil) {
        const fp = globalData.firmenprofil.firmenprofil;
        profileContainer.innerHTML = `
            <div class="space-y-2">
                <p><strong>Firma:</strong> ${fp.name}</p>
                <p><strong>Geschäftsführer:</strong> ${fp.geschäftsführer}</p>
                <p><strong>Sitz:</strong> ${fp.sitz}</p>
                <p><strong>Gründung:</strong> ${fp.gründungsjahr}</p>
                <p><strong>Mitarbeiter:</strong> ${fp.anzahl_mitarbeiter}</p>
                <p><strong>Kunden:</strong> ${fp.kundenbasis}</p>
                <p><strong>Handelsregister:</strong> ${fp.handelsregister_nr}</p>
                <p><strong>Stammkapital:</strong> ${fp.stammkapital}</p>
            </div>
        `;
    }

    // Metrics
    const metricsContainer = document.getElementById('company-metrics');
    if (globalData.kennzahlen?.kennzahlen) {
        const kz = globalData.kennzahlen.kennzahlen;
        metricsContainer.innerHTML = `
            <div class="space-y-4">
                <div>
                    <h5 class="font-semibold text-gray-700">Umsatzentwicklung</h5>
                    <div class="grid grid-cols-2 gap-2 text-sm">
                        <p>2024: ${kz.umsatz_schaetzung['2024']}</p>
                        <p>2025: ${kz.umsatz_schaetzung['2025_prognose']}</p>
                        <p>2026: ${kz.umsatz_schaetzung['2026_prognose']}</p>
                        <p>2029: ${kz.umsatz_schaetzung['2029_prognose']}</p>
                    </div>
                </div>
                <div>
                    <h5 class="font-semibold text-gray-700">Marktposition</h5>
                    <p class="text-sm">Marktanteil: ${kz.marktanteil_schaetzung.aktueller_marktanteil}</p>
                    <p class="text-sm">Wachstumspotenzial: ${kz.bewertungspotenzial.zielmarktwachstum}</p>
                </div>
            </div>
        `;
    }
}

// Render market analysis
function renderMarketAnalysis() {
    const container = document.getElementById('market-analysis');
    if (!globalData.marktanalyse?.marktanalyse) {
        container.innerHTML = '<p class="text-gray-500">Keine Marktdaten verfügbar.</p>';
        return;
    }

    const ma = globalData.marktanalyse.marktanalyse;
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h4 class="text-lg font-semibold mb-3">Digital Health Markt Deutschland</h4>
                <div class="space-y-2 text-sm">
                    <p><strong>Marktvolumen 2024:</strong> ${ma.gesamtmarkt_digital_health.deutschland.volumen_2024}</p>
                    <p><strong>Wachstumsrate:</strong> ${ma.gesamtmarkt_digital_health.deutschland.wachstumsrate}</p>
                    <p><strong>Praxissoftware Global:</strong> ${ma.gesamtmarkt_digital_health.praxissoftware_segment.marktvolumen_global_2024}</p>
                </div>
            </div>
            <div>
                <h4 class="text-lg font-semibold mb-3">Zielmarkt</h4>
                <div class="space-y-2 text-sm">
                    <p><strong>Heilpraktiker:</strong> ${ma.zielmarkt_analyse.heilpraktiker.anzahl_praktiker}</p>
                    <p><strong>Marktvolumen HP:</strong> ${ma.zielmarkt_analyse.heilpraktiker.marktvolumen}</p>
                    <p><strong>Osteopathen:</strong> ${ma.zielmarkt_analyse.osteopathen.anzahl_registriert}</p>
                    <p><strong>SimpliMed Position:</strong> ${ma.wettbewerbsanalyse.simplimed_position.marktanteil_geschätzt}</p>
                </div>
            </div>
        </div>
        <div class="mt-6">
            <h4 class="text-lg font-semibold mb-3">Marktchancen</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h5 class="font-medium text-gray-700 mb-2">Kurzfristig</h5>
                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                        ${ma.marktchancen.kurzfristig.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5 class="font-medium text-gray-700 mb-2">Mittelfristig</h5>
                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                        ${ma.marktchancen.mittelfristig.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5 class="font-medium text-gray-700 mb-2">Langfristig</h5>
                    <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                        ${ma.marktchancen.langfristig.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Comment functionality
function openCommentModal(scenarioId) {
    document.getElementById('scenarioId').value = scenarioId;
    const existingComment = globalData.comments[scenarioId];
    
    if (existingComment) {
        document.getElementById('commentRating').value = existingComment.rating;
        document.getElementById('commentText').value = existingComment.text;
    } else {
        document.getElementById('commentRating').value = 'pending';
        document.getElementById('commentText').value = '';
    }
    
    document.getElementById('commentModal').classList.remove('hidden');
}

function closeCommentModal() {
    document.getElementById('commentModal').classList.add('hidden');
}

function saveComment(e) {
    e.preventDefault();
    
    const scenarioId = document.getElementById('scenarioId').value;
    const rating = document.getElementById('commentRating').value;
    const text = document.getElementById('commentText').value;
    
    globalData.comments[scenarioId] = {
        rating: rating,
        text: text,
        timestamp: new Date().toISOString(),
        author: 'Aktueller Benutzer' // In production, this would be from auth
    };
    
    // Save to localStorage
    localStorage.setItem('simplimed_comments', JSON.stringify(globalData.comments));
    
    // Re-render scenarios to show the comment
    renderScenarios();
    
    // Close modal
    closeCommentModal();
    
    // Show success message
    showSuccess('Kommentar gespeichert!');
}

function renderComment(comment) {
    const ratingColors = {
        pending: 'bg-blue-100 text-blue-800',
        good: 'bg-green-100 text-green-800',
        discuss: 'bg-yellow-100 text-yellow-800',
        reject: 'bg-red-100 text-red-800'
    };
    
    const ratingLabels = {
        pending: '🔵 Noch prüfen',
        good: '🟢 Gut / Umsetzen',
        discuss: '🟡 Diskutieren',
        reject: '🔴 Nicht umsetzbar'
    };
    
    return `
        <div class="comment-section mt-4">
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <span class="status-badge ${ratingColors[comment.rating]}">${ratingLabels[comment.rating]}</span>
                    <p class="mt-2 text-gray-700">${comment.text}</p>
                    <p class="text-xs text-gray-500 mt-2">
                        <i class="fas fa-user mr-1"></i>${comment.author} - 
                        ${new Date(comment.timestamp).toLocaleDateString('de-DE')}
                    </p>
                </div>
            </div>
        </div>
    `;
}

// Filter scenarios
function filterScenarios(filter) {
    const scenarios = document.querySelectorAll('.scenario-card');
    
    scenarios.forEach(scenario => {
        const index = scenario.dataset.scenario;
        const data = globalData.foerderstrategie.szenarien[index];
        
        switch(filter) {
            case 'all':
                scenario.style.display = 'block';
                break;
            case 'high':
                scenario.style.display = parseInt(data.foerdersumme_geschaetzt) > 200000 ? 'block' : 'none';
                break;
            case 'innovation':
                scenario.style.display = data.titel.toLowerCase().includes('ki') || 
                                       data.titel.toLowerCase().includes('innovation') ? 'block' : 'none';
                break;
            case 'quick-win':
                scenario.style.display = parseInt(data.projektdauer_monate) <= 12 ? 'block' : 'none';
                break;
        }
    });
}

// Export functions
function exportComments() {
    const dataStr = JSON.stringify(globalData.comments, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `simplimed_kommentare_${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showSuccess('Kommentare exportiert!');
}

function exportToExcel() {
    // Create CSV content
    let csvContent = "Szenario,Fördersumme,Dauer (Monate),Programme,Erfolgswahrscheinlichkeit,Bewertung\n";
    
    globalData.foerderstrategie.szenarien.forEach((scenario, index) => {
        const comment = globalData.comments[`scenario-${index}`];
        csvContent += `"${scenario.titel}","${scenario.foerdersumme_geschaetzt}","${scenario.projektdauer_monate || 'N/A'}","${scenario.förderprogramme.join(', ')}","${scenario.bewertung?.erfolgswahrscheinlichkeit || 'N/A'}","${comment?.rating || 'Keine Bewertung'}"\n`;
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `simplimed_szenarien_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showSuccess('Excel-Export erstellt!');
}

// Helper functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function getPriorityClass(erfolgswahrscheinlichkeit) {
    if (!erfolgswahrscheinlichkeit) return '';
    const percentage = parseInt(erfolgswahrscheinlichkeit);
    if (percentage >= 90) return 'priority-low';
    if (percentage >= 70) return 'priority-medium';
    return 'priority-high';
}

function getScenarioIcon(title) {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('ki') || lowerTitle.includes('assistenz')) return '🤖';
    if (lowerTitle.includes('green') || lowerTitle.includes('nachhalt')) return '🌱';
    if (lowerTitle.includes('security') || lowerTitle.includes('cyber')) return '🔒';
    if (lowerTitle.includes('marketing')) return '📈';
    if (lowerTitle.includes('datenbank')) return '💾';
    if (lowerTitle.includes('telemedizin')) return '💻';
    if (lowerTitle.includes('international')) return '🌍';
    if (lowerTitle.includes('weiterbildung')) return '🎓';
    return '💡';
}

function showSuccess(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Event listener for clicks outside modal
document.getElementById('commentModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCommentModal();
    }
});

// Checklist Modal Functions
function openChecklistModal(foerderprogramm) {
    const content = generateChecklist(foerderprogramm);
    if (content) {
        document.getElementById('checklistContent').innerHTML = content;
        document.getElementById('checklistModal').classList.remove('hidden');
    } else {
        showError('Keine Checkliste für dieses Förderprogramm verfügbar.');
    }
}

function closeChecklistModal() {
    document.getElementById('checklistModal').classList.add('hidden');
}

// Event listener for clicks outside checklist modal
document.getElementById('checklistModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeChecklistModal();
    }
});