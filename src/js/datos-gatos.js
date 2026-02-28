/**
 * GatoHogar — Base de datos de gatos
 * Fuente única de verdad para todos los gatitos del refugio.
 * Se usa en catalogo.js, catalogo-gatitos.js y catalogo-adultos.js
 */

// Esquema de cada gato:
// {
//   nombre:      string  — Nombre y emoji del gato
//   emoji:       string  — Emoji de portada
//   meta:        string  — Sexo, edad y esterilización
//   descripcion: string  — Párrafo descriptivo
//   tags:        Array   — Etiquetas de personalidad
//   estado:      string  — 'disponible' | 'nuevo' | 'reservado'
//   etiqueta:    string  — Texto del badge de estado
//   edad:        string  — 'gatito' | 'adulto' | 'senior'
//   sexo:        string  — 'macho' | 'hembra'
// }

const GATOS = [
    // ─── GATITOS (0–1 año) ───────────────────────────────────────────────────
    {
        nombre: 'Noche 🌙',
        emoji: '🐈‍⬛',
        meta: 'Hembra · 1 año · Esterilizada',
        descripcion: 'Misteriosa y elegante. Ama los juguetes con plumas y los snacks a deshora.',
        tags: ['Juguetona', 'Activa', '⚡ Sin niños'],
        estado: 'nuevo',
        etiqueta: '¡Nuevo!',
        edad: 'gatito',
        sexo: 'hembra',
    },
    {
        nombre: 'Tormenta ⚡',
        emoji: '🐱',
        meta: 'Macho · 8 meses · Sin castrar',
        descripcion: 'Pura energía. Salta, escala y corre sin parar. Necesita juego y estimulación constante.',
        tags: ['Energético', 'Curioso', 'Cachorrito'],
        estado: 'reservado',
        etiqueta: 'Reservado',
        edad: 'gatito',
        sexo: 'macho',
    },
    {
        nombre: 'Mantequilla 🧈',
        emoji: '🌟',
        meta: 'Hembra · 4 meses · Sin esterilizar',
        descripcion: 'Un bombón de pelaje dorado. Le encanta trepar y explorar todo.',
        tags: ['Curiosa', 'Trepadora', 'Bebé'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'gatito',
        sexo: 'hembra',
    },
    {
        nombre: 'Menta 🌿',
        emoji: '😻',
        meta: 'Macho · 7 meses · Sin castrar',
        descripcion: 'Le encanta la menta y perseguir cualquier cosa que se mueva. Muy sociable y juguetón.',
        tags: ['Juguetón', 'Activo', '🍃 Naturaleza'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'gatito',
        sexo: 'macho',
    },
    {
        nombre: 'Tortilla 🫓',
        emoji: '😸',
        meta: 'Hembra · 3 meses · Sin esterilizar',
        descripcion: 'La más pequeña y bichitera del grupo. Una bolita de ternura y travesuras.',
        tags: ['Bebé', 'Traviesa', 'Juguetona'],
        estado: 'nuevo',
        etiqueta: '¡Nuevo!',
        edad: 'gatito',
        sexo: 'hembra',
    },
    {
        nombre: 'Chipito 🍟',
        emoji: '😺',
        meta: 'Macho · 6 meses · Sin castrar',
        descripcion: 'Marrón atigrado con manchas blancas. Le gusta esconderse y dar sustos adorables.',
        tags: ['Juguetón', 'Travieso', 'Atigrado'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'gatito',
        sexo: 'macho',
    },

    // ─── ADULTOS (1–6 años) ──────────────────────────────────────────────────
    {
        nombre: 'Naranja 🍊',
        emoji: '🐈',
        meta: 'Macho · 3 años · Castrado',
        descripcion: 'El rey del sofá. Ronronea como un motor y nunca rechaza un mimo.',
        tags: ['Cariñoso', 'Tranquilo', '🏠 Interior'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'adulto',
        sexo: 'macho',
    },
    {
        nombre: 'Canela 🍂',
        emoji: '😺',
        meta: 'Hembra · 4 años · Esterilizada',
        descripcion: 'Calico de personalidad inmensa. Tiene un pelaje increíble y le encanta la compañía tranquila.',
        tags: ['Tranquila', 'Calico', '🏠 Adulta'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'adulto',
        sexo: 'hembra',
    },
    {
        nombre: 'Galleta 🍪',
        emoji: '😸',
        meta: 'Hembra · 2 años · Esterilizada',
        descripcion: 'La más sociable de todas. Va bien con perros y niños.',
        tags: ['Sociable', 'Con perros ✓', 'Con niños ✓'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'adulto',
        sexo: 'hembra',
    },
    {
        nombre: 'Sombra 🖤',
        emoji: '🙀',
        meta: 'Macho · 5 años · Castrado',
        descripcion: 'Tímido pero leal. Una vez que confía, te elige para siempre.',
        tags: ['Tímido', 'Leal', '🏠 Hogar tranquilo'],
        estado: 'nuevo',
        etiqueta: '¡Nuevo!',
        edad: 'adulto',
        sexo: 'macho',
    },
    {
        nombre: 'Thor ⚡',
        emoji: '🐈',
        meta: 'Macho · 2 años · Castrado',
        descripcion: 'Fuerte, musculoso y con mucho amor para dar. Adora los rascadores.',
        tags: ['Activo', 'Grande', '🏠 Interior'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'adulto',
        sexo: 'macho',
    },
    {
        nombre: 'Frida 🌸',
        emoji: '😻',
        meta: 'Hembra · 3 años · Esterilizada',
        descripcion: 'Creativamente traviesa. Reorganiza tus objetos del escritorio y luego te mira inocente.',
        tags: ['Traviesa', 'Curiosa', 'Divertida'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'adulto',
        sexo: 'hembra',
    },

    // ─── SENIORS (7+ años) ───────────────────────────────────────────────────
    {
        nombre: 'Luna 🌕',
        emoji: '🐾',
        meta: 'Hembra · 6 años · Esterilizada',
        descripcion: 'Senior pero llena de vida. Ama dormir al sol y recibir caricias infinitas.',
        tags: ['Tranquila', '💛 Senior', 'Amorosa'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'senior',
        sexo: 'hembra',
    },
    {
        nombre: 'Pirata ☠️',
        emoji: '🐱',
        meta: 'Macho · 8 años · Castrado',
        descripcion: 'Tuerto y con mucho carácter. El veterano del refugio. Busca una persona paciente.',
        tags: ['Especial', 'Único', '🏠 Tranquilo'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'senior',
        sexo: 'macho',
    },
    {
        nombre: 'Abuela Michi 👵',
        emoji: '🙀',
        meta: 'Hembra · 10 años · Esterilizada',
        descripcion: 'La más experimentada de todas. Sabia, tranquila y perfecta para una vida hogareña sin apuros.',
        tags: ['Senior', 'Sabia', 'Tranquila'],
        estado: 'disponible',
        etiqueta: 'Disponible',
        edad: 'senior',
        sexo: 'hembra',
    },
];
