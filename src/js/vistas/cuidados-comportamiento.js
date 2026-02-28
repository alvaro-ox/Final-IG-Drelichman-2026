window.evitarAutoInicio = true;

// Lógica de la página de comportamiento felino
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Señales del lenguaje corporal del gato
            senialesCuerpo: [
                { emoji: '😴', titulo: 'Cola en alto', descripcion: 'Señal de felicidad y confianza. Tu gato se siente seguro y contento cuando camina con la cola levantada.' },
                { emoji: '👀', titulo: 'Parpadeo lento', descripcion: 'El "beso del gato". Si te mira y parpadea lento, es que te ama. Devolvé el gesto para conectar.' },
                { emoji: '😤', titulo: 'Orejas aplastadas', descripcion: 'Miedo, molestia o agresión. Dejalo tranquilo y no lo fuerces a interactuar.' },
                { emoji: '🐾', titulo: 'Amasar con las patas', descripcion: 'Comportamiento heredado de la infancia. Es la máxima expresión de comodidad y felicidad.' },
                { emoji: '😼', titulo: 'Frotar la cabeza', descripcion: 'Tu gato te está marcando como territorio propio. Es un cumplido enorme: te eligió.' },
                { emoji: '🙈', titulo: 'Barriga expuesta', descripcion: 'Señal de confianza total. Pero cuidado: no siempre es una invitación a acariciarla.' },
            ],
            // Acordeón de integración al hogar
            acordeon: [
                { pregunta: '¿Cuánto tarda en adaptarse?', respuesta: 'Los primeros 7-14 días son críticos. Algunos gatitos se adaptan en horas; gatos adultos o tímidos pueden tardar hasta 30 días. La paciencia es clave: dejá que el gatito marque los tiempos.', abierto: false },
                { pregunta: '¿Puedo tenerlo suelto desde el primer día?', respuesta: 'Lo ideal es empezar con un cuarto o área acotada. Que pueda explorar todo el espacio de a poco, sin abrumarlo. Cuando veas que se siente cómodo, ampliás el territorio gradualmente.', abierto: false },
                { pregunta: '¿Cómo lo presento a un perro u otro gato?', respuesta: 'La regla de oro: de a poco y separados al principio. Primero que se huelen por debajo de una puerta. Luego se ven a distancia. Nunca los pongas cara a cara forzadamente. El proceso puede llevar semanas.', abierto: false },
                { pregunta: '¿Por qué esconde comida o juguetes?', respuesta: 'Instinto de supervivencia heredado de sus ancestros salvajes. Es completamente normal. No lo retirés ni regañés: es su forma de sentirse seguro.', abierto: false },
                { pregunta: '¿Araña los muebles y cómo lo detengo?', respuesta: 'El rascado es instintivo: marca territorio, estira músculos y limpia las uñas. Poné varios rascadores en diferentes lugares y usá spray disuasorio en los muebles preferidos.', abierto: false },
            ],
            // Errores comunes en la integración
            errores: [
                { icono: '🙅', error: 'Forzar el contacto', correcto: 'Dejar que sea el gato quien se acerque.' },
                { icono: '😱', error: 'Gritar o castigar físicamente', correcto: 'Ignorarlo brevemente o usar un "no" firme y seguir de largo.' },
                { icono: '🏃', error: 'Presentarlo a toda la familia de golpe', correcto: 'Primero un solo integrante tranquilo, luego de a poco introduce a los demás.' },
                { icono: '🛁', error: 'Bañarlo ni bien llega', correcto: 'Esperar al menos 2 semanas hasta que se adapte al nuevo olor del hogar.' },
            ],
        };
    },
}).mount('#app');
