const talks = {

    'presentacion': {
        name: 'Presentación WeCode 2020',
        description: `Presentación (Salón de Grados)`,
        speaker: 'Agilisto (Jorge - Semurat)',
        speakerTitle: 'Presidente de CyLicon Valley',
        speakerImage: 'semurat.jpg',
        track: '1',
        when: '10:00-10:30'
    },
    'alex-soto': {
        name: 'The Java microservices tutorial with Quarkus',
        description: 'The Java microservices tutorial with Quarkus',
        speaker: 'Alex Soto',
        speakerTitle: '',
        speakerImage: 'alex_soto.jpeg',
        track: '2',
        when: '12:00-14:00'
    },
    'irene-perez': {
        name: 'Katas en Python',
        description: 'Katas en Python',
        speaker: 'Irene Pérez',
        speakerTitle: '',
        speakerImage: 'IrenePerezEncinar.jpeg',
        track: '4',
        when: '12:00-14:00'
    },
    'julian-sierra-jm': {
        name: 'Apache Beam: procesando datos como churros',
        description: 'Apache Beam: procesando datos como churros',
        speaker: 'Julián Sierra',
        speakerTitle: '',
        speakerImage: 'julian_cuadrado.jpg',
        speaker2: 'Jose Manuel Navarro',
        speakerTitle2: '',
        speakerImage2: 'jm.jpeg',
        track: '4',
        when: '12:00-14:00'
    },
    'wecode': {
        name: 'WeCode 2020',
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
