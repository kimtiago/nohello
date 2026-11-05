import type { LocaleDefinition } from "@/i18n/types";

// French sets ? ! : ; and « » apart with a non-breaking space, so they never wrap alone onto a new line.
export const fr: LocaleDefinition = {
    ogLocale: "fr_FR",
    fallbackName: "Jean Dupont",
    messages: (firstName) => ({
        title: "J'ai reçu ton message 👀",
        description: `${firstName} ici\u00a0! Je t'ai laissé un petit mot avant de te répondre. C'est rapide.`,

        online: "en ligne",
        today: "aujourd'hui",
        you: "Toi",
        typing: `${firstName} est en train d'écrire`,
        contactPhone: "06 39 98 00 00", // Reserved for fiction in France
        chat: "Envoyer un message",
        moreMessages: "Il y a d'autres messages",
        moreMessagesLabel: "Il y a d'autres messages\u00a0: descendre dans la page",

        headline: "S'il te plaît, ne m'envoie pas juste",
        quote: ["«\u00a0", "\u00a0»"],
        greetings: [
            "salut",
            "bonjour",
            "coucou",
            "bon matin\u00a0!",
            "hey",
            "t'es là\u00a0?",
            "saluuut",
            "👋",
            `salut ${firstName}`,
            "bonsoir",
            "yo",
            `${firstName}\u00a0?`,
            "cc",
            "ça va\u00a0?",
            "allô\u00a0?",
        ],
        voicemail:
            "Imagine laisser un message vocal qui dit seulement «\u00a0salut\u00a0» avant de raccrocher. La personne l'écoute et ne sait toujours pas ce que tu voulais. 🤷 Dans le chat, c'est pareil.",

        differenceTitle: "La différence",
        howSo: "comment ça\u00a0? 😅",
        twoWays: "Regarde\u00a0: la même question, posée de deux façons 👇",
        bad: {
            title: "Pas comme ça",
            summary: "11 minutes pour une question",
            hi: "salut",
            gapOne: "4 min plus tard",
            replyHi: "salut\u00a0! dis-moi 🙂",
            howAreYou: "ça va\u00a0?",
            gapTwo: "3 min plus tard",
            replyHowAreYou: "ça va, et toi\u00a0? 😅",
            ask: "tu peux me passer le contact de cet électricien\u00a0?",
            answer: "bien sûr",
        },
        good: {
            title: "Comme ça",
            summary: "1 minute, et personne n'a attendu",
            ask: `Salut ${firstName}, ça va\u00a0? Tu peux me passer le contact de l'électricien que tu as recommandé\u00a0? 🙏`,
            answer: "Salut\u00a0! Voici son contact 👍",
            thanks: "Merci\u00a0!",
        },

        whyTitle: "Pourquoi je demande ça",
        whatsTheProblem: "mais quel est le problème de dire bonjour d'abord\u00a0?",
        typingIsSlow:
            "Écrire est plus lent que parler. Après le «\u00a0salut\u00a0», je reste à regarder «\u00a0en train d'écrire…\u00a0» sans pouvoir avancer.",
        busy: "Et je suis peut-être au travail, au volant ou en famille. Un «\u00a0salut\u00a0» tout seul me fait ouvrir la conversation pour découvrir que je ne sais toujours pas de quoi il s'agit.",
        fullQuestion: "Avec la question complète, je réponds dès que je peux, même si tu es déjà parti. Personne n'attend personne.",
        isItRude: "mais ce n'est pas impoli comme ça\u00a0?",
        notRude:
            "Pas du tout\u00a0! Tu peux dire bonjour, demander comment je vais, envoyer un sticker. Mets juste tout avec la question dans le même message 😉",

        alsoTitle: "Ça vaut aussi pour",
        whatAbout: "et «\u00a0t'es là\u00a0?\u00a0», ça passe\u00a0?",
        alsoNo: "Non plus 😄 Pareil pour\u00a0:",
        alsoCounts: [
            "t'es là\u00a0?",
            "salut, ça va\u00a0?",
            "bonjour\u00a0!",
            "t'as une minute\u00a0?",
            "je peux te demander un truc\u00a0?",
            `${firstName}\u00a0?`,
            "hey",
            "coucou",
            "👋",
        ],

        formulaTitle: "La formule",
        howDoI: "alors je fais comment\u00a0?",
        oneMessage: "C'est un seul message, avec tout dedans\u00a0:",
        formula: [
            { label: "salutation", text: `Salut ${firstName}, ça va\u00a0?` },
            { label: "contexte", text: "J'ai vu que tu as recommandé un électricien." },
            { label: "question", text: "Tu peux me passer son contact\u00a0?" },
        ],
        anotherExample: "Un autre exemple, en un seul message\u00a0:",
        example: `Salut ${firstName}, ça va\u00a0? Je passe près de chez toi dimanche après-midi. Tu seras là\u00a0?`,
        justAsk: "Pose simplement la question.",
        answerFaster: "Je répondrai bien plus vite.",

        closing: "Ce n'est pas 100\u00a0% sérieux (mais un peu quand même 👀). Tu veux une page comme ça\u00a0?",
        codeLink: "Le code est ouvert",

        eggWord: "salut",
        eggMessage: "😅 Tu vois\u00a0? Juste «\u00a0salut\u00a0» ne me dit rien. Envoie la question\u00a0!",
    }),
};
