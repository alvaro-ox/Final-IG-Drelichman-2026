window.evitarAutoInicio = true;

// Lógica de la página de ayuda y donaciones
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            donado: false,
            // Meta de donación del mes (en pesos)
            donacionRecaudada: 52000,
            montoSeleccionado: 500,
            // Montos rápidos de donación
            montos: [200, 500, 1000, 2000],
            // Actividades de voluntariado
            actividades: [
                'Socialización de gatitos tímidos',
                'Traslados a veterinarios',
                'Eventos de adopción presenciales',
                'Difusión en redes sociales',
                'Fotografía de los gatitos',
                'Visitas de seguimiento post-adopción',
            ],
        };
    },
    computed: {
        // Calcula el porcentaje de la meta de donación
        progresoDonacion() {
            return Math.round((this.donacionRecaudada / 80000) * 100);
        },
    },
    methods: {
        // Simula una donación (solo frontend)
        donar() {
            this.donacionRecaudada += this.montoSeleccionado;
            this.donado = true;
            setTimeout(() => { this.donado = false; }, 4000);
        },
    },
}).mount('#app');
