window.evitarAutoInicio = true;

// Lógica de la página de información de adopción
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Preguntas frecuentes
            faqs: [
                {
                    pregunta: '¿Cuánto tarda el proceso de adopción?',
                    respuesta: 'El proceso completo suele demorar entre 1 y 2 semanas. Incluye la revisión del formulario, la entrevista, el encuentro con el gatito y la firma del compromiso.',
                    abierto: false,
                },
                {
                    pregunta: '¿Puedo adoptar si vivo en un departamento?',
                    respuesta: '¡Por supuesto! Los gatos se adaptan muy bien a los departamentos. Lo importante es que el espacio esté seguro: redes en ventanas y balcones, sin peligros para que explore.',
                    abierto: false,
                },
                {
                    pregunta: '¿Los gatitos vienen vacunados y esterilizados?',
                    respuesta: 'Todos nuestros gatitos están vacunados, desparasitados y, si tienen más de 6 meses, esterilizados. En caso de que sean más chicos, se firma un compromiso de esterilización.',
                    abierto: false,
                },
                {
                    pregunta: '¿Hay algún costo para adoptarlos?',
                    respuesta: 'La adopción en sí es gratuita. Sin embargo, solicitamos una colaboración voluntaria para ayudar a cubrir los gastos veterinarios de los gatitos en tránsito.',
                    abierto: false,
                },
                {
                    pregunta: '¿Puedo adoptar si tengo otras mascotas?',
                    respuesta: 'Sí, muchos de nuestros gatitos han sido socializados con otras mascotas. En el perfil de cada uno indicamos si convive bien con perros u otros gatos.',
                    abierto: false,
                },
            ],
        };
    },
}).mount('#app');
