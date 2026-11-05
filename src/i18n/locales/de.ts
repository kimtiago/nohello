import type { LocaleDefinition } from "@/i18n/types";

export const de: LocaleDefinition = {
    ogLocale: "de_DE",
    fallbackName: "Max Mustermann",
    messages: (firstName) => ({
        title: "Deine Nachricht ist da 👀",
        description: `${firstName} hier! Ich habe dir eine kurze Notiz hinterlassen, bevor ich antworte. Geht ganz schnell.`,

        online: "online",
        today: "heute",
        you: "Du",
        typing: `${firstName} schreibt`,
        contactPhone: "0171 3920000", // Reserved for fiction in Germany
        chat: "Nachricht senden",
        moreMessages: "Da kommt noch mehr",
        moreMessagesLabel: "Da kommt noch mehr: nach unten scrollen",

        headline: "Bitte schick mir nicht nur",
        quote: ["„", "“"],
        greetings: [
            "hallo",
            "hi",
            "hey",
            "guten Morgen!",
            "moin",
            "bist du da?",
            "hiii",
            "👋",
            `hey ${firstName}`,
            "guten Tag",
            "servus",
            `${firstName}?`,
            "na?",
            "wie geht's?",
            "hallo?",
        ],
        voicemail:
            "Stell dir vor, du sprichst auf die Mailbox nur „hallo“ und legst auf. Die andere Person hört es ab und weiß immer noch nicht, was du wolltest. 🤷 Im Chat ist es genauso.",

        differenceTitle: "Der Unterschied",
        howSo: "wie meinst du das? 😅",
        twoWays: "Schau mal: dieselbe Frage, auf zwei Arten gestellt 👇",
        bad: {
            title: "So nicht",
            summary: "11 Minuten für eine Frage",
            hi: "hallo",
            gapOne: "4 Min. später",
            replyHi: "hallo! was gibt's? 🙂",
            howAreYou: "wie geht's?",
            gapTwo: "3 Min. später",
            replyHowAreYou: "gut, und dir? 😅",
            ask: "kannst du mir den Kontakt von dem Elektriker schicken?",
            answer: "klar",
        },
        good: {
            title: "So schon",
            summary: "1 Minute, und niemand musste warten",
            ask: `Hallo ${firstName}, wie geht's? Kannst du mir den Kontakt von dem Elektriker schicken, den du empfohlen hast? 🙏`,
            answer: "Hey! Hier ist sein Kontakt 👍",
            thanks: "Danke!",
        },

        whyTitle: "Warum ich darum bitte",
        whatsTheProblem: "aber was ist so schlimm daran, erst hallo zu sagen?",
        typingIsSlow: "Tippen dauert länger als Sprechen. Nach dem „hallo“ schaue ich auf „schreibt…“ und kann nichts vorbereiten.",
        busy: "Und vielleicht arbeite ich gerade, fahre Auto oder bin bei der Familie. Ein einzelnes „hallo“ lässt mich den Chat öffnen, nur um festzustellen, dass ich immer noch nicht weiß, worum es geht.",
        fullQuestion: "Mit der ganzen Frage antworte ich, sobald ich kann, auch wenn du schon weg bist. Niemand wartet auf niemanden.",
        isItRude: "aber wirkt das nicht unhöflich?",
        notRude:
            "Überhaupt nicht! Du kannst grüßen, fragen, wie es mir geht, einen Sticker schicken. Pack einfach alles mit der Frage in dieselbe Nachricht 😉",

        alsoTitle: "Das gilt auch für",
        whatAbout: "und „bist du da?“, geht das?",
        alsoNo: "Auch nicht 😄 Das gilt auch für:",
        alsoCounts: [
            "bist du da?",
            "hallo, wie geht's?",
            "guten Morgen!",
            "hast du kurz Zeit?",
            "kann ich dich was fragen?",
            `${firstName}?`,
            "moin",
            "hey",
            "👋",
        ],

        formulaTitle: "Die Formel",
        howDoI: "und wie mache ich das?",
        oneMessage: "Es ist eine einzige Nachricht, alles zusammen:",
        formula: [
            { label: "Begrüßung", text: `Hallo ${firstName}, wie geht's?` },
            { label: "Kontext", text: "Ich habe gesehen, dass du einen Elektriker empfohlen hast." },
            { label: "Frage", text: "Kannst du mir seinen Kontakt schicken?" },
        ],
        anotherExample: "Noch ein Beispiel, in einer Nachricht:",
        example: `Hallo ${firstName}, wie geht's? Ich komme am Sonntagnachmittag bei dir in der Nähe vorbei. Bist du da?`,
        justAsk: "Stell einfach die Frage.",
        answerFaster: "Ich antworte viel schneller.",

        closing: "Das ist nicht 100 % ernst gemeint (aber irgendwie schon 👀). Du willst auch so eine Seite?",
        codeLink: "Der Code ist offen",

        eggWord: "hallo",
        eggMessage: "😅 Siehst du? Nur „hallo“ sagt mir gar nichts. Schick die Frage!",
    }),
};
