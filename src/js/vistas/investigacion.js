// --- DATA STORAGE & STATE ---
const catProfiles = {
    'senior': {
        name: "Don Bigotes",
        quote: "Busco un regazo caliente y sol por la tarde. Soy un experto en siestas y ronroneos de bajo volumen.",
        tags: ["#Calmado", "#Compañero", "#Senior"],
        color: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        data: [20, 90, 80, 10, 95] // [Energy, Affection, Independence, Playfulness, NapSkill]
    },
    'kitten': {
        name: "Rayo",
        quote: "¡Todo es un juguete si te lo propones! Busco humanos con energía para jugar a las escondidas.",
        tags: ["#EnergíaPura", "#Curioso", "#Cachorro"],
        color: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        data: [95, 60, 40, 95, 20]
    },
    'shy': {
        name: "Luna",
        quote: "Necesito tiempo, pero cuando confío, soy la sombra más fiel. Ideal para hogares tranquilos.",
        tags: ["#Tímida", "#Leal", "#Observadora"],
        color: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        data: [40, 70, 60, 30, 70]
    }
};

let personalityChartInstance = null;
let engagementChartInstance = null;

// --- CHART INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function () {
    initEngagementChart();
    initPersonalityChart(); // Default loads Senior cat
});

// Chart 1: Engagement Stats
function initEngagementChart() {
    const ctx = document.getElementById('engagementChart').getContext('2d');
    engagementChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Imágenes "Shock"', 'Fotos Felices', 'Historias de Personalidad'],
            datasets: [
                {
                    label: 'Viralidad (Compartidos)',
                    data: [85, 45, 60],
                    backgroundColor: '#E5E7EB', // Gray for comparison
                    borderRadius: 4
                },
                {
                    label: 'Tasa de Adopción Real',
                    data: [20, 65, 88],
                    backgroundColor: ['#EF4444', '#FCD34D', '#10B981'], // Red (bad), Yellow, Green (good)
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.raw + '%';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: { display: true, text: 'Porcentaje (%)' }
                }
            }
        }
    });
}

// Chart 2: Personality Radar (The "Tool" Demo)
function initPersonalityChart() {
    const ctx = document.getElementById('personalityChart').getContext('2d');
    const initialCat = catProfiles['senior'];

    personalityChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Energía', 'Cariño', 'Independencia', 'Juego', 'Siestas'],
            datasets: [{
                label: initialCat.name,
                data: initialCat.data,
                fill: true,
                backgroundColor: initialCat.color,
                borderColor: initialCat.borderColor,
                pointBackgroundColor: initialCat.borderColor,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: initialCat.borderColor
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: { borderWidth: 3 }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: { display: false } // Hide numbers for cleaner UI
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// --- INTERACTION LOGIC ---

// Update Cat Profile (Strategy 3 Demo)
function updateCatProfile(catKey) {
    const cat = catProfiles[catKey];

    // Update Text Content
    const descContainer = document.getElementById('cat-description');
    if (!descContainer) return;

    descContainer.style.opacity = '0'; // Fade out effect

    setTimeout(() => {
        descContainer.innerHTML = `
            <h3 class="font-bold text-xl mb-2 text-gray-800">${cat.name}</h3>
            <p class="text-gray-600 italic">"${cat.quote}"</p>
            <div class="mt-4 flex flex-wrap gap-2">
                ${cat.tags.map(tag => `<span class="px-3 py-1 bg-white border rounded-full text-xs text-gray-500">${tag}</span>`).join('')}
            </div>
        `;
        descContainer.style.borderLeftColor = cat.borderColor;
        descContainer.style.opacity = '1';
    }, 300);

    // Update Chart Data
    personalityChartInstance.data.datasets[0].label = cat.name;
    personalityChartInstance.data.datasets[0].data = cat.data;
    personalityChartInstance.data.datasets[0].backgroundColor = cat.color;
    personalityChartInstance.data.datasets[0].borderColor = cat.borderColor;
    personalityChartInstance.data.datasets[0].pointBackgroundColor = cat.borderColor;
    personalityChartInstance.data.datasets[0].pointHoverBorderColor = cat.borderColor;
    personalityChartInstance.update();
}

// Toggle Strategy Cards (Accordion)
function toggleStrategy(id) {
    const content = document.getElementById(`strat-content-${id}`);
    if (!content) return;
    const btn = document.getElementById(`strat-btn-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        if (btn) btn.innerText = "Ocultar";
    } else {
        content.classList.add('hidden');
        if (btn) btn.innerText = "Ver detalles";
    }
}

// Smooth Scroll Navigation
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Expose functions to window for onclick handlers
window.updateCatProfile = updateCatProfile;
window.toggleStrategy = toggleStrategy;
window.scrollToSection = scrollToSection;
