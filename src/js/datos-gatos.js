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
//   tags:        Array   — Etiquetas de personalidad
//   edad:        string  — 'gatito' | 'adulto' | 'senior'
//   sexo:        string  — 'macho' | 'hembra'
//   link:        string  — URL de la publicación en Instagram
//   embed:       string  — URL de la inserción (embed) de Instagram
//   imagen:      string  — Ruta a la foto real en src/img/
// }

const GATOS = [
    {
        nombre: 'Sol ☀️',
        emoji: '🐈',
        meta: 'Macho · 3 años · Castrado',
        descripcion: 'Tranquilo y muy bueno. Es el compañero ideal para un hogar que busque paz y mucho amor.',
        tags: ['Tranquilo', 'Bueno', '🏠 Interior'],
        tags: ['Tranquilo', 'Bueno', '🏠 Interior'],
        edad: 'adulto',
        sexo: 'macho',
        link: 'https://www.instagram.com/p/DQkdgkigagP/',
        embed: 'https://www.instagram.com/p/DQkdgkigagP/embed',
        imagen: 'src/img/sol.jpg'
    },
    {
        nombre: 'Cani 🌸',
        emoji: '🐱',
        meta: 'Hembra · 5 años · Esterilizada',
        descripcion: 'Tranquila y algo miedosa al principio. Necesita un hogar paciente que le dé tiempo para brillar.',
        tags: ['Tranquila', 'Miedosa', '⏳ Paciencia'],
        tags: ['Tranquila', 'Miedosa', '⏳ Paciencia'],
        edad: 'adulto',
        sexo: 'hembra',
        link: 'https://www.instagram.com/p/DQe0c4dkQG0/',
        embed: 'https://www.instagram.com/p/DQe0c4dkQG0/embed',
        imagen: 'src/img/cani.jpg'
    },
    {
        nombre: 'Seibo 🌿',
        emoji: '🌳',
        meta: 'Macho · Adulto · Castrado',
        descripcion: 'Un gato majestuoso buscando su lugar en el mundo. Rescatado con mucho amor.',
        tags: ['Majestuoso', 'Adulto', '🏠 Hogar'],
        tags: ['Majestuoso', 'Adulto', '🏠 Hogar'],
        edad: 'adulto',
        sexo: 'macho',
        link: 'https://www.instagram.com/p/DVQ_srzkV8Y/',
        embed: 'https://www.instagram.com/p/DVQ_srzkV8Y/embed',
        imagen: 'src/img/seibo-mascotasenadopcionargentina.jpg'
    },
    {
        nombre: 'Felipe 👑',
        emoji: '😺',
        meta: 'Macho · Adulto · Castrado',
        descripcion: 'Simpático y con mucha personalidad. Felipe está listo para reinar en tu corazón.',
        tags: ['Simpático', 'Líder', '🏠 Compañero'],
        tags: ['Simpático', 'Líder', '🏠 Compañero'],
        edad: 'adulto',
        sexo: 'macho',
        link: 'https://www.instagram.com/p/DVQ_srzkV8Y/',
        embed: 'https://www.instagram.com/p/DVQ_srzkV8Y/embed',
        imagen: 'src/img/felipe-mascotasenadopcionargentina.jpg'
    },
    {
        nombre: 'Rey 🐾',
        emoji: '🦁',
        meta: 'Macho · Adulto · Castrado',
        descripcion: 'Un soberano de la ternura. Rey es un gato equilibrado y muy cariñoso con su familia.',
        tags: ['Equilibrado', 'Cariñoso', '👑 Rey'],
        tags: ['Equilibrado', 'Cariñoso', '👑 Rey'],
        edad: 'adulto',
        sexo: 'macho',
        link: 'https://www.instagram.com/p/DTiLXOpjYQy/',
        embed: 'https://www.instagram.com/p/DTiLXOpjYQy/embed',
        imagen: 'src/img/rey-mascotasenadopcionargentina.jpg'
    }
];
