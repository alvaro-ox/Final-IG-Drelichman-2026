window.evitarAutoInicio = true;

// Lógica de la página principal (index)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        return {
            PREFIJO_RUTA_GLOBAL,
            gatitosDestacados: GATOS,
        };
    },
}).mount('#app');
