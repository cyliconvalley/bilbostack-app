const talks = {

    'presentacion': {
        name: 'Presentación WeCode 2019',
        description: `Presentación (Salón de Grados)`,
        speaker: 'Jorge (Semurat)',
        speakerTitle: 'Presidente de CyLicon Valley',
        speakerImage: 'semurat.jpg',
        track: '1',
        when: '10:30-11:00'
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
