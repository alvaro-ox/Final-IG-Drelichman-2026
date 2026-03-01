window.evitarAutoInicio = true;

// ─── Wordle Felino — Usa GATOS de datos-gatos.js ───────────────────

// Elimina emojis y espacios extra, devuelve solo letras en mayúscula
function extraerNombre(nombreConEmoji) {
    return nombreConEmoji
        .replace(/\p{Emoji}/gu, '')   // elimina emojis y selectores de variante (U+FE0F)
        .replace(/[^\p{L}]/gu, '')    // elimina cualquier carácter que no sea letra
        .trim()
        .toUpperCase();
}

// Construye la lista de palabras a partir del array global GATOS
function construirPalabras() {
    return GATOS.map(gato => ({
        palabra: extraerNombre(gato.nombre),
        categoria: gato.meta,
        gatoObjeto: gato,
    })).filter(p => p.palabra.length >= 2);
}

// Elige un gato al azar del array construido
function elegirGatoAleatorio() {
    const palabras = construirPalabras();
    return palabras[Math.floor(Math.random() * palabras.length)];
}

// Filas del teclado virtual
const FILAS_TECLADO = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        const seleccion = elegirGatoAleatorio();
        return {
            // Estado del juego
            palabraSecreta: seleccion.palabra,
            categoriaActual: seleccion.categoria,
            gatoActual: seleccion.gatoObjeto,
            longitud: seleccion.palabra.length,
            maxIntentos: 6,
            intentoActual: 0,
            letraActual: 0,
            juegoTerminado: false,
            ganado: false,
            // Grilla y teclado
            grilla: [],
            estadosTeclas: {},
            filasletras: FILAS_TECLADO,
            // Mensajes
            mensaje: '',
            tipoMensaje: 'info',
            // Prefijo de ruta global (definido en globales.js)
            PREFIJO_RUTA_GLOBAL,
        };
    },
    created() {
        this.inicializarGrilla();
        window.addEventListener('keydown', this.manejarTecla);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.manejarTecla);
    },
    methods: {
        // Inicializa la grilla con celdas vacías según la longitud dinámica
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

        // Maneja el teclado físico
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

        // Confirma el intento actual
        confirmarIntento() {
            if (this.letraActual < this.longitud) {
                this.mostrarMensaje('¡Completá todas las letras! 🐾', 'info');
                return;
            }

            const intento = this.grilla[this.intentoActual].map(c => c.letra).join('');
            const resultado = this.evaluarIntento(intento);

            resultado.forEach((est, i) => {
                this.grilla[this.intentoActual][i].estado = est;
            });

            this.actualizarTeclas(intento, resultado);

            if (intento === this.palabraSecreta) {
                this.juegoTerminado = true;
                this.ganado = true;
                const felicitaciones = ['¡INCREÍBLE! 🐾', '¡Lo lograste! 🎉', '¡Sos un experto felino! 🐱', '¡El gatito te elige! ❤️'];
                this.mostrarMensaje(felicitaciones[Math.floor(Math.random() * felicitaciones.length)], 'ganaste');
            } else if (this.intentoActual >= this.maxIntentos - 1) {
                this.juegoTerminado = true;
                this.mostrarMensaje('Era: ' + this.palabraSecreta + ' 😿', 'perdiste');
            } else {
                this.intentoActual++;
                this.letraActual = 0;
            }
        },

        // Evalúa el intento letra por letra (algoritmo Wordle estándar)
        evaluarIntento(intento) {
            const resultado = new Array(this.longitud).fill('ausente');
            const letrasRestantes = this.palabraSecreta.split('');

            for (let i = 0; i < this.longitud; i++) {
                if (intento[i] === this.palabraSecreta[i]) {
                    resultado[i] = 'correcta';
                    letrasRestantes[i] = null;
                }
            }

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

        // Actualiza el estado visual de cada tecla
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

        // Muestra un mensaje al usuario
        mostrarMensaje(texto, tipo) {
            this.mensaje = texto;
            this.tipoMensaje = tipo;
        },

        // Reinicia el juego con un gato nuevo al azar
        reiniciarJuego() {
            const seleccion = elegirGatoAleatorio();
            this.palabraSecreta = seleccion.palabra;
            this.categoriaActual = seleccion.categoria;
            this.gatoActual = seleccion.gatoObjeto;
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
