
export type Content = {
    landing: {
        bride: { name: string, surname: string, },
        groom: { name: string, surname: string, },
        date: { month: string, day: string, dayName: string, year: string, time: string },
        invitationMessage: string,
        location: string,
    }
}

const es: Content = {
    landing: {
        bride: { name: 'Haidy', surname: 'Rivas Rauch' },
        groom: { name: 'Francisco', surname: 'Arámburo Torres' },
        date: { month: 'Abril', day: '06', dayName: 'Sabado', year: '2024', time: '15:00' },
        invitationMessage: 'Te invitamos a celebrar nuestra boda',
        location: 'Hacienda Zapotitlan, Puebla',
    }
}

const en: Content = {
    landing: {
        ...es.landing,
        bride: es.landing.bride,
        groom: es.landing.groom,
        date: { ...es.landing.date, month: 'April', dayName: 'Saturday' },
        invitationMessage: 'We invite you to celebrate our wedding',
    }
}

export default { es, en }