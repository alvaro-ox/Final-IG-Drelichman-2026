window.evitarAutoInicio = true;

// Datos del autor del proyecto
createApp({
    components: {
        'componente-navbar': Navbar,
    },
    data() {
        return {
            nombre: 'Drelichman',
            materia: 'Informática General',
            comision: 'FIG1',
            anio: 2026,
            turno: 'Noche',
            docente: 'Drelichman',
        };
    },
}).mount('#app');
