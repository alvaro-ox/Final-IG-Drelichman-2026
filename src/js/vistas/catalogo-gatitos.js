window.evitarAutoInicio = true;

// Lógica de la subsección de gatitos cachorros — usa datos-gatos.js
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Filtra gatitos (0–1 año) directamente desde la base de datos central
            gatitos: GATOS.filter(g => g.edad === 'gatito'),
            // Consejos para cuidar cachorros
            tipsCachorros: [
                { icono: '🍼', titulo: 'Alimentación frecuente', descripcion: 'Los gatitos menores de 3 meses necesitan comer cada 4-6 horas. A partir de los 4 meses, 3 veces al día.' },
                { icono: '🏠', titulo: 'Espacio seguro', descripcion: 'Alejá objetos peligrosos, cables sueltos y balcones abiertos. Un gatito curioso explora todo.' },
                { icono: '💊', titulo: 'Plan de vacunación', descripcion: 'Primera vacuna a las 8 semanas, segunda a las 12 y la rabia a los 4 meses. Desparasitá cada 3 meses.' },
                { icono: '🎮', titulo: 'Mucho juego', descripcion: 'Los cachorros necesitan jugar varias horas al día para su desarrollo físico y mental. Jugá con ellos!' },
            ],
        };
    },
}).mount('#app');
