// Förderprogramm-Checklisten basierend auf aktueller Recherche (Stand: Juli 2025)
const foerderChecklisten = {
    "ZIM": {
        titel: "ZIM - Zentrales Innovationsprogramm Mittelstand",
        status: "✅ Aktiv (Neue Richtlinie 2025)",
        antragsstelle: {
            name: "VDI/VDE Innovation + Technik GmbH / AiF Projekt GmbH",
            einzelprojekte: "VDI/VDE Innovation + Technik GmbH",
            kooperationsprojekte: "AiF Projekt GmbH",
            portal_einzelprojekt: "https://www.zim.de/ZIM/Navigation/DE/Meta/zim-foyer.html",
            portal_kooperation: "https://www.zim.de/ZIM/Navigation/DE/Meta/zim-koop.html",
            formular_center: "https://www.zim.de/ZIM/Navigation/DE/Formularcenter/formularcenter.html"
        },
        voraussetzungen: [
            "KMU nach EU-Definition (< 250 Mitarbeiter, < 50 Mio. EUR Umsatz)",
            "Sitz oder Betriebsstätte in Deutschland",
            "Innovationsgehalt des Projekts nachweisen",
            "Technisches und wirtschaftliches Risiko vorhanden",
            "Markteinführung innerhalb von 2 Jahren nach Projektende"
        ],
        unterlagen_einzelprojekt: [
            {
                dokument: "ZIM-Antragsformular EP (Einzelprojekt)",
                beschreibung: "Offizielles Formular aus dem ZIM-Formularcenter",
                pflicht: true,
                quelle: "https://www.zim.de/ZIM/Navigation/DE/Formularcenter/formularcenter.html"
            },
            {
                dokument: "Projektbeschreibung",
                beschreibung: "Max. 10 Seiten, technische und wirtschaftliche Darstellung",
                pflicht: true
            },
            {
                dokument: "Kostenplan",
                beschreibung: "Detaillierte Aufstellung aller Projektkosten",
                pflicht: true
            },
            {
                dokument: "Arbeits- und Zeitplan",
                beschreibung: "Meilensteine und Arbeitspakete",
                pflicht: true
            },
            {
                dokument: "Jahresabschlüsse",
                beschreibung: "Letzte 2 Jahre (Bilanz, GuV)",
                pflicht: true
            },
            {
                dokument: "Handelsregisterauszug",
                beschreibung: "Nicht älter als 6 Monate",
                pflicht: true
            },
            {
                dokument: "KMU-Erklärung",
                beschreibung: "Nachweis des KMU-Status",
                pflicht: true
            },
            {
                dokument: "De-minimis-Erklärung",
                beschreibung: "Erhaltene Beihilfen der letzten 3 Jahre",
                pflicht: true
            },
            {
                dokument: "Eigenanteilsfinanzierung",
                beschreibung: "Nachweis der Finanzierung des Eigenanteils",
                pflicht: true
            }
        ],
        unterlagen_kooperation_zusaetzlich: [
            {
                dokument: "Kooperationsvereinbarung",
                beschreibung: "Regelung der Rechte und Pflichten zwischen Partnern",
                pflicht: true
            },
            {
                dokument: "Letter of Intent",
                beschreibung: "Bei internationalen Partnern",
                pflicht: false
            },
            {
                dokument: "Verwertungsplan",
                beschreibung: "Gemeinsame Verwertungsstrategie",
                pflicht: true
            }
        ],
        bearbeitungsdauer: "3-4 Monate bis zur Bewilligung",
        foerderquote: "Einzelprojekt: bis 25%, Kooperation: bis 45%",
        hinweise: [
            "Seit 01.01.2025 neue Zuständigkeiten beachten!",
            "Nur aktuelle Formulare aus dem Formularcenter verwenden",
            "Digitale Signatur erforderlich",
            "Upload über jeweiliges Trägerportal"
        ],
        quellen: [
            "https://www.zim.de",
            "https://www.bmwk.de/Redaktion/DE/Artikel/Innovation/zim.html"
        ]
    },
    
    "go-digital": {
        titel: "go-digital",
        status: "❌ Programm ausgelaufen (31.12.2024)",
        hinweis: "⚠️ Neue Anträge sind nicht mehr möglich! Nur genehmigte Projekte können 2025 noch durchgeführt werden.",
        antragsstelle: {
            name: "EURONORM GmbH (Projektträger)",
            info: "Antragstellung nur über autorisierte Beratungsunternehmen"
        },
        alternativen: [
            "Prüfen Sie Förderprogramme der Länder",
            "Digital Jetzt (ebenfalls ausgelaufen)",
            "Regionale Digitalisierungsprogramme",
            "KfW-Digitalisierungskredit"
        ],
        quellen: [
            "https://www.innovation-beratung-foerderung.de/INNO/Navigation/DE/go-digital/go-digital.html"
        ]
    },
    
    "Digital Jetzt": {
        titel: "Digital Jetzt",
        status: "❌ Programm ausgelaufen (31.12.2023)",
        hinweis: "⚠️ Keine neuen Anträge mehr möglich!",
        antragsstelle: {
            name: "DLR Projektträger",
            kontakt: "digitaljetzt@dlr.de"
        },
        alternativen: [
            "Warten auf Nachfolgeprogramm (in Planung)",
            "Digitalisierungsprämie der Länder",
            "EFRE-Förderung für Digitalisierung",
            "Branchenspezifische Programme"
        ],
        quellen: [
            "https://www.bmwk.de/Redaktion/DE/Dossier/digital-jetzt.html"
        ]
    },
    
    "Bildungsscheck NRW": {
        titel: "Bildungsscheck NRW",
        status: "❌ Programm ausgelaufen (30.06.2024)",
        hinweis: "⚠️ Bereits ausgestellte Bildungsschecks können noch bis 2029 eingelöst werden!",
        nachfolger: "Neues Förderprogramm in Vorbereitung durch Land NRW",
        alternativen: [
            "Qualifizierungschancengesetz (Arbeitsagentur)",
            "Aufstiegs-BAföG",
            "Weiterbildungsstipendium",
            "Betriebliche Weiterbildung"
        ],
        quellen: [
            "https://www.mags.nrw/bildungsscheck",
            "https://www.weiterbildungsberatung.nrw"
        ]
    },
    
    "EFRE": {
        titel: "EFRE - Europäischer Fonds für regionale Entwicklung",
        status: "✅ Aktiv (Förderperiode 2021-2027)",
        antragsstelle: {
            name: "IN.NRW - Innovationsförderagentur",
            portal: "https://www.in.nrw",
            efre_website: "https://www.efre.nrw"
        },
        voraussetzungen: [
            "KMU nach EU-Definition",
            "Sitz oder Betriebsstätte in NRW",
            "Innovatives Vorhaben",
            "Kooperationsprojekt (meist erforderlich)",
            "Nachhaltigkeit und EU-Ziele"
        ],
        verfahren: "Zweistufiges Antragsverfahren",
        unterlagen_stufe1: [
            {
                dokument: "Projektskizze",
                beschreibung: "Über Submission Tool bei IN.NRW",
                pflicht: true
            },
            {
                dokument: "Kurzbeschreibung",
                beschreibung: "Max. 2 Seiten Projektidee",
                pflicht: true
            }
        ],
        unterlagen_stufe2: [
            {
                dokument: "Vollantrag",
                beschreibung: "Über EFRE-Onlineportal",
                pflicht: true
            },
            {
                dokument: "Kooperationsvereinbarung",
                beschreibung: "Bei Verbundprojekten",
                pflicht: true
            },
            {
                dokument: "Detaillierter Kostenplan",
                beschreibung: "Nach EFRE-Vorgaben",
                pflicht: true
            },
            {
                dokument: "Monitoring-Formular",
                beschreibung: "Zielbestimmung für Projekt",
                pflicht: true
            },
            {
                dokument: "Nachhaltigkeitskonzept",
                beschreibung: "EU-Taxonomie beachten",
                pflicht: true
            }
        ],
        foerderquote: "30-70% je nach Vorhaben und Region",
        hinweise: [
            "Feste Einreichungsfristen beachten!",
            "Nur elektronische Einreichung möglich",
            "Separate Buchführung für Projekt erforderlich",
            "Lange Vorlaufzeiten einplanen"
        ],
        quellen: [
            "https://www.efre.nrw",
            "https://www.in.nrw"
        ]
    },
    
    "Innovationsfonds": {
        titel: "Innovationsfonds Gesundheitswesen",
        status: "✅ Aktiv",
        antragsstelle: {
            name: "Gemeinsamer Bundesausschuss (G-BA)",
            portal: "https://innovationsfonds.g-ba.de"
        },
        voraussetzungen: [
            "Neue Versorgungsformen im Gesundheitswesen",
            "Kooperation mit Krankenkassen meist erforderlich",
            "Wissenschaftliche Evaluation",
            "Übertragbarkeit auf Regelversorgung"
        ],
        unterlagen: [
            {
                dokument: "Förderantrag",
                beschreibung: "Nach Vorgaben des G-BA",
                pflicht: true
            },
            {
                dokument: "Versorgungskonzept",
                beschreibung: "Detaillierte Beschreibung",
                pflicht: true
            },
            {
                dokument: "Evaluationskonzept",
                beschreibung: "Wissenschaftliche Begleitung",
                pflicht: true
            },
            {
                dokument: "Letter of Intent",
                beschreibung: "Von beteiligten Krankenkassen",
                pflicht: true
            },
            {
                dokument: "Ethikvotum",
                beschreibung: "Bei Patientenstudien",
                pflicht: false
            }
        ],
        hinweise: [
            "Sehr kompetitives Verfahren",
            "Lange Vorlaufzeiten (6-12 Monate)",
            "Hohe Anforderungen an Evaluation"
        ],
        quellen: [
            "https://innovationsfonds.g-ba.de"
        ]
    },
    
    "Horizont Europa": {
        titel: "Horizont Europa",
        status: "✅ Aktiv (2021-2027)",
        antragsstelle: {
            name: "EU-Kommission",
            portal: "https://ec.europa.eu/info/funding-tenders/opportunities/portal",
            nks: "Nationale Kontaktstelle: https://www.horizont-europa.de"
        },
        voraussetzungen: [
            "Internationale Konsortien (mind. 3 Partner aus 3 Ländern)",
            "Exzellenz und Innovation",
            "Europäischer Mehrwert",
            "Open Science Prinzipien"
        ],
        unterlagen: [
            {
                dokument: "Proposal Part A",
                beschreibung: "Administrative Daten",
                pflicht: true
            },
            {
                dokument: "Proposal Part B",
                beschreibung: "Excellence, Impact, Implementation",
                pflicht: true
            },
            {
                dokument: "Ethics Self-Assessment",
                beschreibung: "Ethische Aspekte",
                pflicht: true
            },
            {
                dokument: "Consortium Agreement",
                beschreibung: "Vor Projektstart",
                pflicht: true
            }
        ],
        foerderquote: "Bis zu 100% der förderfähigen Kosten",
        hinweise: [
            "Sehr aufwändige Antragstellung",
            "Erfolgsquote oft < 15%",
            "Professionelle Unterstützung empfohlen"
        ],
        quellen: [
            "https://www.horizont-europa.de",
            "https://ec.europa.eu/programmes/horizon-europe"
        ]
    }
};

