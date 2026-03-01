window.evitarAutoInicio = true;

// Lógica de la página de contacto — Formulario de adopción
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
    },
    data() {
        // Extrae el nombre limpio (sin emojis) de cada gato para usarlo como value del radio
        const nombreLimpio = (nombre) => nombre.replace(/\p{Emoji}/gu, '').trim();

        return {
            enviado: false,
            errorMensaje: '',
            gatos: GATOS,
            nombreLimpio,
            PREFIJO_RUTA_GLOBAL,
            // Campos del formulario de adopción
            formulario: {
                nombre: '',
                apellido: '',
                email: '',
                codigoArea: '',
                telefono: '',
                codigoPostal: '',
                direccion: '',
                gatoElegido: '',
                // Perfil del adoptante
                tieneOtrasMascotas: null,
                tienePatio: null,
                tuvisteGatos: null,
                mensaje: '',
            },
        };
    },
    computed: {
        formularioValido() {
            return (
                this.formulario.nombre.trim() !== '' &&
                this.formulario.apellido.trim() !== '' &&
                this.formulario.email.trim() !== '' &&
                this.formulario.codigoArea.trim() !== '' &&
                this.formulario.telefono.trim() !== '' &&
                this.formulario.codigoPostal.trim() !== '' &&
                this.formulario.direccion.trim() !== '' &&
                this.formulario.gatoElegido !== '' &&
                this.formulario.tieneOtrasMascotas !== null &&
                this.formulario.tienePatio !== null &&
                this.formulario.tuvisteGatos !== null
            );
        },
        gatoSeleccionado() {
            if (!this.formulario.gatoElegido) return null;
            return this.gatos.find(
                g => this.nombreLimpio(g.nombre).toLowerCase() === this.formulario.gatoElegido.toLowerCase()
            ) || null;
        },
    },
    methods: {
        enviarFormulario() {
            if (!this.formularioValido) {
                this.errorMensaje = 'Por favor completá todos los campos obligatorios.';
                return;
            }
            if (!window.ValidacionContacto.validarEmail(this.formulario.email)) {
                this.errorMensaje = 'El correo electrónico no es válido.';
                return;
            }
            if (!window.ValidacionContacto.validarCodigoArea(this.formulario.codigoArea)) {
                this.errorMensaje = 'El código de área no es válido (2 a 4 dígitos).';
                return;
            }
            if (!window.ValidacionContacto.validarTelefonoLocal(this.formulario.telefono)) {
                this.errorMensaje = 'El teléfono local debe tener exactamente 8 números.';
                return;
            }
            if (!window.ValidacionContacto.validarCodigoPostal(this.formulario.codigoPostal)) {
                this.errorMensaje = 'El código postal debe tener exactamente 4 números.';
                return;
            }
            this.errorMensaje = '';
            this.enviado = true;
        },
        reiniciarFormulario() {
            this.enviado = false;
            this.formulario = {
                nombre: '', apellido: '', email: '', codigoArea: '', telefono: '', codigoPostal: '', direccion: '',
                gatoElegido: '',
                tieneOtrasMascotas: null, tienePatio: null, tuvisteGatos: null,
                mensaje: '',
            };
        },
    },
}).mount('#app');
