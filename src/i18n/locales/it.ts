import type { LocaleDefinition } from "@/i18n/types";

export const it: LocaleDefinition = {
    ogLocale: "it_IT",
    fallbackName: "Mario Rossi",
    messages: (firstName) => ({
        title: "Ho ricevuto il tuo messaggio 👀",
        description: `${firstName} qui! Ti ho lasciato un messaggino prima di risponderti. Faccio presto.`,

        online: "online",
        today: "oggi",
        you: "Tu",
        typing: `${firstName} sta scrivendo`,
        contactPhone: "333 000 0000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Luca Bianchi",
        chat: "Invia messaggio",
        moreMessages: "Ci sono altri messaggi",
        moreMessagesLabel: "Ci sono altri messaggi: scorri in basso",

        headline: "Per favore, non mandarmi solo",
        quote: ["“", "”"],
        greetings: [
            "ciao",
            "salve",
            "ehi",
            "buongiorno!",
            "oh",
            "ci sei?",
            "ciaooo",
            "👋",
            `ciao ${firstName}`,
            "buon pomeriggio",
            "bella",
            `${firstName}?`,
            "eilà",
            "come stai?",
            "pronto?",
        ],
        voicemail:
            "Immagina di lasciare un messaggio in segreteria dicendo solo “ciao” e riattaccare. L'altra persona lo ascolta e continua a non sapere cosa volevi. 🤷 In chat è la stessa cosa.",

        differenceTitle: "La differenza",
        howSo: "in che senso? 😅",
        twoWays: "Guarda: la stessa domanda, fatta in due modi 👇",
        bad: {
            title: "Così no",
            summary: "11 minuti per una domanda",
            hi: "ciao",
            gapOne: "4 min dopo",
            replyHi: "ciao! dimmi 🙂",
            howAreYou: "come stai?",
            gapTwo: "3 min dopo",
            replyHowAreYou: "bene, e tu? 😅",
            ask: "mi passi il contatto di quell'elettricista?",
            answer: "certo",
        },
        good: {
            title: "Così sì",
            summary: "1 minuto, e nessuno è rimasto ad aspettare",
            ask: `Ciao ${firstName}, come stai? Mi passi il contatto di quell'elettricista che hai consigliato? 🙏`,
            answer: "Ciao! Ecco il suo contatto 👍",
            thanks: "Grazie!",
        },

        whyTitle: "Perché te lo chiedo",
        whatsTheProblem: "ma che problema c'è a salutare prima?",
        typingIsSlow: "Scrivere è più lento che parlare. Dopo il “ciao”, resto a guardare “sta scrivendo…” senza poter fare nulla.",
        busy: "E magari sto lavorando, guidando o sono con la famiglia. Un “ciao” da solo mi fa aprire la chat solo per scoprire che ancora non so di cosa si tratta.",
        fullQuestion: "Con la domanda completa, rispondo appena posso, anche se sei già andato via. Nessuno aspetta nessuno.",
        isItRude: "ma così non sembra maleducato?",
        notRude:
            "Macché! Puoi salutare, chiedere come sto, mandare uno sticker. Metti solo tutto insieme alla domanda nello stesso messaggio 😉",

        alsoTitle: "Vale anche per",
        whatAbout: "e “ci sei?”, si può?",
        alsoNo: "Neanche 😄 Lo stesso vale per:",
        alsoCounts: [
            "ci sei?",
            "ciao, come stai?",
            "buongiorno!",
            "hai un minuto?",
            "posso chiederti una cosa?",
            `${firstName}?`,
            "ehi",
            "oh",
            "👋",
        ],

        formulaTitle: "La formula",
        howDoI: "e allora come faccio?",
        oneMessage: "È un solo messaggio, con tutto insieme:",
        formula: [
            { label: "saluto", text: `Ciao ${firstName}, come stai?` },
            { label: "contesto", text: "Ho visto che hai consigliato un elettricista." },
            { label: "domanda", text: "Mi passi il suo contatto?" },
        ],
        anotherExample: "Un altro esempio, in un solo messaggio:",
        example: `Ciao ${firstName}, come stai? Domenica pomeriggio passo vicino a casa tua. Ci sarai?`,
        justAsk: "Fai direttamente la domanda.",
        answerFaster: "Risponderò molto più in fretta.",

        closing: "Non è serio al 100% (ma un po' sì 👀). Vuoi una pagina così?",
        codeLink: "Il codice è aperto",

        eggWord: "ciao",
        eggMessage: "😅 Visto? Solo “ciao” non mi dice niente. Manda la domanda!",
    }),
};
