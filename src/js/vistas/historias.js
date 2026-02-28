window.evitarAutoInicio = true;

// Lógica de la página de historias
createApp({
    components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
    },
    data() {
        return {
            categoriaActiva: 'todas',
            // Galería de historias de éxito
            historias: [
                {
                    titulo: 'Naranja y Valentina',
                    emoji: '🐈',
                    categoria: 'Adulto',
                    tipo: 'adulto',
                    fecha: 'Enero 2026',
                    ciudad: 'Buenos Aires',
                    resumen: 'Valentina nunca fue "de gatos". Un sábado aburrido entró al Gatálogo y Naranja la miró directo al alma.',
                    historia: 'Valentina siempre decía que era "de perros". Pero un sábado lluvioso de enero, por aburrimiento, abrió el Gatálogo de GatoHogar. Y ahí estaba Naranja, mirando a la cámara con esa dignidad única de los gatos anaranjados.\n\nEl proceso fue rápido. A la semana ya estaba en el departamento. La primera noche Naranja exploró cada recoveco, olió cada mueble, y al amanecer del segundo día, se subió a la cama de Valentina y se instaló como si siempre hubiera vivido ahí.\n\nHoy Naranja tiene su rincón de sol favorito junto a la ventana, su cama de chenille premium, y la rutina perfecta: desayunar con Valentina, mirar pájaros, y ronronear durante las videollamadas de trabajo. El mejor compañero de home office del universo.',
                },
                {
                    titulo: 'Galleta y la familia Pérez',
                    emoji: '😸',
                    categoria: 'Adulto',
                    tipo: 'adulto',
                    fecha: 'Diciembre 2025',
                    ciudad: 'Córdoba',
                    resumen: 'Rodrigo tuvo que convencer a su señora. Galleta convirtió a toda la familia en sus fanáticos en 24 horas.',
                    historia: 'El plan de Rodrigo era simple: "entramos, la vemos, nos vamos". La señora no quería gatos. Los niños la rogaban. Fue a devolver los argumentos en persona.\n\nEntró a la casa transitoria de Galleta y en menos de cinco minutos Galleta ya estaba trepada al hombro de Mariana, la señora que "no quería gatos", ronroneando como si la conociera de toda la vida.\n\nLa semana siguiente Galleta estaba en Córdoba, con su canasta nueva, su arenero de diseño y cuatro personas que competían por darle mimos. Luly, la hija de 5 años, le canta canciones antes de dormir. Galleta, por supuesto, ronronea satisfecha.',
                },
                {
                    titulo: 'Tortilla llegó a casa al amanecer',
                    emoji: '😺',
                    categoria: 'Cachorritos',
                    tipo: 'gatito',
                    fecha: 'Febrero 2026',
                    ciudad: 'Mendoza',
                    resumen: 'Era una bolita naranja de 3 meses que cabía en una mano. Hoy es la dueña del departamento.',
                    historia: 'Lucas y Emilia la encontraron en el perfil de los cachorritos un viernes a la noche. El sábado completaron el formulario. El martes llegó Tortilla.\n\nCabía en una mano. Era tan chiquitita que el primer día se perdió detrás de la heladera y hubo que rescatarla con una linterna y mucha paciencia.\n\nTres meses después, Tortilla ya pesa 2 kilos, controla el 100% del territorio, y despertó a Lucas tres veces esta semana pisándole la cara a las 6am para pedir el desayuno. La vida que siempre soñaron.',
                },
                {
                    titulo: 'Pirata y su persona',
                    emoji: '🐱',
                    categoria: 'Casos especiales',
                    tipo: 'especial',
                    fecha: 'Noviembre 2025',
                    ciudad: 'Rosario',
                    resumen: 'Tuerto, senior, con cicatrices de calle. Pirata esperó 8 meses al refugio. Lucía lo eligió sin dudarlo.',
                    historia: 'Pirata llegó al refugio después de un accidente callejero. Perdió un ojo, tiene una oreja rota y camina con un leve cojeo de la pata trasera izquierda. Pasó 8 meses esperando.\n\nLucía lo vio en una publicación de Instagram a las 2am. "Ese gato era para mí", dice. Al día siguiente mandó el formulario.\n\nHoy Pirata duerme en la cama de Lucía, tiene su silla favorita junto al escritorio, y ya no tiene miedo a los ruidos fuertes. Tardó en confiar, pero cuando confió, fue para siempre. "El animal más leal que tuve en mi vida", dice su mamá adoptiva.',
                },
                {
                    titulo: 'Luna encontró su sol',
                    emoji: '😻',
                    categoria: 'Seniors',
                    tipo: 'senior',
                    fecha: 'Octubre 2025',
                    ciudad: 'La Plata',
                    resumen: 'A los 6 años, Luna pasó un año en el refugio. Pocos quieren seniors. La familia Morán cambió esa historia.',
                    historia: 'Cuando la familia Morán llegó al refugio, iban a adoptar un gatito bebé. Pero cuando vieron a Luna acurrucada en un rincón, con sus ojos dorados y esa calma absoluta, cambiaron de idea.\n\n"Ella nos eligió a nosotros", dice Marcelo. Luna se levantó, caminó hacia ellos, y se frotó contra las piernas de la señora sin apuro, sin drama, con la seguridad de quien ya sabe lo que quiere.\n\nHoy Luna ama la ventana de la cocina, el sol de las 4pm, y que el abuelo de la familia la cepille cada tarde. A los 6 años, Luna encontró su hogar definitivo.',
                },
                {
                    titulo: 'Menta y su destino verde',
                    emoji: '🌿',
                    categoria: 'Cachorritos',
                    tipo: 'gatito',
                    fecha: 'Enero 2026',
                    ciudad: 'Buenos Aires',
                    resumen: 'Lo adoptaron dos estudiantes de veterinaria. Dicen que aprenden más con Menta que en la facultad.',
                    historia: 'Paula y Tomás son estudiantes de veterinaria en su último año. Vivían en un departamento chico y estaban "seguros" de que un cachorro sería demasiado trabajo.\n\nMenta los convenció en el primer encuentro. 7 meses, atigrado verde-gris, con esa energía inagotable de quien todavía no sabe que el mundo tiene límites.\n\nHoy Menta participa de todas las sesiones de estudio, manotea los libros, prueba los estetoscopios y supervisa cada tarea. "Nos enseña más sobre felinos que cualquier manual", admite Paula. Ya está integrado al departamento, a sus vidas, y sobre todo, al corazón.',
                },
            ],
        };
    },
    computed: {
        // Filtra las historias por categoría
        historiasFiltradas() {
            if (this.categoriaActiva === 'todas') return this.historias;
            return this.historias.filter(h => h.tipo === this.categoriaActiva);
        },
    },
}).mount('#app');
