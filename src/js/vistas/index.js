window.evitarAutoInicio = true;

// Lógica de la página principal (index)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Mostrar los gatos actuales como destacados en el home
            gatitosDestacados: GATOS,
        };
    },
}).mount('#app');
