window.evitarAutoInicio = true;

// Lógica del Catálogo general — usa la base de datos centralizada (datos-gatos.js)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            filtroActivo: 'todos',
            gatoSeleccionado: null,
            // Opciones de filtrado
            filtros: [
                { valor: 'todos', etiqueta: '🐾 Todos' },
                { valor: 'gatito', etiqueta: '🍼 Gatitos' },
                { valor: 'adulto', etiqueta: '🐱 Adultos' },
                { valor: 'senior', etiqueta: '💛 Seniors' },
                { valor: 'macho', etiqueta: '♂ Machos' },
                { valor: 'hembra', etiqueta: '♀ Hembras' },
            ],
            // Referencia a la base de datos centralizada
            gatos: GATOS,
        };
    },
    computed: {
        // Filtra los gatos según el filtro activo
        gatosFiltrados() {
            if (this.filtroActivo === 'todos') return this.gatos;
            return this.gatos.filter(g => g.edad === this.filtroActivo || g.sexo === this.filtroActivo);
        },
    },
    methods: {
        // Muestra el modal de consulta para un gato
        consultarAdopcion(gato) {
            this.gatoSeleccionado = gato;
        },
    },
}).mount('#app');
