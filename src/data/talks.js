const talks = {
    'presentacion': {
        name: 'Presentación LechazoConf 2019',
        description: 'Presentación',
        speaker: 'Jorge (Semurat)',
        speakerTitle: 'Presidente de CyLicon Valley',
        speakerImage: 'semurat.jpg',
        when: '09:30-09:35'
    },
    'angelica': {
        name: '#palantismo: aprender haciendo',
        description: '',
        speaker: 'Angélica Lozano',
        speakerImage: 'angelica.png',
        when: '09:35-10:20'
    },
    'maria': {
        name: 'Inception: ¿perder el tiempo o invertirlo?',
        description: 'El principal propósito de una Inception es que todas las personas implicadas en un nuevo producto o proyecto se alineen sobre cuáles son los objetivos y qué significa aquello en lo que vamos a trabajar. Es llegar al entendimiento común de la idea desde el primer momento, y se puede hacer de muchas formas. Durante los últimos dos años he investigado y aprendido sobre Inception, y la he adaptado a las necesidades del momento, del equipo y del producto. Los resultados son diferentes, incluso con un mismo equipo. Porque para que sea un éxito, lo más importante son las personas que participan, y no siempre están alineadas o entienden lo que allí está sucediendo. En esta charla quiero compartir las experiencias de dos Inceptions hechas con el mismo equipo, para el mismo producto, pero en distintos momentos, con diferentes personas alrededor del equipo, y para alcanzar dos hitos distintos del producto. Una fue un éxito, la otra no.',
        speaker: 'María Berenguer',
        speakerImage: 'mariabeleguer.png',
        when: '10:20-10:45'
    },
    'arrola': {
        name: '"Hoy os voy a hablar con la sabiduría que me da el fracaso." - Robe Iniesta',
        description: '',
        speaker: 'Iñaki Arrola',
        speakerImage: 'inakyArrola.png',
        when: '10:45-11:30'
    },
    'jmnavarro': {
        name: 'Hacer datos no es lo mismo que hacer software ¿o sí?',
        description: 'Los desarrolladores de software hemos optimizado todo nuestro día a día alrededor de una idea: el código es el producto. Pero... ¿qué pasa cuando el producto son los datos? ¿tienen sentido las mismas buenas prácticas? ¿o hay que hacer una reinterpretación de todo lo que hemos aprendido en los últimos años? En este viaje, lleno de tropiezos, hemos descubierto que código y datos son distintos, aunque no tanto como pueden parecen a simple vista. Y que buenas prácticas de hace 40 años, aplicadas a otras industrias, ahora cobran más sentido que nunca en los proyectos de datos.',
        speaker: 'Jose Manuel Navarro',
        speakerImage: 'jm.png',
        when: '12:00:12:30'
    },
    'adavideo': {
        name: 'Cultura de las organizaciones: tendiendo puentes para construir un mundo mejor',
        description: '',
        speaker: 'Carmen Bermejo',
        speakerImage: 'carmenbermejo.png',
        when: '12:30:13:15'
    },
    'rachellondoner': {
        name: 'Cambio de rumbo: hoy líder de equipo, mañana CEO.',
        description: 'Diario de un viaje de cambio de rol en Solid GEAR de líder de equipo a CEO. Cómo he ido cambiando el chip y aprendiendo con el equipo, aprendiendo, a veces a costa de un prueba, error y recalcular. En los últimos 3 años Cómo cambiar el chip, lecciones aprendidas en el día a día',
        speaker: 'Raquel Pérez',
        speakerImage: 'raquel2.png',
        when: '13:15:13:45'
    },
    'ineshuertas': {
        name: 'El que toca se equivoca asi que equivocaros mucho',
        description: '"El que toca se equivoca, el que nunca se equivoca es porque nunca ha entrado en esta maquina"- Cuando trabajaba haciendo guardias IT era una frase muy comun, sobre todo cuando te llaman a las 3 am para resolver un problema de una implantación... , y es que cuanto más te equivocas más aprendes para los momentos importantes. Durante la charla contaré diferentes situaciones exitos y fracasos a lo largo de mi camino desde el campo de la tecnología al emprendimiento. Los exitos muchas veces brillan mas pero no sabemos todas las meteduras de pata que hay detras... Yo las repetiría una a una.',
        speaker: 'Inés Huertas',
        speakerImage: 'ineshuertas.png',
        when: '14:55:15:30'
    },
    'definitely': {
        name: 'Remote: cómo trabajar en pijama sin perder la camisa',
        description: 'Aciertos, fallos, errores comunes, errores poco comunes, e historias para no dormir de cómo Thinkful pasó en dos años de 20 empleados co-localizados en Nueva York a más de 200 en remoto por todo el mundo, de Madrid a Hawaii, sin quebrar en el intento.',
        speaker: 'Saul Diez Guerra',
        speakerImage: 'saul.png',
        when: '15:30:16:00'
    },
    'txarly': {
        name: 'Hazte donante. Cómo una empresa en las últimas dio vida a dos proyectos',
        description: '',
        speaker: 'Carlos Sánchez',
        speakerImage: 'txarly.png',
        when: '16:00:16:45'
    },
    'reinaldo': {
        name: 'Cosas que aprendes organizando comunidades',
        description: 'Busco explicar los aciertos, fallos, alegrías y desengaños que sufrimos los organizadores de comunidades y eventos. Mi intención es dar un paseo por diferentes momentos de lo que es un organizador. Esa persona que esta allí y sonríe pero que muchas veces no tiene que ser todo alegría. Espero poder explicar en 20 minutos los últimos 7 años organizando saraos.',
        speaker: 'Reinaldo Aguilera',
        speakerImage: 'reinaldo.png',
        when: '17:15:17:45'
    },
    'samlown': {
        name: 'De CTO a Nuevos Negocios',
        description: '',
        speaker: 'Samuel Lown',
        speakerImage: 'samlown.png',
        when: '17:45:18:30'
    },
    'catering': {
        name: 'Catering LechazoConf 2019',
        description: 'Calidad, cantidad...',
        when: '19:00'
    },
    'fiesta': {
        name: 'Fiesta LechazoConf 2019',
        description: 'Calidad, cantidad de comida, sitio',
        when: '22:00'
    },
    'lechazoconf2019': {
        name: 'Feedback general LechazoConf 2019',
        description: 'Compartenos tu opinión sobre la conferencia',
        when: '24:00'
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
