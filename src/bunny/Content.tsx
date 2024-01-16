
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
        whiteNote: string,
        level: string,
        more: string,
    },
    accommodation: {
        title: string,
        message: string,
    },
    gifts: {
        title: string,
        message: string,
    },
    whatsapp: {
        title: string,
        message: string,
        message2: string,
        button: string,
    },
    rsvp: {
        title: string,
        message: string,
        form: {
            fullname: string,
            email: string,
            attendingYes: string,
            attendingNo: string,
            attendingNumber: string,
            submit: string,
            success: string,
            please: string,
            and: string,
            errorBadName: string,
            errorBadEmail: string,
            errorBadNumber: string,
            errorEmailUsed: string,
            errorDb: string,
        },
    },
    footer: {
        message: string,
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
        title: 'Código de Vestimenta',
        subtitle: 'Formal Cottage Core / Fantasia',
        message: 'Sabemos que es un código de vestimenta poco común, pero queremos que se sientan libres de vestir como más les guste, siempre y cuando sea formal. Aquí les dejamos algunas ideas por nivel, de fácil de conseguir a más dificil:',
        whiteNote: 'Por cortesía a los novios se pide que no se use vestimenta totalmente blanca, pero igual esperamos encuentren inspiración en los vestidos blancos que encontrarán en las referencias.',
        level: 'Nivel',
        more: 'Ver mas...',
    },
    accommodation: {
        title: 'Hospedaje',
        message: 'Estamos trabajando en encontrar opciones de hospedaje accesibles, especialmente para aquellos que vienen de estados o paises diferentes, pronto tendremos más información. Si tienes alguna duda, necesidad o problema, por favor contáctanos lo antes posible para resolverlo y asegurar de que puedan disfrutar del evento lo más posible con nosotros.',
    },
    gifts: {
        title: 'Mesa de Regalos',
        message: 'No queremos que se sientan obligados a regalarnos algo, pero si quieren hacerlo, les dejamos una mesa de regalos de Amazon, información de depósito, o sientanse libres de preguntarnos qué cosas nos gustan!',
    },
    whatsapp: {
        title: 'WhatsApp',
        message: 'Para mantenerlos al tanto de cualquier cambio, y principalmente para mantenerlos al tanto acerca del hospedaje y logística de viaje, les dejamos el link a una comunidad de WhatsApp.',
        message2: 'Si tienen alguna restricción alimenticia, por favor avisenos lo antes posible para poder tomarlo en cuenta.',
        button: 'Unirse',
    },
    rsvp: {
        title: 'Asistencia',
        message: 'Por favor, confirma antes del 1 Marzo 2024, y registra cada invitado individualmente.',
        form: {
            fullname: 'Nombre completo',
            email: 'Correo Electrónico',
            attendingYes: 'Asistiré',
            attendingNo: 'No asistiré',
            attendingNumber: 'No. Teléfonico',
            submit: 'Enviar',
            success: 'Gracias por confirmar tu asistencia!',
            please: 'Por favor ingresa',
            and: 'y',
            errorBadName: 'un nombre',
            errorBadEmail: 'un correo válido',
            errorBadNumber: 'un número válido',
            errorEmailUsed: 'un correo que no haya sido usado antes',
            errorDb: 'Hubo un error al enviar tu confirmación, por favor contáctanos o intenta de nuevo.',
        },
    },
    footer: {
        message: 'Esperamos verlos, los amamos!',
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
        whiteNote: 'As a courtesy to the bride and groom, we ask that you do not wear all white, but we still hope you find inspiration in the white dresses you will find in the references.',
        level: 'Level',
        more: 'See more...',
    },
    accommodation: {
        title: 'Accomodation',
        message: 'We are working on finding accessible accommodation options, especially for those from other states or countries; we will have more information soon. If you have any questions, necessities or problems, please contact us as quickly as possible to address them and ensure you can make the most of the event with us.',
    },
    gifts: {
        title: 'Gifts',
        message: 'We do not want you to feel obligated to give us anything, but if you want to, we have an Amazon gift list, information for bank transfers, or feel free to ask us what we like!',
    },
    whatsapp: {
        title: 'WhatsApp',
        message: 'To keep you updated of any changes, and mainly to keep you updated about accommodation and travel logistics, please join the WhatsApp community.',
        message2: 'If you have any dietary restrictions, please let us know as soon as possible so we can take it into account.',
        button: 'Join',
    },
    rsvp: {
        title: 'RSVP',
        message: 'Please confirm before March 1st 2024, and register each guest individually.',
        form: {
            fullname: 'Full name',
            email: 'Email',
            attendingYes: 'I will attend',
            attendingNo: 'I will not attend',
            attendingNumber: 'Phone Number',
            submit: 'Submit',
            success: 'Thank you for confirming your attendance!',
            please: 'Please enter',
            and: 'and',
            errorBadName: 'a name',
            errorBadEmail: 'a valid email',
            errorBadNumber: 'a valid number',
            errorEmailUsed: 'an email that has not been used before',
            errorDb: 'There was an error sending your confirmation, please contact us or try again.',
        },
    },
    footer: {
        message: 'We hope to see you, we love you!',
    },
}

const content = { es, en }

export default content
