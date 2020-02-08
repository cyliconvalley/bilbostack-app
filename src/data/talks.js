const talks = {
    'open-space-1': { name: 'Preparación Open Space y Café', description: `Preparación Open Space y Café`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode7.png', track: '-', when: '10:30-11:30' },

    'clarity': { name: 'Construyendo cultura de datos', description: 'Construyendo cultura de datos', speaker: 'Javier Serrano', speakerTitle: '', speakerImage: 'javiSerrano.jpg',speaker2: 'Rodrigo Quintana', speakerTitle2: '', speakerImage2: 'rodrigoQuintana.jpg', track: '1', when: '12:00-13:00' },
    'alex-soto': { name: 'The Java microservices tutorial with Quarkus', description: 'The Java microservices tutorial with Quarkus', speaker: 'Alex Soto', speakerTitle: '', speakerImage: 'alex_soto.jpeg', track: '2', when: '12:00-14:00' },
    'track3-1': { name: 'Event sourcing & CQAS', description: 'Event sourcing & CQAS', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '12:00-13:00' },
    'irene-perez': { name: 'Katas en Python', description: 'Katas en Python', speaker: 'Irene Pérez', speakerTitle: '', speakerImage: 'IrenePerezEncinar.jpeg', track: '4', when: '12:00-14:00' },
    'jeronimo lopez': { name: 'Experiencias con Monorepo', description: 'Experiencias con Monorepo', speaker: 'Jeronimo Lopez', speakerTitle: '', speakerImage: '', track: '5', when: '12:00-13:00' },

    'Carlos Fernandez': { name: 'El mastodonte en la habitacion. Redes sociales federadas', description: 'El mastodonte en la habitacion. Redes sociales federadas', speaker: '@sirikon', speakerTitle: '', speakerImage: '', track: '1', when: '13:00-14:00' },
    'Cynthia Galvez': { name: 'Teletrabajo y conciliacion sin morir en el intento', description: 'Teletrabajo y conciliacion sin morir en el intento', speaker: '@icynthia', speakerTitle: '', speakerImage: '', track: '3', when: '13:00-14:00' },
    'JM': { name: 'Functional Programing, ¿la nueva vieja moda?', description: 'Functional Programing, ¿la nueva vieja moda?', speaker: 'JM', speakerTitle: '', speakerImage: '', track: '5', when: '13:00-14:00' },

    'comida-1': { name: 'Comida: Viernes', description: `Comida: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode3.png', track: '-', when: '14:00-15:00' },

    'flipper-live': { name: 'Live Coding: Flipper', description: 'Live Coding: Flipper', speaker: 'Jorge J. Barroso', speakerTitle: '', speakerImage: 'jorge-barroso_c.png', track: '1', when: '15:00-15:30' },
    
    'Pablo Vicente': { name: 'Equipos distribuidos remote, herramientas y practicas', description: 'Equipos distribuidos remote, herramientas y practicas', speaker: 'Pablo Vicente', speakerTitle: '', speakerImage: '', track: '1', when: '15:30-16:30' },
    'julian-sierra-jm': { name: 'Apache Beam: procesando datos como churros', description: 'Apache Beam: procesando datos como churros', speaker: 'Julián Sierra', speakerTitle: '', speakerImage: 'julian_cuadrado.jpg', speaker2: 'Jose Manuel Navarro', speakerTitle2: '', speakerImage2: 'jm.jpeg', track: '2', when: '15:30-17:30' },
    'Willy': { name: 'Luchando contra el sindrome del impostor', description: 'Luchando contra el sindrome del impostor', speaker: 'Willy', speakerTitle: '', speakerImage: '', track: '3', when: '15:30-16:30' },
    'Mario Sanchez': { name: 'Formando el equipo fullstack definitivo', description: 'Formando el equipo Fullstack definitivo', speaker: 'Mario Sanchez & Alex', speakerTitle: '', speakerImage: '', track: '4', when: '15:30-16:30' },
    'cynthia-galvez': { name: '¿Mamarracha con filtro o genialidad? Realidad aumentada facial', description: '¿Mamarracha con filtro o genialidad? Realidad aumentada facial', speaker: 'Cynthia Gálvez', speakerTitle: '', speakerImage: 'CynthiaGalvez.jpg', track: '5', when: '15:30-17:30' },

     'Aritz': { name: 'Contract testing: real o fake', description: 'Contract testing: real o fake', speaker: 'Aritz', speakerTitle: '', speakerImage: '', track: '1', when: '16:30-17:30' },
     'Ruben': { name: 'Acercando diseño a desarrollo', description: 'Acercando diseño a desarrollo', speaker: 'Ruben', speakerTitle: '', speakerImage: '', track: '3', when: '16:30-17:30' },
     'Jimena Escobar': { name: 'Espacio de trabajo seguro', description: 'Espacio de trabajo seguro', speaker: 'Jimena Escobar', speakerTitle: '', speakerImage: '', track: '4', when: '16:30-17:30' },

    'cafe-1': { name: 'Café: Viernes', description: `Café: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode6.png', track: '-', when: '17:30-18:00' },

    'devo': { name: 'Procesando video en streaming para monitorización continua', description: 'Procesando video en streaming para monitorización continua', speaker: 'Elizabeth González', speakerTitle: '', speakerImage: 'elizabeth.png', track: '1', when: '18:00-19:00' },
    'luru': { name: 'Construye tu API REST con .NET Core 3.0', description: 'Construye tu API REST con .NET Core 3.0', speaker: 'Luis Ruiz Pavón', speakerTitle: '', speakerImage: 'LuisRuizPavon.jpg', track: '2', when: '18:00-20:00' },
    'Aritz': { name: 'Isolated vs Integrated testing', description: 'Isolated vs Integrated testing', speaker: 'Aritz', speakerTitle: '', speakerImage: '', track: '3', when: '18:00-19:00' },
    'Ulises Gascon': { name: 'Open source 2020', description: 'Open source 2020', speaker: 'Ulises Gascon', speakerTitle: '', speakerImage: '', track: '4', when: '18:00-19:00' },
    'Gortieja': { name: 'Logica de Datos, ¿en la BBDD o en la aplicación?', description: 'Logica de Datos, ¿en la BBDD o en la aplicación?', speaker: '@gortieja', speakerTitle: '', speakerImage: '', track: '5', when: '18:00-19:00' },
    
    'powerpoint': { name: 'PowerPoint Karaoke y comunicación efectiva', description: 'PowerPoint Karaoke y comunicación efectiva', speaker: 'Carlos Rueda', speakerTitle: '', speakerImage: '', track: '1', when: '19:00-20:00' },
    'David Arias': { name: 'OO and Functional, Big win?', description: 'OO and Functional, Big win?', speaker: 'David Arias', speakerTitle: '', speakerImage: '', track: '3', when: '19:00-20:00' },
    'Javier Torres': { name: 'Serverless, las partes malas', description: 'Serverless, las partes malas', speaker: 'Javier Torres', speakerTitle: '', speakerImage: '', track: '4', when: '19:00-20:00' },
    'Abel Rincon': { name: 'Test commit Reset', description: 'Test, commit , reset', speaker: 'Abel Rincon', speakerTitle: '', speakerImage: '', track: '5', when: '19:00-20:00' },

    'retrospectiva1': { name: 'Retrospectiva Viernes', description: 'Retrospectiva Viernes', speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode1.png', track: '1', when: '20:00-20:15' },    

    'concurso': { name: 'Kahoot', description: `Kahoot`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode5.png', track: '1', when: '09:00-09:30' },

    'open-space-2': { name: 'Preparación Open Space y Café', description: `Preparación Open Space y Café`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode4.png', track: '-', when: '10:00-11:00' },


    // 'track1--1': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '1', when: '11:00-12:00' },
    'jimena': { name: 'Iniciación a la nube con AWS', description: `Iniciación a la nube con AWS`, speaker: 'Jimena Escobar', speakerTitle: '', speakerImage: 'jimena_escobar.png', track: '2', when: '11:00-13:00' },
    'dani': { name: 'Hardware Libre IT', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '3', when: '11:00-12:00' },
    'elena': { name: '¿Sueñan los developers con entidades y tablas?', description: `¿Sueñan los developers con entidades y tablas?`, speaker: 'Elena Guzmán', speakerTitle: '', speakerImage: 'ElenaGuzmanBlanco.jpg', track: '4', when: '11:00-13:00' },
    'ruben': { name: 'BFF: front tocando backend', description: 'BFF: front tocando backend', speaker: 'Ruben', speakerTitle: '', speakerImage: '', track: '5', when: '11:00-12:00' },
    'Carlos-Luis': { name: 'Server Critic la güé no va', description: 'Server Critic la güé no va', speaker: 'Carlos y Luis', speakerTitle: '', speakerImage: '', track: '5', when: '11:00-12:00' },

    'Eduardo': { name: 'Impresion 3D en 2020', description: 'Impresion 3D en 2020', speaker: 'Eduardo', speakerTitle: '', speakerImage: '', track: '1', when: '12:00-13:00' },
    'Flipper83': { name: 'Test in the shell', description: 'Test in the shell', speaker: 'Flipper83', speakerTitle: '', speakerImage: '', track: '3', when: '12:00-13:00' },
    'Javi Mostoles': { name: '#HourOrCode, eduacion + tecnologia', description: '#HourOrCode, eduacion + tecnologia', speaker: 'Javi Mostoles', speakerTitle: '', speakerImage: '', track: '5', when: '12:00-13:00' },

    'codely': { name: 'Elige tu propia aventura: Nuestra primera tarea en ACME SL como Productivity Raptors™️', description: 'Elige tu propia aventura: Nuestra primera tarea en ACME SL como Productivity Raptors™️', speaker: 'Jorge Ferrer', speakerTitle: 'Codely TV', speakerImage: 'javier_ferrer.jpg', speaker2: 'Rafa Gómez', speakerTitle2: 'Codely TV', speakerImage2: 'rafa_gomez.jpg', track: '1', when: '13:00-14:00' },
    'MartaLopezPardal': { name: 'Vacaciones en la costa del sock', description: 'Vacaciones en la costa del sock', speaker: 'Marta Lopez Pardal', speakerTitle: '', speakerImage: '', track: '2', when: '13:00-14:00' },
    'tripu': { name: 'Tu navegador esta roto (criticism of the web)', description: 'Tu navegador esta roto (criticism of the web)', speaker: 'Tripu', speakerTitle: '', speakerImage: '', track: '3', when: '13:00-14:00' },
    'sanmibuh': { name: 'Validando sin bloatcodt', description: 'Validando sin bloatcodt', speaker: '@sanmibuh', speakerTitle: '', speakerImage: '', track: '4', when: '13:00-14:00' },
    // 'track5--3': { name: 'NotImplemented', description: 'NotImplemented', speaker: '', speakerTitle: '', speakerImage: '', track: '5', when: '13:00-14:00' },

    'comida-2': { name: 'Comida: Sábado', description: `Comida: Sábado`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode3.png', track: '-', when: '14:00-15:00' },

    'ulises': { name: 'Live Coding: Ulises', description: 'Live Coding: Ulises', speaker: 'Ulises Gascon', speakerTitle: '', speakerImage: 'ulises_gascon.jpeg', track: '1', when: '15:00-15:30' },
    
    'NLT-Roberto': { name: 'Trabajos parte legal. Offline', description: 'Trabajos parte legal. Offline', speaker: 'Ines y Maria. Roberto L.', speakerTitle: '', speakerImage: '', track: '1', when: '15:30-16:30' },
    'jorge-sanz': { name: 'ElasticSearch geospatial capabilities', description: 'ElasticSearch geospatial capabilities', speaker: 'Jorge Sanz', speakerTitle: '', speakerImage: 'Jorge_Sanz.png', track: '2', when: '15:30-17:30' },
    'trikitrok': { name: 'Habilitando una arquitectura funcional en JS', description: 'Habilitando una arquitectura funcional en JS', speaker: '@trikitrok', speakerTitle: '', speakerImage: '', track: '3', when: '15:30-16:30' },
    'marta-lopez': { name: 'Ciber analista por un dia (ciber análisis)', description: 'Ciber analista por un dia (ciber análisis)', speaker: 'Marta López', speakerTitle: '', speakerImage: 'MartaLopezPardal.jpg', track: '4', when: '15:30-17:30' },
    'gortizj': { name: 'Otra concurrencia, modelos de actores. Structured concurrenci, etc.', description: 'Otra concurrencia, modelos de actores. Structured concurrenci, etc.', speaker: 'gortizj', speakerTitle: '', speakerImage: '', track: '5', when: '15:30-16:30' },

    'SegoTechTrain': { name: 'Comunidades de provincias', description: 'Comunidades de provincias', speaker: '@SegoTechTrain', speakerTitle: '', speakerImage: '', track: '1', when: '16:30-17:30' },
    'Andres Escobar': { name: 'Charla taller OpenCV: visión computacional', description: 'Charla taller openCV: Visión computacional', speaker: 'Andres Escobar', speakerTitle: '', speakerImage: '', track: '3', when: '16:30-17:30' },
    'Felix': { name: 'Testing CI/CD Pipeline. Scripts', description: 'Testing CI/CD Pipeline. Scripts', speaker: 'Felix', speakerTitle: '', speakerImage: '', track: '5', when: '16:30-17:30' },

    'cafe-1': { name: 'Café: Viernes', description: `Café: Viernes`, speaker: 'CyLicon Valley', speakerTitle: '', speakerImage: 'Wecode6.png', track: '-', when: '17:30-18:00' },

    'everis': { name: 'Implementar APIs asíncronas con mule esb', description: 'Implementar APIs asíncronas con mule esb', speaker: 'Jorge Lebrato', speakerTitle: '', speakerImage: 'j_lebrato.jpeg', track: '1', when: '18:00-19:00' },
    'flipper': { name: 'Test end to end con Kotlin y Spring', description: 'Test end to end con Kotlin y Spring', speaker: 'Jorge J. Barroso', speakerTitle: '', speakerImage: 'jorge-barroso_c.png', track: '2', when: '18:00-20:00' },
    'Julian Sierra': { name: 'Apache Cassandra, que es y para que sirve', description: 'Apache Cassandra, que es y para que sirve', speaker: 'Julian Sierra', speakerTitle: '', speakerImage: '', track: '3', when: '18:00-19:00' },
    'Pepellou': { name: '¿Por que en desarrollo no tenemos juramento hipocratico? Hablemos de etica', description: '¿Por que en desarrollo no tenemos juramento hipocratico? Hablemos de etica', speaker: 'Pepellou', speakerTitle: '', speakerImage: '', track: '4', when: '18:00-19:00' },
    'Patori-Pablo Martinez': { name: 'New Job. Master Si / Master No', description: 'New Job. Master Si / Master No', speaker: 'Patori. Pablo', speakerTitle: '', speakerImage: '', track: '5', when: '18:00-19:00' },

    'Angel Luis': { name: 'En mi local funciona. Como desarrollar un entorno local definitivo que nos ayude al onboarding y desarrollo', description: 'En mi local funciona. Como desarrollar un entorno local definitivo que nos ayude al onboarding y desarrollo', speaker: 'Angel Luis', speakerTitle: '', speakerImage: '', track: '1', when: '19:00-20:00' },
    'Adrian Arroyo': { name: 'Lock Picking', description: 'Lock Picking', speaker: 'Adrian Arroyo', speakerTitle: '', speakerImage: '', track: '3', when: '19:00-20:00' },
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
