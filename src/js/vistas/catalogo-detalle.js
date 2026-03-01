window.evitarAutoInicio = true;

// Lógica de la página de detalle de un gato — lee el nombre desde la URL (?gato=NombreDelGato)
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        const params = new URLSearchParams(window.location.search);
        const nombreBuscado = params.get('gato') || '';

        // Busca el gato cuyo nombre (sin emojis, en minúsculas) coincide con el parámetro
        const normalizarNombre = (nombre) =>
            nombre.replace(/\p{Emoji}/gu, '').trim().toLowerCase();

        const gatoEncontrado = GATOS.find(
            (g) => normalizarNombre(g.nombre) === normalizarNombre(nombreBuscado)
        ) || null;

        // Actualiza el título de la página dinámicamente
        if (gatoEncontrado) {
            document.title = gatoEncontrado.nombre.replace(/\p{Emoji}/gu, '').trim() + ' — GatoHogar';
        }

        return {
            gato: gatoEncontrado,
            PREFIJO_RUTA_GLOBAL,
        };
    },
}).mount('#app');
