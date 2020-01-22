const talks = {
    
    'presentacion': {
        name: 'Presentación WeCode 2019',
        description: `Presentación (Salón de Grados)`,
        speaker: 'Jorge (Semurat)',
        speakerTitle: 'Presidente de CyLicon Valley',
        speakerImage: 'semurat.jpg',
        track: '1',
        when: '10:00-10:30'
    },
    'implementando-apis': {
        name: 'Implementando APIs en 2019',
        description: `Implementando APIs en 2019`,
        speaker: 'José Ramón de la Huerga',
        speakerTitle: '',
        speakerImage: 'jrhuerga.png',
        track: '1',
        when: '12:00-13:00'
    },
    'nuxtjs': {
        name: 'Taller de creación de aplicaciones universales con Nuxt.js',
        description: `Taller de creación de aplicaciones universales con Nuxt.js`,
        speaker: 'Cristina Fernández',
        speakerTitle: '',
        speakerImage: 'cristinafsanz.jpg',
        track: '2',
        when: '12:00-13:00'
    },
    'kubernetes': {
        name: 'Extending Kubernetes, the rise of the Operators',
        description: `Extending Kubernetes, the rise of the Operators`,
        speaker: 'Iván Pedrazas',
        speakerTitle: '',
        speakerImage: 'ipedrazas.jpg',
        track: '3',
        when: '12:00-13:00'
    },
    'reglas-de-codigo-simple': {
        name: 'Reglas de código simple',
        description: `Reglas de código simple`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '12:00-13:00'
    },
    'gestion-de-logs': {
        name: 'Gestión de logs',
        description: `Gestión de logs`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '12:00-13:00'
    },
    'testing-en-frontend': {
        name: 'Testing en Frontend',
        description: `Testing en Frontend`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '13:00-14:00'
    },
    'fomentar-aprendizaje': {
        name: 'Fomentar aprendizaje en empresa',
        description: `Fomentar aprendizaje en empresa`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '13:00-14:00'
    },
    'observabilidad': {
        name: 'Observabilidad ¿Qué pasa con el negocio (datos)?',
        description: `Observabilidad ¿Qué pasa con el negocio (datos)?`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '13:00-14:00'
    },
    'pythonic-code': {
        name: 'Live coding con Marta Gómez Macías',
        description: `Live coding con Marta Gómez Macías`,
        speaker: 'Marta Gómez Macías',
        speakerTitle: '',
        speakerImage: 'marta_gomez.jpg',
        track: '1',
        when: '15:00-15:30'
    },
    'reactividad': {
        name: 'Reactividad en React, Vue y Angular',
        description: `Reactividad en React, Vue y Angular`,
        speaker: 'Javier Abadía',
        speakerTitle: '',
        speakerImage: 'javier_abadia.jpg',
        track: '1',
        when: '15:30-16:30'
    },
    'starcraft': {
        name: 'Algoritmos e Inteligencia Artificial con St(AI)craft',
        description: `Algoritmos e Inteligencia Artificial con St(AI)craft`,
        speaker: 'Nerea Luis',
        speakerTitle: '',
        speakerImage: 'nerea.jpg',
        track: '2',
        when: '15:30-17:30'
    },
    'property-based-testing': {
        name: 'Introducción a Property Based Testing',
        description: `Introducción a Property Based Testing`,
        speaker: 'Sergio Arroyo Cuevas',
        speakerTitle: '',
        speakerImage: 'sergio_arroyo.jpeg',
        track: '3',
        when: '15:30-17:30'
    },
    'patrones-funcionales': {
        name: 'Patrones funcionales',
        description: `Patrones funcionales`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '15:30-16:30'
    },
    'sin-frameworks': {
        name: 'Sin frameworks (cuando no usarlos)',
        description: `Sin frameworks (cuando no usarlos)`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '15:30-16:30'
    },
    'vue-real': {
        name: 'Vue en el mundo real',
        description: `Vue en el mundo real`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '16:30-17:30'
    },
    'event-sourcing': {
        name: 'Event sourcing & CQRS ¿experiencias?',
        description: `Event sourcing & CQRS ¿experiencias?`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '16:30-17:30'
    },

    'rust': {
        name: 'RUST',
        description: `RUST`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '16:30-17:30'
    },
    'react': {
        name: 'Construyendo aplicaciones sólidas en React/React Native',
        description: `Construyendo aplicaciones sólidas en React/React Native`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '18:00-19:00'
    },
    'cuantica': {
        name: 'Programación cuántica para gente que programa',
        description: `Programación cuántica para gente que programa`,
        speaker: 'Salvador de la Puente',
        speakerTitle: '',
        speakerImage: 'salvadelapuente.png',
        track: '2',
        when: '18:00-20:00'
    },
    'arte-generativo': {
        name: 'Taller de Arte generativo',
        description: `Taller de Arte generativo`,
        speaker: 'Karlos G Liberal',
        speakerTitle: '',
        speakerImage: 'karlos_g_liberal.jpg',
        track: '3',
        when: '18:00-20:00'
    },
    'troleando': {
        name: 'Troleando Microservicios',
        description: `Troleando Microservicios`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '18:00-19:00'
    },
    'web': {
        name: 'Web Semántica',
        description: `Web Semántica`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '18:00-19:00'
    },

    'motivacion': {
        name: 'Motivación de equipos',
        description: `Motivación de equipos`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '19:00-20:00'
    },

    'kotlin': {
        name: 'Kotlin & Co',
        description: `Kotlin & Co`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '19:00-20:00'
    },

    'resilientes': {
        name: 'Integraciones resilientes',
        description: `Integraciones resilientes`,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '19:00-20:00'
    },
 'kahoot': {
        name: 'Kahoot',
        description: `Kahoot`,
        speaker: 'Jorge (Semurat)',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '09:30-10:00'
    },

    'photomirror': {
        name: 'David Fernández Perrino',
        description: `Photomirror con Vue, Nodejs, Raspberry Pi`,
        speaker: 'David Fernández Perrino',
        speakerTitle: '',
        speakerImage: 'david_perrino.jpg',
        track: '1',
        when: '11:00-12:00'
    },

    'apis-funcionales': {
        name: 'Creación de APIs funcionales en Scala',
        description: `Creación de APIs funcionales en Scala`,
        speaker: 'Juan Manuel Serrano',
        speakerTitle: '',
        speakerImage: 'juanma.png',
        track: '2',
        when: '11:00-13:00'
    },
    'os3': {
        name: 'Software en provincias',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '3',
        when: '11:00-12:00'
    },
    'os4': {
        name: 'Testeando de startup a Silicon Valley',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '11:00-12:00'
    },
    'os5': {
        name: 'Productividad y distracciones',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '11:00-12:00'
    },

    'os21': {
        name: 'Tu propio PaaS por 3,5$',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '12:00-13:00'
    },
    'os23': {
        name: 'Chatbot',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '3',
        when: '12:00-13:00'
    },
    'os24': {
        name: 'Testing environments',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '12:00-13:00'
    },
    'os25': {
        name: 'Onboarding',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '12:00-13:00'
    },
    'mundo-online': {
        name: 'Tu mundo online es una ...',
        description: `Tu mundo online es una ...`,
        speaker: 'Cristina Ramos',
        speakerTitle: '',
        speakerImage: 'cmr.png',
        track: '1',
        when: '13:00-14:00'
    },

    'os32': {
        name: 'Multiplataforma vs nativo',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '2',
        when: '13:00-14:00'
    },
    'os33': {
        name: 'El dato: piedra angular. Transformación digital',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '3',
        when: '13:00-14:00'
    },
    'os34': {
        name: 'Programación para niños',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '13:00-14:00'
    },
    'os35': {
        name: 'Introducción a GraalVM',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '13:00-14:00'
    },

    'salva-live-coding': {
        name: 'Rusty Brainfuck Mandelbrot',
        description: `Rusty Brainfuck Mandelbrot`,
        speaker: 'Salvador de la puente',
        speakerTitle: '',
        speakerImage: 'salvadelapuente.png',
        track: '1',
        when: '15:00-15:30'
    },

    'powerpoint-karaoke': {
        name: 'PowerPoint Karaoke!',
        description: `PowerPoint Karaoke!`,
        speaker: 'Laura Morillo',
        speakerTitle: '',
        speakerImage: 'laura.png',
        track: '1',
        when: '15:30-16:30'
    },

    'serverless': {
        name: 'Aplicación serverless en dos horas',
        description: `Aplicación serverless en dos horas`,
        speaker: 'Vicenç García Altés',
        speakerTitle: '',
        speakerImage: 'vgaltes.jpg',
        track: '2',
        when: '15:30-17:30'
    },

    'ar': {
        name: 'Minijuego con AR',
        description: `Minijuego con AR`,
        speaker: 'Lilia Gomez Khabarova',
        speakerTitle: '',
        speakerImage: 'lilia.jpg',
        track: '3',
        when: '15:30-17:30'
    },

    'os44': {
        name: 'Debate Herramientas CI/CD',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '15:30-16:30'
    },
    'os45': {
        name: 'Cultura: Mantener y Crear',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '15:30-16:30'
    },

    'os51': {
        name: 'Lenguajes esotéricos: de O a brainfuck',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '16:30-17:30'
    },
    'os54': {
        name: 'Kata TDD',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '16:30-17:30'
    },
    'os55': {
        name: 'Mesa redonda: ética del Big Data',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '16:30-17:30'
    },

    'os61': {
        name: 'Cómo afectan las leyes y normativa legal en el software',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '18:00-19:00'
    },

    'net-core': {
        name: 'Descubriendo .Net Core: Cómo crear una Web API',
        description: `Descubriendo .Net Core: Cómo crear una Web API`,
        speaker: 'Azahara Fernández',
        speakerTitle: '',
        speakerImage: 'AzaharaFernandez.jpg',
        track: '2',
        when: '18:00-20:00'
    },

    'os63': {
        name: 'Kafka',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '3',
        when: '18:00-20:00'
    },
    'os64': {
        name: 'Jueces online - programar por diversión',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '18:00-19:00'
    },
    'os65': {
        name: 'Los libros que nos han cambiado',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '18:00-19:00'
    },

    'os71': {
        name: 'Gestión de clientes malvados',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '1',
        when: '19:00-20:00'
    },
    'os74': {
        name: 'Alternativas a Docker',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '4',
        when: '19:00-20:00'
    },
    'os75': {
        name: '¿Free Software?',
        description: ``,
        speaker: '',
        speakerTitle: '',
        speakerImage: '',
        track: '5',
        when: '19:00-20:00'
    },

	 'wecode': {
        name: 'WeCode 2019',
        description: `Feedback general de la conferencia`,
        speaker: 'CyLicon Valley',
        speakerTitle: '',
        speakerImage: '',
        track: '-',
        when: '09:30-20:30'
    },

};

Object.keys(talks).forEach((k) => {
    talks[k].slug = k;
});

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    all () {
        return Object.keys(talks)
            .map((id) => clone(talks[id]));
    },
    getBySlug (slug) {
        const talk = talks[slug];
        if (!talk) return null;
        return clone(talk);
    }
};
