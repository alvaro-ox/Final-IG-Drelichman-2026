window.evitarAutoInicio = true;

// Lógica de la página del proceso de adopción
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Pasos del proceso de adopción
            pasos: [
                {
                    icono: '🔍',
                    titulo: 'Explorá el Gatálogo',
                    descripcion: 'Navegá los perfiles de nuestros gatitos disponibles. Cada ficha tiene fotos, personalidad, edad y condiciones especiales. Tomáte el tiempo que necesitás.',
                    tiempo: 'Sin límite de tiempo',
                },
                {
                    icono: '📝',
                    titulo: 'Completá el formulario',
                    descripcion: 'Una vez que elegiste un gatito (o varios que te gustaron), completás nuestro formulario de adopción. Nos contás sobre tu hogar, estilo de vida y expectativas.',
                    tiempo: '10-15 minutos',
                },
                {
                    icono: '📞',
                    titulo: 'Entrevista con el equipo',
                    descripcion: 'Nuestro equipo se comunica con vos para charlar sobre el gatito elegido, responder dudas y evaluar juntos si es el match ideal. Es una charla casual y sin presión.',
                    tiempo: '2-5 días hábiles',
                },
                {
                    icono: '🤝',
                    titulo: 'Encuentro con el gatito',
                    descripcion: 'Si la entrevista va bien, coordinamos un encuentro con el gatito. Puede ser presencial en la casa de la familia transitoria o por videollamada si estás lejos.',
                    tiempo: 'Se coordina con la familia transitoria',
                },
                {
                    icono: '📄',
                    titulo: 'Firma del compromiso',
                    descripcion: 'Una vez que todo está confirmado, firmás el compromiso de adopción. Es un documento sencillo que formaliza tu responsabilidad sobre el bienestar del gatito.',
                    tiempo: '1 día',
                },
                {
                    icono: '🏠',
                    titulo: '¡Tu gatito llega a casa!',
                    descripcion: 'El gran día llegó. Te entregamos al gatito con su historia médica, el alimento que estaba comiendo y todos los datos del veterinario de cabecera. ¡A festejar!',
                    tiempo: 'El proceso completo: 1-2 semanas',
                },
            ],
            // Tips para preparar el hogar
            tips: [
                { icono: '🛏️', titulo: 'Preparale un rincón', descripcion: 'Tené listo su cama, arenero, comedero y bebedero antes de que llegue. Que el espacio sea tranquilo y seguro.' },
                { icono: '🚪', titulo: 'Dejale explorar despacio', descripcion: 'Al llegar, dejalo en un cuarto solo por los primeros días. Que se adapte al olor y al espacio sin agobio.' },
                { icono: '🔇', titulo: 'Poco ruido al principio', descripcion: 'Evitá visitas masivas o ruidos fuertes los primeros días. El gatito necesita acostumbrarse a su nuevo ambiente.' },
                { icono: '🍽️', titulo: 'Continuá su dieta', descripcion: 'Usá la misma marca y tipo de alimento que comía antes, al menos por las primeras semanas, para evitar problemas digestivos.' },
            ],
        };
    },
}).mount('#app');
