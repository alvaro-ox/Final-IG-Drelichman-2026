window.evitarAutoInicio = true;

// Lógica de la página de salud y vacunas
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            // Calendario de vacunación felina
            vacunas: [
                { edad: '8 semanas', vacuna: 'Triple Felina (FPV + FHV + FCV)', descripcion: 'Protege contra panleucopenia, herpesvirus y calicivirus.', frecuencia: 'Primera dosis' },
                { edad: '12 semanas', vacuna: 'Triple Felina (Refuerzo)', descripcion: 'Segunda dosis para fortalecer la inmunidad.', frecuencia: 'Refuerzo' },
                { edad: '16 semanas', vacuna: 'Antirrábica', descripcion: 'Obligatoria en muchas provincias. Protege también a las personas.', frecuencia: 'Anual' },
                { edad: '1 año', vacuna: 'Triple Felina + Rabia', descripcion: 'Refuerzo anual de todas las vacunas básicas.', frecuencia: 'Anual' },
                { edad: 'Adulto', vacuna: 'FeLV (opcional)', descripcion: 'Leucemia felina. Recomendada si tiene acceso al exterior o convive con otros gatos.', frecuencia: 'Anual' },
            ],
            // Pasos del plan de desparasitación
            pasos_desparasitacion: [
                { icono: '🍼', titulo: 'Cachorros', descripcion: 'Cada 2 semanas desde las 2 hasta las 8 semanas de vida, luego mensual hasta los 6 meses.' },
                { icono: '🐱', titulo: 'Adultos', descripcion: 'Cada 3 meses si vive en interior. Mensual si tiene acceso al exterior o jardín.' },
                { icono: '🐛', titulo: 'Externos', descripcion: 'Para pulgas y garrapatas usá pipetas, collares o sprays según el peso y el estilo de vida.' },
            ],
            // Señales de alarma veterinarias
            alertas: [
                { icono: '🚨', titulo: 'No come hace 24h', descripcion: 'Un gato que deja de comer por más de un día puede estar desarrollando lipidosis hepática. Urgente.' },
                { icono: '😿', titulo: 'Dificultad para orinar', descripcion: 'Especialmente en machos. Un bloqueo urinario es una emergencia que puede ser fatal.' },
                { icono: '🌡️', titulo: 'Fiebre alta o hipotermia', descripcion: 'Temperatura mayor a 39.5°C o menor a 37°C. Llevar al veterinario inmediatamente.' },
                { icono: '😮‍💨', titulo: 'Dificultad respiratoria', descripcion: 'Si respira con la boca abierta o hace esfuerzo para respirar, es una urgencia.' },
                { icono: '🤢', titulo: 'Vómitos repetidos', descripcion: 'Más de 3 vómitos en un día, o vómitos con sangre. Requiere atención veterinaria.' },
                { icono: '😵', titulo: 'Pérdida de equilibrio', descripcion: 'Ataxia, círculos o caídas pueden indicar problemas neurológicos o de oído interno.' },
            ],
        };
    },
}).mount('#app');
