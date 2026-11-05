import type { LocaleDefinition } from "@/i18n/types";

export const ptBR: LocaleDefinition = {
    ogLocale: "pt_BR",
    fallbackName: "Fulano de Tal",
    messages: (firstName) => ({
        title: "Recebi sua mensagem 👀",
        description: `${firstName} aqui! Deixei um recadinho antes de te responder. É rapidinho.`,

        online: "online",
        today: "hoje",
        you: "Você",
        typing: `${firstName} está digitando`,
        contactPhone: "(11) 90000-0000", // No range is reserved for fiction here: zeros make it look obviously fake
        chat: "Conversar",
        moreMessages: "Tem mais mensagens",
        moreMessagesLabel: "Tem mais mensagens: descer a página",

        headline: "Por favor, não me mande só",
        quote: ["“", "”"],
        greetings: [
            "oi",
            "olá",
            "e aí?",
            "bom dia!",
            "opa",
            "tá aí?",
            "oiii",
            "👋",
            `fala, ${firstName}`,
            "boa tarde",
            "salve",
            `${firstName}?`,
            "eae",
            "tudo bem?",
            "alô?",
        ],
        voicemail:
            "Imagine deixar um recado na caixa postal dizendo só “oi” e desligar. A pessoa escuta e continua sem saber o que você queria. 🤷 Aqui no chat é a mesma coisa.",

        differenceTitle: "A diferença",
        howSo: "como assim? 😅",
        twoWays: "Olha só: a mesma pergunta, feita de dois jeitos 👇",
        bad: {
            title: "Assim não",
            summary: "11 minutos para uma pergunta",
            hi: "oi",
            gapOne: "4 min depois",
            replyHi: "oi! pode falar 🙂",
            howAreYou: "tudo bem?",
            gapTwo: "3 min depois",
            replyHowAreYou: "tudo, e aí? 😅",
            ask: "me passa o contato daquele eletricista?",
            answer: "passo sim",
        },
        good: {
            title: "Assim sim",
            summary: "1 minuto, e ninguém ficou esperando",
            ask: `Oi ${firstName}, tudo bem? Me passa o contato daquele eletricista que você indicou? 🙏`,
            answer: "Opa! Segue o contato dele 👍",
            thanks: "Valeu!",
        },

        whyTitle: "Por que eu peço isso",
        whatsTheProblem: "mas qual o problema de dar um oi antes?",
        typingIsSlow: "Digitar é mais lento que falar. Depois do “oi”, eu fico olhando o “digitando…” sem poder adiantar nada.",
        busy: "E eu posso estar trabalhando, dirigindo ou com a família. Um “oi” solto me faz abrir a conversa só para descobrir que ainda não sei do que se trata.",
        fullQuestion:
            "Com a pergunta completa, eu respondo assim que puder, mesmo que você já tenha saído. Ninguém fica esperando ninguém.",
        isItRude: "mas assim não parece falta de educação?",
        notRude:
            "Que nada! Pode cumprimentar, perguntar como eu estou, mandar figurinha. Só junta tudo com a pergunta na mesma mensagem 😉",

        alsoTitle: "Também vale para",
        whatAbout: "e “tá aí?”, pode?",
        alsoNo: "Também não 😄 Vale o mesmo para:",
        alsoCounts: [
            "tá aí?",
            "oi, tudo bem?",
            "bom dia!",
            "tem um minutinho?",
            "posso te perguntar uma coisa?",
            `${firstName}?`,
            "opa",
            "ei",
            "👋",
        ],

        formulaTitle: "A fórmula",
        howDoI: "então como eu faço?",
        oneMessage: "É uma mensagem só, com tudo junto:",
        formula: [
            { label: "cumprimento", text: `Oi ${firstName}, tudo bem?` },
            { label: "contexto", text: "Vi que você indicou um eletricista." },
            { label: "pergunta", text: "Me passa o contato dele?" },
        ],
        anotherExample: "Outro exemplo, numa mensagem só:",
        example: `Oi ${firstName}, tudo bem? Vou passar perto da sua casa no domingo à tarde. Você vai estar por aí?`,
        justAsk: "Só faça a pergunta.",
        answerFaster: "Eu respondo bem mais rápido.",

        closing: "Isso não é 100% sério (mas meio que é 👀). Quer uma página dessa?",
        codeLink: "O código é aberto",

        eggWord: "oi",
        eggMessage: "😅 Viu? Só “oi” não me diz nada. Manda a pergunta!",
    }),
};
