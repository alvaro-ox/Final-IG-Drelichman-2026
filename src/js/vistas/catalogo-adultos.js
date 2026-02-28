window.evitarAutoInicio = true;

// Lógica de la subsección de gatos adultos y seniors — usa datos-gatos.js
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Ventajas de adoptar adultos
            beneficios: [
                { icono: '😌', titulo: 'Ya formados' },
                { icono: '💤', titulo: 'Más tranquilos' },
                { icono: '💊', titulo: 'Vacunados' },
                { icono: '✂️', titulo: 'Esterilizados' },
                { icono: '❤️', titulo: 'Agradecidos' },
            ],
            // Filtrados directamente desde la base de datos central
            gatosAdultos: GATOS.filter(g => g.edad === 'adulto'),
            gatosSenior: GATOS.filter(g => g.edad === 'senior'),
        };
    },
}).mount('#app');
