import type { LocaleDefinition } from "@/i18n/types";

export const es: LocaleDefinition = {
    ogLocale: "es_ES",
    fallbackName: "Fulano de Tal",
    messages: (firstName) => ({
        title: "Recibí tu mensaje 👀",
        description: `¡${firstName} por aquí! Te dejé un recadito antes de responderte. Es rapidito.`,

        online: "en línea",
        today: "hoy",
        you: "Tú",
        typing: `${firstName} está escribiendo`,
        contactPhone: "600 000 000", // No range is reserved for fiction here: zeros make it look obviously fake
        chat: "Enviar mensaje",
        moreMessages: "Hay más mensajes",
        moreMessagesLabel: "Hay más mensajes: bajar en la página",

        headline: "Por favor, no me envíes solo",
        quote: ["“", "”"],
        greetings: [
            "hola",
            "buenas",
            "¿qué tal?",
            "¡buenos días!",
            "ey",
            "¿estás?",
            "holaaa",
            "👋",
            `hola, ${firstName}`,
            "buenas tardes",
            "qué onda",
            `¿${firstName}?`,
            "oye",
            "¿cómo estás?",
            "¿hola?",
        ],
        voicemail:
            "Imagina dejar un mensaje en el buzón de voz diciendo solo “hola” y colgar. La otra persona lo escucha y sigue sin saber qué querías. 🤷 En el chat es lo mismo.",

        differenceTitle: "La diferencia",
        howSo: "¿cómo así? 😅",
        twoWays: "Mira: la misma pregunta, hecha de dos maneras 👇",
        bad: {
            title: "Así no",
            summary: "11 minutos para una pregunta",
            hi: "hola",
            gapOne: "4 min después",
            replyHi: "¡hola! dime 🙂",
            howAreYou: "¿cómo estás?",
            gapTwo: "3 min después",
            replyHowAreYou: "bien, ¿y tú? 😅",
            ask: "¿me pasas el contacto de aquel electricista?",
            answer: "claro",
        },
        good: {
            title: "Así sí",
            summary: "1 minuto, y nadie se quedó esperando",
            ask: `Hola ${firstName}, ¿cómo estás? ¿Me pasas el contacto de aquel electricista que recomendaste? 🙏`,
            answer: "¡Hola! Aquí tienes su contacto 👍",
            thanks: "¡Gracias!",
        },

        whyTitle: "Por qué lo pido",
        whatsTheProblem: "¿pero qué tiene de malo saludar primero?",
        typingIsSlow: "Escribir es más lento que hablar. Después del “hola”, me quedo mirando el “escribiendo…” sin poder adelantar nada.",
        busy: "Y puedo estar trabajando, conduciendo o con mi familia. Un “hola” suelto me hace abrir el chat solo para descubrir que sigo sin saber de qué se trata.",
        fullQuestion: "Con la pregunta completa, respondo en cuanto pueda, aunque ya te hayas ido. Nadie se queda esperando a nadie.",
        isItRude: "¿pero así no parece de mala educación?",
        notRude:
            "¡Para nada! Puedes saludar, preguntar cómo estoy, enviar un sticker. Solo junta todo con la pregunta en el mismo mensaje 😉",

        alsoTitle: "También vale para",
        whatAbout: "¿y “estás?”, se puede?",
        alsoNo: "Tampoco 😄 Lo mismo vale para:",
        alsoCounts: [
            "¿estás?",
            "hola, ¿cómo estás?",
            "¡buenos días!",
            "¿tienes un minuto?",
            "¿te puedo preguntar algo?",
            `¿${firstName}?`,
            "ey",
            "oye",
            "👋",
        ],

        formulaTitle: "La fórmula",
        howDoI: "¿entonces cómo lo hago?",
        oneMessage: "Es un solo mensaje, con todo junto:",
        formula: [
            { label: "saludo", text: `Hola ${firstName}, ¿cómo estás?` },
            { label: "contexto", text: "Vi que recomendaste a un electricista." },
            { label: "pregunta", text: "¿Me pasas su contacto?" },
        ],
        anotherExample: "Otro ejemplo, en un solo mensaje:",
        example: `Hola ${firstName}, ¿cómo estás? Voy a pasar cerca de tu casa el domingo por la tarde. ¿Vas a estar por ahí?`,
        justAsk: "Solo haz la pregunta.",
        answerFaster: "Responderé mucho más rápido.",

        closing: "Esto no es 100% en serio (pero un poco sí 👀). ¿Quieres una página así?",
        codeLink: "El código es abierto",

        eggWord: "hola",
        eggMessage: "😅 ¿Ves? Solo “hola” no me dice nada. ¡Envía la pregunta!",
    }),
};
