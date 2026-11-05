import type { LocaleDefinition } from "@/i18n/types";

// Hebrew marks gender in present tenses and in "you": the page speaks to visitors in the plural, the owner uses only the
// past and future (which don't change for gender), and the visitor's messages use forms written the same for both.
export const he: LocaleDefinition = {
    ogLocale: "he_IL",
    fallbackName: "ישראל ישראלי",
    rtl: true,
    messages: (firstName) => ({
        title: "ההודעה שלכם הגיעה 👀",
        description: `כאן ${firstName}! השארתי לכם הודעה קצרה לפני שאענה. זה ייקח רגע.`,

        online: "מחובר/ת",
        today: "היום",
        you: "אתם",
        typing: `${firstName} מקליד/ה`,
        contactPhone: "050-000-0000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "יוסי לוי",
        chat: "הודעה",
        moreMessages: "יש עוד הודעות",
        moreMessagesLabel: "יש עוד הודעות: לגלול למטה",

        headline: "בבקשה אל תשלחו לי רק",
        quote: ['"', '"'],
        greetings: [
            "היי",
            "שלום",
            "אהלן",
            "בוקר טוב!",
            "מה קורה?",
            "יש לך רגע?",
            "הייי",
            "👋",
            `היי ${firstName}`,
            "צהריים טובים",
            "יו",
            `${firstName}?`,
            "מה נשמע?",
            "הלו?",
            "שלוםםם",
        ],
        voicemail:
            'תדמיינו שאתם משאירים הודעה קולית שאומרת רק "היי" ומנתקים. הצד השני מקשיב ועדיין לא יודע מה רציתם. 🤷 בצ\'אט זה אותו דבר.',

        differenceTitle: "ההבדל",
        howSo: "מה זאת אומרת? 😅",
        twoWays: "תראו: אותה שאלה, בשתי דרכים 👇",
        bad: {
            title: "לא ככה",
            summary: "11 דקות לשאלה אחת",
            hi: "היי",
            gapOne: "אחרי 4 דק׳",
            replyHi: "היי! מה קורה? 🙂",
            howAreYou: "מה שלומך?",
            gapTwo: "אחרי 3 דק׳",
            replyHowAreYou: "בסדר, ואצלך? 😅",
            ask: "אפשר את הטלפון של החשמלאי ההוא?",
            answer: "בטח",
        },
        good: {
            title: "ככה כן",
            summary: "דקה אחת, ואף אחד לא חיכה",
            ask: `היי ${firstName}, מה שלומך? אפשר את הטלפון של החשמלאי שהמלצת עליו? 🙏`,
            answer: "בטח! הנה הטלפון שלו 👍",
            thanks: "תודה!",
        },

        whyTitle: "למה הבקשה הזאת",
        whatsTheProblem: "אבל מה רע בלהגיד היי קודם?",
        typingIsSlow: 'להקליד זה איטי יותר מלדבר. אחרי ה"היי" נשאר רק לבהות ב"מקליד/ה…" בלי שום דרך לקדם משהו.',
        busy: 'ואולי באותו רגע אני בעבודה, בנהיגה או עם המשפחה. "היי" לבד גורם לי לפתוח את הצ\'אט רק כדי לגלות שעדיין לא ברור על מה מדובר.',
        fullQuestion: "עם השאלה המלאה, אענה ברגע שאוכל, גם אם כבר יצאתם. אף אחד לא מחכה לאף אחד.",
        isItRude: "אבל זה לא נראה לא מנומס?",
        notRude: "ממש לא! תגידו שלום, תשאלו מה שלומי, תשלחו סטיקר. רק תשלבו הכול יחד עם השאלה באותה הודעה 😉",

        alsoTitle: "זה נכון גם ל",
        whatAbout: 'ומה עם "יש לך רגע?"',
        alsoNo: "גם לא 😄 אותו דבר גם עם:",
        alsoCounts: ["יש לך רגע?", "היי, מה שלומך?", "בוקר טוב!", "אפשר לשאול משהו?", "מה קורה?", `${firstName}?`, "אהלן", "הי", "👋"],

        formulaTitle: "הנוסחה",
        howDoI: "אז איך עושים את זה?",
        oneMessage: "הודעה אחת, עם הכול ביחד:",
        formula: [
            { label: "ברכה", text: `היי ${firstName}, מה שלומך?` },
            { label: "הקשר", text: "ראיתי שהמלצת על חשמלאי." },
            { label: "שאלה", text: "אפשר את הטלפון שלו?" },
        ],
        anotherExample: "עוד דוגמה, בהודעה אחת:",
        // Friday afternoon: the start of the weekend in Israel
        example: `היי ${firstName}, מה שלומך? ביום שישי אחר הצהריים אהיה ליד הבית שלך. אפשר לקפוץ אליך?`,
        justAsk: "פשוט תשאלו את השאלה.",
        answerFaster: "אענה הרבה יותר מהר.",

        closing: "זה לא 100% ברצינות (אבל קצת כן 👀). רוצים דף כזה?",
        codeLink: "הקוד פתוח",

        eggWord: "היי",
        eggMessage: '😅 רואים? "היי" לבד לא אומר לי כלום. תשלחו את השאלה!',
    }),
};
