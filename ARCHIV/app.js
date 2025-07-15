// Global data storage
let globalData = {
    firmenprofil: null,
    kennzahlen: null,
    marktanalyse: null,
    foerderstrategie: null,
    comments: JSON.parse(localStorage.getItem('simplimed_comments')) || {}
};

// Initialize app
document.addEventListener('DOMContentLoaded', async function() {
    await loadAllData();
    setupNavigation();
    hideLoader();
});

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
                .then(response => response.json())
                .catch(error => {
                    console.error(`Error loading ${file}:`, error);
                    return null;
                })
        );

        const [firmenprofil, kennzahlen, marktanalyse, foerderstrategie] = await Promise.all(promises);

        globalData.firmenprofil = firmenprofil;
        globalData.kennzahlen = kennzahlen;
        globalData.marktanalyse = marktanalyse;
        globalData.foerderstrategie = foerderstrategie;

        // Render all sections
        renderScenarios();
        renderCompanyData();
        renderMarketAnalysis();
    } catch (error) {
        console.error('Error loading data:', error);
        showError('Fehler beim Laden der Daten. Bitte aktualisieren Sie die Seite.');
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
                        <button onclick="openCommentModal('${scenarioId}')" 
                            class="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition">
                            <i class="fas fa-comment mr-2"></i>Kommentieren
                        </button>
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