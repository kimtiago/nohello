import type { LocaleDefinition } from "@/i18n/types";

// Written so that nothing depends on whether the owner or the visitor is a man or a woman: Polish past tenses do.
export const pl: LocaleDefinition = {
    ogLocale: "pl_PL",
    fallbackName: "Jan Kowalski",
    messages: (firstName) => ({
        title: "Twoja wiadomość dotarła 👀",
        description: `Tu ${firstName}! Zanim odpiszę, zostawiam ci krótką notkę. To zajmie chwilkę.`,

        online: "online",
        today: "dzisiaj",
        you: "Ty",
        typing: `${firstName} pisze`,
        contactPhone: "500 000 000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Piotr Nowak",
        chat: "Napisz",
        moreMessages: "Więcej wiadomości",
        moreMessagesLabel: "Więcej wiadomości: przewiń w dół",

        headline: "Proszę, nie pisz mi tylko",
        quote: ["„", "”"],
        greetings: [
            "cześć",
            "hej",
            "siema",
            "dzień dobry!",
            "elo",
            "jesteś?",
            "heeej",
            "👋",
            `hej ${firstName}`,
            "witam",
            "hejka",
            `${firstName}?`,
            "czeeeść",
            "co tam?",
            "halo?",
        ],
        voicemail:
            "Wyobraź sobie, że nagrywasz na pocztę głosową samo „cześć” i się rozłączasz. Druga osoba odsłuchuje i dalej nie wie, o co chodzi. 🤷 Na czacie jest tak samo.",

        differenceTitle: "Różnica",
        howSo: "w sensie? 😅",
        twoWays: "Zobacz: to samo pytanie, zadane na dwa sposoby 👇",
        bad: {
            title: "Tak nie",
            summary: "11 minut na jedno pytanie",
            hi: "cześć",
            gapOne: "4 min później",
            replyHi: "cześć! co tam? 🙂",
            howAreYou: "jak leci?",
            gapTwo: "3 min później",
            replyHowAreYou: "dobrze, a u ciebie? 😅",
            ask: "podeślesz mi kontakt do tego elektryka?",
            answer: "jasne",
        },
        good: {
            title: "Tak tak",
            summary: "1 minuta i nikt nie czekał",
            ask: `Cześć ${firstName}, jak leci? Podeślesz mi kontakt do tego elektryka, o którym była mowa? 🙏`,
            answer: "Jasne! Oto jego kontakt 👍",
            thanks: "Dzięki!",
        },

        whyTitle: "Dlaczego o to proszę",
        whatsTheProblem: "ale co złego w tym, żeby najpierw się przywitać?",
        typingIsSlow: "Pisanie jest wolniejsze niż mówienie. Po tym „cześć” patrzę tylko na „pisze…” i nic nie mogę zrobić.",
        busy: "A mogę akurat pracować, prowadzić albo być z rodziną. Samo „cześć” sprawia, że otwieram czat, a i tak dalej nie wiem, o co chodzi.",
        fullQuestion:
            "Z pełnym pytaniem odpiszę, jak tylko się da, nawet jeśli nie będzie cię już przy telefonie. Nikt na nikogo nie czeka.",
        isItRude: "ale czy to nie jest niegrzeczne?",
        notRude:
            "Ależ skąd! Przywitaj się, zapytaj, co u mnie, wyślij naklejkę. Po prostu wrzuć to wszystko razem z pytaniem do jednej wiadomości 😉",

        alsoTitle: "Dotyczy to też",
        whatAbout: "a „jesteś?”",
        alsoNo: "Też nie 😄 To samo dotyczy:",
        alsoCounts: [
            "jesteś?",
            "cześć, jak leci?",
            "dzień dobry!",
            "masz chwilę?",
            "mogę o coś zapytać?",
            `${firstName}?`,
            "siema",
            "hej",
            "👋",
        ],

        formulaTitle: "Formuła",
        howDoI: "to jak mam to zrobić?",
        oneMessage: "To jedna wiadomość, wszystko razem:",
        formula: [
            { label: "powitanie", text: `Cześć ${firstName}, jak leci?` },
            { label: "kontekst", text: "Podobno znasz dobrego elektryka." },
            { label: "pytanie", text: "Podeślesz mi do niego kontakt?" },
        ],
        anotherExample: "Inny przykład, w jednej wiadomości:",
        example: `Cześć ${firstName}, jak leci? W niedzielę po południu będę niedaleko ciebie. Będziesz w domu?`,
        justAsk: "Po prostu zadaj pytanie.",
        answerFaster: "Odpiszę dużo szybciej.",

        closing: "To nie jest w 100% na serio (ale trochę jest 👀). Chcesz taką stronę?",
        codeLink: "Kod jest otwarty",

        eggWord: "hej",
        eggMessage: "😅 Widzisz? Samo „hej” nic mi nie mówi. Napisz pytanie!",
    }),
};
