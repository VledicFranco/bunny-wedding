
export type Content = {
    lang: 'es' | 'en',
    landing: {
        bride: { name: string, surname: string, },
        groom: { name: string, surname: string, },
        date: { month: string, day: string, dayName: string, year: string, time: string },
        message: string,
        location: string,
    },
    dressCode: {
        title: string,
        subtitle: string,
        message: string,
        level: string,
        more: string,
    },
}

const es: Content = {
    lang: 'es',
    landing: {
        bride: { name: 'Haidy', surname: 'Rivas Rauch' },
        groom: { name: 'Francisco', surname: 'Arámburo Torres' },
        date: { month: 'Abril', day: '06', dayName: 'Sabado', year: '2024', time: '15:00' },
        message: 'Te invitamos a celebrar nuestra boda',
        location: 'Hacienda Zapotitlan, Puebla',
    },
    dressCode: {
        title: 'Codigo de Vestimenta',
        subtitle: 'Formal Cottage Core / Fantasia',
        message: 'Sabemos que es un codigo de vestimenta poco comun, pero queremos que se sientan libres de vestir como mas les guste, siempre y cuando sea formal. Aqui les dejamos algunas ideas por nivel, de fácil de conseguir a más dificil:',
        level: 'Nivel',
        more: 'Ver mas...',
    },
}

const en: Content = {
    lang: 'en',
    landing: {
        ...es.landing,
        bride: es.landing.bride,
        groom: es.landing.groom,
        date: { ...es.landing.date, month: 'April', dayName: 'Saturday' },
        message: 'We invite you to celebrate our wedding',
    },
    dressCode: {
        title: 'Dress Code',
        subtitle: 'Formal Cottage Core / Fae Fantasy',
        message: 'We know this is an unusual dress code, but we want you to feel free to dress however you like, as long as it is formal. Here are some ideas by level, from easiest to get to more difficult:',
        level: 'Level',
        more: 'See more...',
    },
}

export default { es, en }