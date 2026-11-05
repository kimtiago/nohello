import type { LocaleDefinition } from "@/i18n/types";

// Portuguese as written in Portugal (pt-PT, and the default for other countries but Brazil)
export const pt: LocaleDefinition = {
    ogLocale: "pt_PT",
    fallbackName: "Fulano de Tal",
    messages: (firstName) => ({
        title: "Recebi a tua mensagem 👀",
        description: `${firstName} aqui! Deixei-te um recado antes de responder. É rápido.`,

        online: "online",
        today: "hoje",
        you: "Tu",
        typing: `${firstName} está a escrever`,
        contactPhone: "912 000 000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "João Silva",
        chat: "Mensagem",
        moreMessages: "Há mais mensagens",
        moreMessagesLabel: "Há mais mensagens: deslizar para baixo",

        headline: "Por favor, não me mandes só",
        quote: ["«", "»"],
        greetings: [
            "olá",
            "oi",
            "boas",
            "bom dia!",
            "então?",
            "estás aí?",
            "olááá",
            "👋",
            `olá ${firstName}`,
            "boa tarde",
            "ei",
            `${firstName}?`,
            "viva",
            "tudo bem?",
            "está?",
        ],
        voicemail:
            "Imagina deixar uma mensagem no correio de voz só a dizer «olá» e desligar. A outra pessoa ouve e continua sem saber o que querias. 🤷 No chat é a mesma coisa.",

        differenceTitle: "A diferença",
        howSo: "como assim? 😅",
        twoWays: "Repara: a mesma pergunta, feita de duas maneiras 👇",
        bad: {
            title: "Assim não",
            summary: "11 minutos para uma pergunta",
            hi: "olá",
            gapOne: "4 min depois",
            replyHi: "olá! diz 🙂",
            howAreYou: "tudo bem?",
            gapTwo: "3 min depois",
            replyHowAreYou: "tudo, e contigo? 😅",
            ask: "podes mandar-me o contacto daquele eletricista?",
            answer: "claro",
        },
        good: {
            title: "Assim sim",
            summary: "1 minuto, e ninguém ficou à espera",
            ask: `Olá ${firstName}, tudo bem? Podes mandar-me o contacto daquele eletricista que recomendaste? 🙏`,
            answer: "Claro! Aqui está o contacto dele 👍",
            thanks: "Fixe! 🙏",
        },

        whyTitle: "Porque é que peço isto",
        whatsTheProblem: "mas qual é o mal de dizer olá primeiro?",
        typingIsSlow: "Escrever é mais lento do que falar. Depois do «olá», fico a olhar para o «a escrever…» sem poder fazer nada.",
        busy: "E posso estar a trabalhar, a conduzir ou com a família. Um «olá» solto obriga-me a abrir a conversa só para descobrir que continuo sem saber do que se trata.",
        fullQuestion: "Com a pergunta completa, respondo assim que puder, mesmo que já tenhas saído. Ninguém fica à espera de ninguém.",
        isItRude: "mas assim não parece falta de educação?",
        notRude:
            "Nada disso! Podes cumprimentar, perguntar como estou, mandar um sticker. Só junta tudo com a pergunta na mesma mensagem 😉",

        alsoTitle: "Também vale para",
        whatAbout: "e «estás aí?», pode ser?",
        alsoNo: "Também não 😄 O mesmo vale para:",
        alsoCounts: [
            "estás aí?",
            "olá, tudo bem?",
            "bom dia!",
            "tens um minuto?",
            "posso perguntar-te uma coisa?",
            `${firstName}?`,
            "então?",
            "ei",
            "👋",
        ],

        formulaTitle: "A fórmula",
        howDoI: "então como é que faço?",
        oneMessage: "É uma mensagem só, com tudo junto:",
        formula: [
            { label: "cumprimento", text: `Olá ${firstName}, tudo bem?` },
            { label: "contexto", text: "Vi que recomendaste um eletricista." },
            { label: "pergunta", text: "Podes mandar-me o contacto dele?" },
        ],
        anotherExample: "Outro exemplo, numa mensagem só:",
        example: `Olá ${firstName}, tudo bem? Vou passar perto da tua casa no domingo à tarde. Vais estar por aí?`,
        justAsk: "Faz só a pergunta.",
        answerFaster: "Eu respondo muito mais depressa.",

        closing: "Isto não é 100% a sério (mas é um bocadinho 👀). Queres uma página destas?",
        codeLink: "O código é aberto",

        eggWord: "oi",
        eggMessage: "😅 Vês? Só «oi» não me diz nada. Manda a pergunta!",
    }),
};
