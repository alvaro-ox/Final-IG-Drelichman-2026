window.evitarAutoInicio = true;

// Lógica de la página principal (index)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-galeria': GaleriaModal,
    },
    data() {
        return {
            PREFIJO_RUTA_GLOBAL,
            gatitosDestacados: GATOS,
            // Galería modal
            galeriaVisible: false,
            galeriaIndice: 0,
        };
    },
    methods: {
        abrirGaleria(indice) {
            this.galeriaIndice = indice;
            this.galeriaVisible = true;
        },
    },
}).mount('#app');
