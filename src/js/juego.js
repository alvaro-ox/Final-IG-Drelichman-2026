window.evitarAutoInicio = true;

//   — "Wordle" 


// Función helper para elegir una palabra al azar (fuera del componente)
function elegirPalabraAleatoria() {
    return PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
}

// Banco de palabras (nombres de gatos del refugio, en mayúsculas)
const PALABRAS = [
    { palabra: 'NARANJA', categoria: ' Gato famoso del refugio' },
    { palabra: 'CANELA', categoria: ' Calico adorada' },
    { palabra: 'NOCHE', categoria: ' La misteriosa' },
    { palabra: 'SOMBRA', categoria: ' El tímido leal' },
    { palabra: 'PIRATA', categoria: ' El veterano con parche' },
    { palabra: 'GALLETA', categoria: ' La más sociable' },
    { palabra: 'TORMENTA', categoria: ' Energía pura' },
    { palabra: 'LUNA', categoria: ' La senior zen' },
    { palabra: 'MENTA', categoria: ' Juguetón atigrado' },
    { palabra: 'FRIDA', categoria: ' La traviesa creativa' },
    { palabra: 'THOR', categoria: ' El musculoso' },
    { palabra: 'TORTILLA', categoria: ' La bolita pequeña' },
];

// Filas del teclado virtual
const FILAS_TECLADO = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

// Longitudes de palabras aceptadas (entre 5 y 8 letras)
const LONGITUDES_VALIDAS = new Set(PALABRAS.map(p => p.palabra.length));

createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        // Elegimos palabra antes de que los métodos estén disponibles
        const seleccion = elegirPalabraAleatoria();
        return {
            // Estado del juego
            palabraSecreta: seleccion.palabra,
            categoriaActual: seleccion.categoria,
            longitud: seleccion.palabra.length,
            maxIntentos: 6,
            intentoActual: 0,
            letraActual: 0,
            juegoTerminado: false,
            ganado: false,
            // Estructura de la grilla (letra + estado)
            grilla: [],
            // Estado de cada tecla del teclado
            estadosTeclas: {},
            // Filas del teclado virtual
            filasletras: FILAS_TECLADO,
            // Mensaje al usuario
            mensaje: '',
            tipoMensaje: 'info',
        };
    },
    created() {
        // Inicializa la grilla vacía al crear el componente
        this.inicializarGrilla();
        // Escucha el teclado físico
        window.addEventListener('keydown', this.manejarTecla);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.manejarTecla);
    },
    methods: {
        // Elige una nueva palabra al azar al reiniciar
        elegirPalabra() {
            return elegirPalabraAleatoria();
        },

        // Inicializa la grilla con celdas vacías
        inicializarGrilla() {
            this.grilla = [];
            for (let f = 0; f < this.maxIntentos; f++) {
                const fila = [];
                for (let c = 0; c < this.longitud; c++) {
                    fila.push({ letra: '', estado: '' });
                }
                this.grilla.push(fila);
            }
        },

        // Maneja el teclado físico del dispositivo
        manejarTecla(e) {
            if (this.juegoTerminado) return;
            const tecla = e.key.toUpperCase();
            if (tecla === 'ENTER') return this.confirmarIntento();
            if (tecla === 'BACKSPACE') return this.borrar();
            if (/^[A-ZÑ]$/.test(tecla)) this.ingresarLetra(tecla);
        },

        // Ingresa una letra en la celda actual
        ingresarLetra(letra) {
            if (this.juegoTerminado) return;
            if (this.letraActual >= this.longitud) return;
            this.grilla[this.intentoActual][this.letraActual].letra = letra;
            this.letraActual++;
            this.mensaje = '';
        },

        // Borra la última letra ingresada
        borrar() {
            if (this.letraActual <= 0) return;
            this.letraActual--;
            this.grilla[this.intentoActual][this.letraActual].letra = '';
            this.mensaje = '';
        },

        // Confirma el intento actual y evalúa la palabra
        confirmarIntento() {
            if (this.letraActual < this.longitud) {
                this.mostrarMensaje('¡Completá todas las letras! 🐾', 'info');
                return;
            }

            const intento = this.grilla[this.intentoActual].map(c => c.letra).join('');

            // Evalúa cada letra según su posición en la palabra secreta
            const resultado = this.evaluarIntento(intento);

            // Actualiza el estado de las celdas
            resultado.forEach((est, i) => {
                this.grilla[this.intentoActual][i].estado = est;
            });

            // Actualiza el estado de las teclas del teclado
            this.actualizarTeclas(intento, resultado);

            if (intento === this.palabraSecreta) {
                // El jugador ganó
                this.juegoTerminado = true;
                this.ganado = true;
                const felicitaciones = ['¡INCREÍBLE! 🐾', '¡Lo lograste! 🎉', '¡Sos un experto felino! 🐱', '¡El gatito te elige! ❤️'];
                this.mostrarMensaje(felicitaciones[Math.floor(Math.random() * felicitaciones.length)], 'ganaste');
            } else if (this.intentoActual >= this.maxIntentos - 1) {
                // Se acabaron los intentos
                this.juegoTerminado = true;
                this.mostrarMensaje('Era: ' + this.palabraSecreta + ' 😿', 'perdiste');
            } else {
                // Siguiente intento
                this.intentoActual++;
                this.letraActual = 0;
            }
        },

        // Evalúa el intento letra por letra
        evaluarIntento(intento) {
            const resultado = new Array(this.longitud).fill('ausente');
            const letrasRestantes = this.palabraSecreta.split('');

            // Primera pasada: letras en posición correcta
            for (let i = 0; i < this.longitud; i++) {
                if (intento[i] === this.palabraSecreta[i]) {
                    resultado[i] = 'correcta';
                    letrasRestantes[i] = null;
                }
            }

            // Segunda pasada: letras presentes en otro lugar
            for (let i = 0; i < this.longitud; i++) {
                if (resultado[i] !== 'correcta') {
                    const pos = letrasRestantes.indexOf(intento[i]);
                    if (pos !== -1) {
                        resultado[i] = 'presente';
                        letrasRestantes[pos] = null;
                    }
                }
            }

            return resultado;
        },

        // Actualiza el estado visual de cada tecla del teclado
        actualizarTeclas(intento, resultado) {
            const prioridad = { correcta: 3, presente: 2, ausente: 1 };
            resultado.forEach((est, i) => {
                const letra = intento[i];
                const estadoActual = this.estadosTeclas[letra];
                if (!estadoActual || prioridad[est] > prioridad[estadoActual]) {
                    this.estadosTeclas = { ...this.estadosTeclas, [letra]: est };
                }
            });
        },

        // Muestra un mensaje temporal al usuario
        mostrarMensaje(texto, tipo) {
            this.mensaje = texto;
            this.tipoMensaje = tipo;
        },

        // Reinicia el juego con una nueva palabra
        reiniciarJuego() {
            const seleccion = this.elegirPalabra();
            this.palabraSecreta = seleccion.palabra;
            this.categoriaActual = seleccion.categoria;
            this.longitud = seleccion.palabra.length;
            this.intentoActual = 0;
            this.letraActual = 0;
            this.juegoTerminado = false;
            this.ganado = false;
            this.estadosTeclas = {};
            this.mensaje = '';
            this.inicializarGrilla();
        },
    },
}).mount('#app');
