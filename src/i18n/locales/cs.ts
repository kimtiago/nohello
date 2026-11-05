import type { LocaleDefinition } from "@/i18n/types";

// Written so that nothing depends on whether the owner or the visitor is a man or a woman: Czech past tenses do.
export const cs: LocaleDefinition = {
    ogLocale: "cs_CZ",
    fallbackName: "Jan Novák",
    messages: (firstName) => ({
        title: "Tvoje zpráva dorazila 👀",
        description: `${firstName} tady! Než ti odpovím, nechávám ti krátký vzkaz. Zabere to chvilku.`,

        online: "online",
        today: "dnes",
        you: "Ty",
        typing: `${firstName} píše`,
        contactPhone: "777 000 000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Petr Svoboda",
        chat: "Napsat",
        moreMessages: "Další zprávy",
        moreMessagesLabel: "Další zprávy: posunout dolů",

        headline: "Prosím, neposílej mi jen",
        quote: ["„", "“"],
        greetings: [
            "ahoj",
            "čau",
            "nazdar",
            "dobré ráno!",
            "zdravím",
            "jsi tam?",
            "ahojky",
            "👋",
            `čau ${firstName}`,
            "dobré odpoledne",
            "čus",
            `${firstName}?`,
            "ahooj",
            "jak se máš?",
            "haló?",
        ],
        voicemail:
            "Představ si, že na hlasovou schránku nahraješ jen „ahoj“ a zavěsíš. Ten druhý si to poslechne a pořád neví, o co jde. 🤷 V chatu je to stejné.",

        differenceTitle: "Rozdíl",
        howSo: "jak to myslíš? 😅",
        twoWays: "Podívej: stejná otázka, položená dvěma způsoby 👇",
        bad: {
            title: "Takhle ne",
            summary: "11 minut kvůli jedné otázce",
            hi: "ahoj",
            gapOne: "o 4 min později",
            replyHi: "ahoj! povídej 🙂",
            howAreYou: "jak se máš?",
            gapTwo: "o 3 min později",
            replyHowAreYou: "dobře, a ty? 😅",
            ask: "pošleš mi kontakt na toho elektrikáře?",
            answer: "jasně",
        },
        good: {
            title: "Takhle ano",
            summary: "1 minuta a nikdo nemusel čekat",
            ask: `Ahoj ${firstName}, jak se máš? Pošleš mi kontakt na toho elektrikáře, o kterém byla řeč? 🙏`,
            answer: "Jasně! Tady je jeho kontakt 👍",
            thanks: "Díky!",
        },

        whyTitle: "Proč o to žádám",
        whatsTheProblem: "ale co je špatného na tom napsat nejdřív ahoj?",
        typingIsSlow: "Psaní je pomalejší než mluvení. Po tom „ahoj“ jen koukám na „píše…“ a nemůžu nic dělat.",
        busy: "A můžu zrovna pracovat, řídit nebo být s rodinou. Samotné „ahoj“ mě donutí otevřít chat, a stejně pořád nevím, o co jde.",
        fullQuestion: "S celou otázkou odpovím, jakmile to půjde, i když už nebudeš u telefonu. Nikdo na nikoho nečeká.",
        isItRude: "ale není to neslušné?",
        notRude: "Vůbec ne! Klidně pozdrav, zeptej se, jak se mám, pošli nálepku. Jen to všechno dej do jedné zprávy spolu s otázkou 😉",

        alsoTitle: "Platí to i pro",
        whatAbout: "a co „jsi tam?“",
        alsoNo: "To taky ne 😄 Totéž platí pro:",
        alsoCounts: [
            "jsi tam?",
            "ahoj, jak se máš?",
            "dobré ráno!",
            "máš chvilku?",
            "můžu se na něco zeptat?",
            `${firstName}?`,
            "čau",
            "hej",
            "👋",
        ],

        formulaTitle: "Vzorec",
        howDoI: "tak jak to mám udělat?",
        oneMessage: "Je to jedna zpráva, všechno dohromady:",
        formula: [
            { label: "pozdrav", text: `Ahoj ${firstName}, jak se máš?` },
            { label: "kontext", text: "Prý znáš dobrého elektrikáře." },
            { label: "otázka", text: "Pošleš mi na něj kontakt?" },
        ],
        anotherExample: "Další příklad, v jedné zprávě:",
        example: `Ahoj ${firstName}, jak se máš? V neděli odpoledne budu kousek od tebe. Budeš doma?`,
        justAsk: "Prostě se zeptej.",
        answerFaster: "Odpovím mnohem rychleji.",

        closing: "Tohle není 100% vážně (ale tak trochu jo 👀). Chceš taky takovou stránku?",
        codeLink: "Kód je otevřený",

        eggWord: "ahoj",
        eggMessage: "😅 Vidíš? Samotné „ahoj“ mi nic neřekne. Pošli otázku!",
    }),
};
