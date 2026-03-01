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
            enviando: false,
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
        async enviarFormulario() {
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
            this.enviando = true;

            // Credenciales de EmailJS del proyecto
            const EMAILJS_SERVICE_ID = 'service_hc46ajk';
            const EMAILJS_TEMPLATE_ID = 'template_fpr5f92';
            const EMAILJS_PUBLIC_KEY = '5bbUGOA5bM_adXg5L';

            try {
                emailjs.init({
                    publicKey: EMAILJS_PUBLIC_KEY,
                });

                // Preparamos los parámetros exactos que se inyectarán en la plantilla de EmailJS.
                // Asegurate de que las variables {{...}} en tu plantilla coincidan con estas keys.
                const templateParams = {
                    nombre: this.formulario.nombre,
                    apellido: this.formulario.apellido,
                    user_email: this.formulario.email,
                    telefono: `(${this.formulario.codigoArea}) ${this.formulario.telefono}`,
                    direccion: this.formulario.direccion,
                    codigo_postal: this.formulario.codigoPostal,
                    gato_elegido: this.formulario.gatoElegido,
                    tiene_otras_mascotas: this.formulario.tieneOtrasMascotas ? 'Sí' : 'No',
                    tiene_patio: this.formulario.tienePatio ? 'Sí' : 'No',
                    tuviste_gatos: this.formulario.tuvisteGatos ? 'Sí' : 'No',
                    mensaje: this.formulario.mensaje || 'Ninguno'
                };

                await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
                this.enviado = true;
            } catch (error) {
                console.error("Error al enviar email:", error);
                this.errorMensaje = 'Hubo un error al enviar el correo. Por favor, verificá la consola para más detalles.';
            } finally {
                this.enviando = false;
            }
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
