window.evitarAutoInicio = true;

// Lógica del Catálogo general — usa la base de datos centralizada (datos-gatos.js)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        return {
            filtroActivo: 'todos',
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
            PREFIJO_RUTA_GLOBAL,
        };
    },
    computed: {
        gatosFiltrados() {
            if (this.filtroActivo === 'todos') return this.gatos;
            return this.gatos.filter(g => g.edad === this.filtroActivo || g.sexo === this.filtroActivo);
        },
    },
}).mount('#app');
