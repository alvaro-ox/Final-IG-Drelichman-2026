window.evitarAutoInicio = true;

// Lógica de la página de cuidados
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        },
    data() {
        return {
            // Tips rápidos de cuidado
            tips: [
                { icono: '💧', titulo: 'Agua fresca siempre', descripcion: 'Los gatos son sensibles a la calidad del agua. Cambiala todos los días y preferí fuentes de agua en movimiento.' },
                { icono: '🧹', titulo: 'Arenero limpio', descripcion: 'Un gato con arenero sucio puede rechazarlo y buscar otros lugares. Limpiar cada 2 días es la regla de oro.' },
                { icono: '🎮', titulo: 'Juego diario', descripcion: 'Al menos 15-20 minutos de juego activo por día previene el estrés y la obesidad. Plumas, láser, ratones: ¡variá!' },
                { icono: '🌞', titulo: 'Sol y ventana', descripcion: 'Los gatos aman el sol. Una ventana con vista a la calle es literalmente su Netflix. No hace falta salir.' },
                { icono: '🩺', titulo: 'Visita anual al vet', descripcion: 'Una revisación completa al año detecta problemas antes de que sean graves. Mejor prevenir que curar.' },
                { icono: '🤗', titulo: 'Respetá sus tiempos', descripcion: 'Los gatos eligen cuándo quieren mimos. No los fuerces. Cuando te eligen, ese amor vale el doble.' },
            ],
        };
    },
}).mount('#app');
