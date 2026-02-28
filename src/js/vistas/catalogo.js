window.evitarAutoInicio = true;

// Lógica del Catálogo general — usa la base de datos centralizada (datos-gatos.js)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-galeria': GaleriaModal,
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
            gatos: GATOS,
            // Galería modal
            galeriaVisible: false,
            galeriaIndice: 0,
            PREFIJO_RUTA_GLOBAL,
        };
    },
    computed: {
        gatosFiltrados() {
            if (this.filtroActivo === 'todos') return this.gatos;
            return this.gatos.filter(g => g.edad === this.filtroActivo || g.sexo === this.filtroActivo);
        },
    },
    methods: {
        consultarAdopcion(gato) {
            this.gatoSeleccionado = gato;
        },
        abrirGaleria(indice) {
            // En catálogo usamos el índice dentro de gatosFiltrados
            this.galeriaIndice = indice;
            this.galeriaVisible = true;
        },
    },
}).mount('#app');
