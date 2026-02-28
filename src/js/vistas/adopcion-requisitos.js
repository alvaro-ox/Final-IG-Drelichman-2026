window.evitarAutoInicio = true;

// Lógica de la página de requisitos de adopción
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        },
    data() {
        return {
            // Requisitos básicos para adoptar
            requisitos: [
                { icono: '🏠', titulo: 'Hogar seguro', descripcion: 'Si vivís en departamento, es obligatorio tener redes de protección en ventanas y balcones.' },
                { icono: '👤', titulo: 'Mayoría de edad', descripcion: 'Debés ser mayor de 21 años para firmar el compromiso de adopción y ser el responsable legal.' },
                { icono: '💰', titulo: 'Solvencia básica', descripcion: 'Tener los medios para cubrir alimentación de calidad y gastos veterinarios preventivos y de urgencia.' },
                { icono: '🗓️', titulo: 'Tiempo y paciencia', descripcion: 'Disponibilidad para la adaptación del gatito, juego diario y mimos que necesita para ser feliz.' },
            ],
            // Firma del compromiso de adopción responsable
            compromisos: [
                { icono: '❤️', titulo: 'Cuidado de por vida', descripcion: 'Adoptás al gatito para siempre, no como un objeto desechable. Si por algún motivo no podés quedártelo, debés avisarnos antes de darlo.' },
                { icono: '🍽️', titulo: 'Alimentación adecuada', descripcion: 'Comprometés a alimentarlo con comida de calidad, agua fresca diaria y los cuidados básicos que necesita.' },
                { icono: '🐾', titulo: 'Seguimiento post-adopción', descripcion: 'Aceptás que GatoHogar realice visitas de seguimiento o controles de bienestar durante el primer año.' },
                { icono: '📸', titulo: 'Actualización de fotos', descripcion: 'Nos encanta saber cómo está el gatito. Te pedimos que compartas fotos en nuestras redes con el hashtag #GatoHogar.' },
                { icono: '🚫', titulo: 'No reventa', descripcion: 'Está terminantemente prohibido revender, rifar o entregar al gatito a terceros sin autorización de GatoHogar.' },
            ],
        };
    },
}).mount('#app');
