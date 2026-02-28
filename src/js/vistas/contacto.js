window.evitarAutoInicio = true;

// Lógica de la página de contacto
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            enviado: false,
            errorMensaje: '',
            // Campos del formulario de contacto
            formulario: {
                nombre: '',
                email: '',
                asunto: '',
                mensaje: '',
            },
        };
    },
    computed: {
        // Valida que todos los campos estén completos
        formularioValido() {
            return (
                this.formulario.nombre.trim() !== '' &&
                this.formulario.email.includes('@') &&
                this.formulario.asunto !== '' &&
                this.formulario.mensaje.trim().length >= 10
            );
        },
    },
    methods: {
        // Simula el envío del formulario
        enviarFormulario() {
            if (!this.formularioValido) {
                this.errorMensaje = 'Por favor completá todos los campos correctamente.';
                return;
            }
            this.errorMensaje = '';
            this.enviado = true;
        },
        // Reinicia el formulario para un nuevo mensaje
        reiniciarFormulario() {
            this.enviado = false;
            this.formulario = { nombre: '', email: '', asunto: '', mensaje: '' };
        },
    },
}).mount('#app');
