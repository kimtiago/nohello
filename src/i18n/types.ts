// Everything on the page that depends on the language. firstName comes in so each language can place the name in its own way.
export type LocaleDefinition = {
    ogLocale: string; // Open Graph format, e.g. pt_BR
    fallbackName: string; // used when NEXT_PUBLIC_OWNER_NAME is empty: a generic full name, natural in this language
    rtl?: true; // written right to left: the page mirrors
    givenNameLast?: true; // the name people are called by is the last word of the full name, as in Vietnamese
    messages: (firstName: string) => Messages;
};

export type Messages = {
    title: string;
    description: string;

    online: string;
    today: string;
    you: string;
    typing: string;
    contactPhone: string; // fictional, in the country's own format
    contactName: string; // the example electrician: a common name in this language
    chat: string;
    moreMessages: string;
    moreMessagesLabel: string;

    headline: string;
    quote: [open: string, close: string];
    greetings: string[]; // the first one is the page's "hi": also what screen readers hear in the headline
    voicemail: string;

    differenceTitle: string;
    howSo: string;
    twoWays: string;
    bad: {
        title: string;
        summary: string;
        hi: string;
        gapOne: string;
        replyHi: string;
        howAreYou: string;
        gapTwo: string;
        replyHowAreYou: string;
        ask: string;
        answer: string;
    };
    good: {
        title: string;
        summary: string;
        ask: string;
        answer: string;
        thanks: string;
    };

    whyTitle: string;
    whatsTheProblem: string;
    typingIsSlow: string;
    busy: string;
    fullQuestion: string;
    isItRude: string;
    notRude: string;

    alsoTitle: string;
    whatAbout: string;
    alsoNo: string;
    alsoCounts: string[];

    formulaTitle: string;
    howDoI: string;
    oneMessage: string;
    formula: { label: string; text: string }[];
    anotherExample: string;
    example: string;
    justAsk: string;
    answerFaster: string;

    closing: string;
    codeLink: string;

    eggWord: string; // typed anywhere on a physical keyboard, lowercase
    eggMessage: string;
};
