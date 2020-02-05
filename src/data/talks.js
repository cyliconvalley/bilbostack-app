const talks = {
    'open-space-1': { name: 'Preparación Open Space y Café', description: `Preparación Open Space y Café`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode7.png', track: '-', when: '10:30-11:30' },

    'clarity': { name: 'Construyendo cultura de datos', description: 'Construyendo cultura de datos', speaker: 'Javier Serrano', speakerTitle: '', speakerImage: 'javiSerrano.jpg',speaker2: 'Rodrigo Quintana', speakerTitle2: '', speakerImage2: 'rodrigoQuintana.jpg', track: '1', when: '12:00-13:00' },
    'alex-soto': { name: 'The Java microservices tutorial with Quarkus', description: 'The Java microservices tutorial with Quarkus', speaker: 'Alex Soto', speakerTitle: '', speakerImage: 'alex_soto.jpeg', track: '2', when: '12:00-14:00' },
    // 'track3-1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '12:00-13:00' },
    'irene-perez': { name: 'Katas en Python', description: 'Katas en Python', speaker: 'Irene Pérez', speakerTitle: '', speakerImage: 'IrenePerezEncinar.jpeg', track: '4', when: '12:00-14:00' },
    // 'track5-1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '12:00-13:00' },

    // 'track1-2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '13:00-14:00' },
    // 'track3-2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '13:00-14:00' },
    // 'track5-2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '13:00-14:00' },

    'comida-1': { name: 'Comida: Viernes', description: `Comida: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode3.png', track: '-', when: '14:00-15:00' },

    'flipper-live': { name: 'Live Coding: Flipper', description: 'Live Coding: Flipper', speaker: 'Jorge J. Barroso', speakerTitle: '', speakerImage: 'jorge-barroso_c.png', track: '1', when: '15:00-15:30' },
    
    // 'track1-3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '15:30-16:30' },
    'julian-sierra-jm': { name: 'Apache Beam: procesando datos como churros', description: 'Apache Beam: procesando datos como churros', speaker: 'Julián Sierra', speakerTitle: '', speakerImage: 'julian_cuadrado.jpg', speaker2: 'Jose Manuel Navarro', speakerTitle2: '', speakerImage2: 'jm.jpeg', track: '2', when: '15:30-17:30' },
    // 'track3-3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '15:30-16:30' },
    // 'track4-3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '15:30-16:30' },
    'cynthia-galvez': { name: '¿Mamarracha con filtro o genialidad? Realidad aumentada facial', description: '¿Mamarracha con filtro o genialidad? Realidad aumentada facial', speaker: 'Cynthia Gálvez', speakerTitle: '', speakerImage: 'CynthiaGalvez.jpg', track: '5', when: '15:30-17:30' },

    // 'track1-4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '16:30-17:30' },
    // 'track3-4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '16:30-17:30' },
    // 'track4-4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '16:30-17:30' },

    'cafe-1': { name: 'Café: Viernes', description: `Café: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode6.png', track: '-', when: '17:30-18:00' },

    'devo': { name: 'Procesando video en streaming para monitorización continua', description: 'Procesando video en streaming para monitorización continua', speaker: 'Elizabeth González', speakerTitle: '', speakerImage: 'elizabeth.png', track: '1', when: '18:00-19:00' },
    'luru': { name: 'Construye tu API REST con .NET Core 3.0', description: 'Construye tu API REST con .NET Core 3.0', speaker: 'Luis Ruiz Pavón', speakerTitle: '', speakerImage: 'LuisRuizPavon.jpg', track: '2', when: '18:00-20:00' },
    // 'track3-5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '18:00-19:00' },
    // 'track4-5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '18:00-19:00' },
    // 'track5-5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '18:00-19:00' },
    
    'powerpoint': { name: 'PowerPoint Karaoke y comunicación efectiva', description: 'PowerPoint Karaoke y comunicación efectiva', speaker: 'Carlos Rueda', speakerTitle: '', speakerImage: '', track: '1', when: '19:00-20:00' },
    // 'track3-6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '19:00-20:00' },
    // 'track4-6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '19:00-20:00' },
    // 'track5-6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '19:00-20:00' },

    'retrospectiva1': { name: 'Retrospectiva Viernes', description: 'Retrospectiva Viernes', speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode1.png', track: '1', when: '20:00-20:15' },    

    'concurso': { name: 'Kahoot', description: `Kahoot`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode5.png', track: '1', when: '09:00-09:30' },

    'open-space-2': { name: 'Preparación Open Space y Café', description: `Preparación Open Space y Café`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode4.png', track: '-', when: '10:00-11:00' },

    // 'track1--1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '11:00-12:00' },
    'jimena': { name: 'Iniciación a la nube con AWS', description: `Iniciación a la nube con AWS`, speaker: 'Jimena Escobar', speakerTitle: '', speakerImage: 'jimena_escobar.png', track: '2', when: '11:00-13:00' },
    // 'track3--1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '11:00-12:00' },
    'elena': { name: '¿Sueñan los developers con entidades y tablas?', description: `¿Sueñan los developers con entidades y tablas?`, speaker: 'Elena Guzmán', speakerTitle: '', speakerImage: 'ElenaGuzmanBlanco.jpg', track: '4', when: '11:00-13:00' },
    // 'track5--1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '11:00-12:00' },

    // 'track1--2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '12:00-13:00' },
    // 'track3--2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '12:00-13:00' },
    // 'track5--2': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '12:00-13:00' },

    'codely': { name: 'Elige tu propia aventura: Nuestra primera tarea en ACME SL como Productivity Raptors™️', description: 'Elige tu propia aventura: Nuestra primera tarea en ACME SL como Productivity Raptors™️', speaker: 'Jorge Ferrer', speakerTitle: 'Codely TV', speakerImage: 'javier_ferrer.jpg', speaker2: 'Rafa Gómez', speakerTitle2: 'Codely TV', speakerImage2: 'rafa_gomez.jpg', track: '1', when: '13:00-14:00' },
    // 'track2--3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '2', when: '13:00-14:00' },
    // 'track3--3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '13:00-14:00' },
    // 'track4--3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '13:00-14:00' },
    // 'track5--3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '13:00-14:00' },

    'comida-2': { name: 'Comida: Sábado', description: `Comida: Sábado`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode3.png', track: '-', when: '14:00-15:00' },

    'ulises': { name: 'Live Coding: Ulises', description: 'Live Coding: Ulises', speaker: 'Ulises Gascon', speakerTitle: '', speakerImage: 'ulises_gascon.jpeg', track: '1', when: '15:00-15:30' },
    
    // 'track1--4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '15:30-16:30' },
    'jorge-sanz': { name: 'ElasticSearch geospatial capabilities', description: 'ElasticSearch geospatial capabilities', speaker: 'Jorge Sanz', speakerTitle: '', speakerImage: 'Jorge_Sanz.png', track: '2', when: '15:30-17:30' },
    // 'track3--4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '15:30-16:30' },
    'marta-lopez': { name: 'Ciber analista por un dia (ciber análisis)', description: 'Ciber analista por un dia (ciber análisis)', speaker: 'Marta López', speakerTitle: '', speakerImage: 'MartaLopezPardal.jpg', track: '4', when: '15:30-17:30' },
    // 'track5--4': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '15:30-16:30' },

    // 'track1--5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '16:30-17:30' },
    // 'track3--5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '16:30-17:30' },
    // 'track5--5': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '16:30-17:30' },

    'cafe-1': { name: 'Café: Viernes', description: `Café: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode6.png', track: '-', when: '17:30-18:00' },

    'everis': { name: 'Implementar APIs asíncronas con mule esb', description: 'Implementar APIs asíncronas con mule esb', speaker: 'Jorge Lebrato', speakerTitle: '', speakerImage: 'j_lebrato.jpeg', track: '1', when: '18:00-19:00' },
    'flipper': { name: 'Test end to end con Kotlin y Spring', description: 'Test end to end con Kotlin y Spring', speaker: 'Jorge J. Barroso', speakerTitle: '', speakerImage: 'jorge-barroso_c.png', track: '2', when: '18:00-20:00' },
    // 'track3--6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '18:00-19:00' },
    // 'track4--6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '18:00-19:00' },
    // 'track5--6': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '18:00-19:00' },

    // 'track1--7': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '19:00-20:00' },
    // 'track3--7': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '19:00-20:00' },
    // 'track4--7': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '4', when: '19:00-20:00' },
    // 'track5--7': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '19:00-20:00' },     

    'wecode': { name: 'WeCode 2020', description: `Feedback general de la conferencia`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode2.png', track: '-', when: '09:00-20:30' },
};

Object.keys(talks).forEach((k) => {
    talks[k].slug = k;
});

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

module.exports = {
    all() {
        return Object.keys(talks)
            .map((id) => clone(talks[id]));
    },
    getBySlug(slug) {
        const talk = talks[slug];
        if (!talk) return null;
        return clone(talk);
    }
};