// Vorbereitete Dokumente für SimpliMed
const vorbereitete_dokumente = {
    "ZIM": {
        "Projektbeschreibung": "/Users/marcelgaertner/Desktop/simplimed-foerderantrag/ZIM-Dokumente/01_Projektbeschreibung_Datenbank-Infrastruktur.md",
        "Kostenplan": "/Users/marcelgaertner/Desktop/simplimed-foerderantrag/ZIM-Dokumente/02_Kostenplan_Datenbank-Infrastruktur.md",
        "Arbeits- und Zeitplan": "/Users/marcelgaertner/Desktop/simplimed-foerderantrag/ZIM-Dokumente/03_Arbeits-und-Zeitplan_Datenbank-Infrastruktur.md"
    }
};

// Funktion zum Generieren der Checkliste
function generateChecklist(foerderprogramm) {
    const checklist = foerderChecklisten[foerderprogramm];
    if (!checklist) return null;
    
    let html = `
        <div class="checklist-content">
            <h3 class="text-2xl font-bold mb-4">${checklist.titel}</h3>
            <div class="mb-4">
                <span class="text-lg font-semibold">Status: ${checklist.status}</span>
            </div>
    `;
    
    if (checklist.hinweis) {
        html += `<div class="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
            <p class="font-semibold">${checklist.hinweis}</p>
        </div>`;
    }
    
    if (checklist.antragsstelle) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">📍 Wo beantragen?</h4>
                <div class="bg-gray-100 p-4 rounded">
                    <p><strong>${checklist.antragsstelle.name}</strong></p>
                    ${checklist.antragsstelle.portal ? `<p class="mt-2"><a href="${checklist.antragsstelle.portal}" target="_blank" class="text-blue-600 hover:underline">🔗 Zum Antragsportal</a></p>` : ''}
                    ${checklist.antragsstelle.einzelprojekte ? `<p class="mt-1"><strong>Einzelprojekte:</strong> ${checklist.antragsstelle.einzelprojekte}</p>` : ''}
                    ${checklist.antragsstelle.kooperationsprojekte ? `<p class="mt-1"><strong>Kooperationsprojekte:</strong> ${checklist.antragsstelle.kooperationsprojekte}</p>` : ''}
                </div>
            </div>
        `;
    }
    
    if (checklist.voraussetzungen) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">✅ Voraussetzungen</h4>
                <ul class="list-disc list-inside space-y-1">
                    ${checklist.voraussetzungen.map(v => `<li>${v}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (checklist.unterlagen_einzelprojekt) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">📄 Erforderliche Unterlagen</h4>
                <div class="space-y-3">
                    ${checklist.unterlagen_einzelprojekt.map(doc => {
                        const docId = doc.dokument.replace(/\s/g, '-');
                        const vorbereitetesDokument = vorbereitete_dokumente[foerderprogramm] && vorbereitete_dokumente[foerderprogramm][doc.dokument];
                        
                        return `
                        <div class="flex items-start space-x-3 p-3 bg-white border rounded">
                            <input type="checkbox" class="mt-1" id="doc-${docId}">
                            <div class="flex-1">
                                <label for="doc-${docId}" class="font-medium cursor-pointer">
                                    ${doc.dokument} ${doc.pflicht ? '<span class="text-red-500">*</span>' : ''}
                                </label>
                                <p class="text-sm text-gray-600">${doc.beschreibung}</p>
                                ${doc.quelle ? `<a href="${doc.quelle}" target="_blank" class="text-xs text-blue-600 hover:underline">Quelle</a>` : ''}
                            </div>
                            <div class="flex space-x-2">
                                ${vorbereitetesDokument ? 
                                    `<button onclick="downloadVorbereitetesDokument('${foerderprogramm}', '${doc.dokument}')" 
                                        class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition">
                                        <i class="fas fa-download mr-1"></i>Download
                                    </button>` : 
                                    `<button onclick="uploadDokument('${foerderprogramm}', '${doc.dokument}')" 
                                        class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                                        <i class="fas fa-upload mr-1"></i>Upload
                                    </button>`
                                }
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `;
    }
    
    if (checklist.unterlagen) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">📄 Erforderliche Unterlagen</h4>
                <div class="space-y-3">
                    ${checklist.unterlagen.map(doc => {
                        const docId = doc.dokument.replace(/\s/g, '-');
                        const vorbereitetesDokument = vorbereitete_dokumente[foerderprogramm] && vorbereitete_dokumente[foerderprogramm][doc.dokument];
                        
                        return `
                        <div class="flex items-start space-x-3 p-3 bg-white border rounded">
                            <input type="checkbox" class="mt-1" id="doc-${docId}">
                            <div class="flex-1">
                                <label for="doc-${docId}" class="font-medium cursor-pointer">
                                    ${doc.dokument} ${doc.pflicht ? '<span class="text-red-500">*</span>' : ''}
                                </label>
                                <p class="text-sm text-gray-600">${doc.beschreibung}</p>
                            </div>
                            <div class="flex space-x-2">
                                ${vorbereitetesDokument ? 
                                    `<button onclick="downloadVorbereitetesDokument('${foerderprogramm}', '${doc.dokument}')" 
                                        class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition">
                                        <i class="fas fa-download mr-1"></i>Download
                                    </button>` : 
                                    `<button onclick="uploadDokument('${foerderprogramm}', '${doc.dokument}')" 
                                        class="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                                        <i class="fas fa-upload mr-1"></i>Upload
                                    </button>`
                                }
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `;
    }
    
    if (checklist.hinweise) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">💡 Wichtige Hinweise</h4>
                <ul class="list-disc list-inside space-y-1 text-gray-700">
                    ${checklist.hinweise.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (checklist.alternativen) {
        html += `
            <div class="mb-6">
                <h4 class="text-lg font-semibold mb-2">🔄 Alternative Förderprogramme</h4>
                <ul class="list-disc list-inside space-y-1">
                    ${checklist.alternativen.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (checklist.quellen) {
        html += `
            <div class="mt-6 pt-4 border-t">
                <h4 class="text-sm font-semibold mb-2">📚 Quellen und weiterführende Links</h4>
                <div class="space-y-1">
                    ${checklist.quellen.map(q => `
                        <a href="${q}" target="_blank" class="text-sm text-blue-600 hover:underline block">
                            ${q}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    html += `
            <div class="mt-6 flex space-x-3">
                <button onclick="downloadChecklist('${foerderprogramm}')" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    <i class="fas fa-download mr-2"></i>Als PDF speichern
                </button>
                <button onclick="printChecklist()" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                    <i class="fas fa-print mr-2"></i>Drucken
                </button>
            </div>
        </div>
    `;
    
    return html;
}

// Download Checklist als Text
function downloadChecklist(foerderprogramm) {
    const checklist = foerderChecklisten[foerderprogramm];
    if (!checklist) return;
    
    let text = `${checklist.titel}\n`;
    text += `Status: ${checklist.status}\n\n`;
    
    if (checklist.hinweis) {
        text += `WICHTIG: ${checklist.hinweis}\n\n`;
    }
    
    if (checklist.antragsstelle) {
        text += `WO BEANTRAGEN?\n`;
        text += `${checklist.antragsstelle.name}\n`;
        if (checklist.antragsstelle.portal) text += `Portal: ${checklist.antragsstelle.portal}\n`;
        text += `\n`;
    }
    
    if (checklist.voraussetzungen) {
        text += `VORAUSSETZUNGEN:\n`;
        checklist.voraussetzungen.forEach(v => text += `- ${v}\n`);
        text += `\n`;
    }
    
    if (checklist.unterlagen_einzelprojekt) {
        text += `ERFORDERLICHE UNTERLAGEN:\n`;
        checklist.unterlagen_einzelprojekt.forEach(doc => {
            text += `☐ ${doc.dokument}${doc.pflicht ? ' *' : ''}\n`;
            text += `   ${doc.beschreibung}\n`;
        });
        text += `\n* = Pflichtdokument\n\n`;
    }
    
    if (checklist.quellen) {
        text += `QUELLEN:\n`;
        checklist.quellen.forEach(q => text += `${q}\n`);
    }
    
    // Download als Textdatei
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Checkliste_${foerderprogramm}_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Print Checklist
function printChecklist() {
    window.print();
}

// Upload Dokument Funktion
function uploadDokument(foerderprogramm, dokumentTyp) {
    // Create file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.xls,.xlsx,.txt,.md';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            // In einer echten Anwendung würde hier der Upload zu einem Server erfolgen
            // Für diese Demo speichern wir die Info im localStorage
            const uploadedDocs = JSON.parse(localStorage.getItem('uploaded_documents') || '{}');
            if (!uploadedDocs[foerderprogramm]) {
                uploadedDocs[foerderprogramm] = {};
            }
            uploadedDocs[foerderprogramm][dokumentTyp] = {
                fileName: file.name,
                fileSize: file.size,
                uploadDate: new Date().toISOString()
            };
            localStorage.setItem('uploaded_documents', JSON.stringify(uploadedDocs));
            
            // Update UI
            showSuccess(`Dokument "${file.name}" wurde hochgeladen!`);
            
            // Refresh checklist to show uploaded status
            const content = generateChecklist(foerderprogramm);
            document.getElementById('checklistContent').innerHTML = content;
        }
    };
    
    input.click();
}

// Download vorbereitetes Dokument - verwendet die vollständigen Dokumente aus dokumente-daten.js
async function downloadVorbereitetesDokument(foerderprogramm, dokumentTyp) {
    // Nutze die Funktion aus dokumente-daten.js für vollständige Dokumente
    if (typeof downloadVollstaendigesDokument === 'function') {
        downloadVollstaendigesDokument(foerderprogramm, dokumentTyp);
    } else {
        showError('Download-Funktion nicht verfügbar. Bitte stelle sicher, dass dokumente-daten.js geladen wurde.');
    }
}

// Show success message
function showSuccess(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-check-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show error message
function showError(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.innerHTML = `<i class="fas fa-exclamation-circle mr-2"></i>${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}