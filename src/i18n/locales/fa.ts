import type { LocaleDefinition } from "@/i18n/types";

export const fa: LocaleDefinition = {
    ogLocale: "fa_IR",
    fallbackName: "علی رضایی",
    rtl: true,
    messages: (firstName) => ({
        title: "پیامت رسید 👀",
        description: `${firstName} هستم! قبل از جواب دادن یک یادداشت کوتاه برایت گذاشتم. زود تمام می‌شود.`,

        online: "آنلاین",
        today: "امروز",
        you: "تو",
        typing: `${firstName} در حال نوشتن است`,
        contactPhone: "۰۹۱۲ ۰۰۰ ۰۰۰۰", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "رضا محمدی",
        chat: "پیام",
        moreMessages: "پیام‌های بیشتر",
        moreMessagesLabel: "پیام‌های بیشتر: پایین برو",

        // Persian puts the verb last, so the headline points at the greeting that follows it
        headline: "لطفاً فقط این را برایم نفرست:",
        quote: ["«", "»"],
        greetings: [
            "سلام",
            "درود",
            "سلامم",
            "صبح بخیر!",
            "هی",
            "هستی؟",
            "سلاااام",
            "👋",
            `سلام ${firstName}`,
            "ظهر بخیر",
            "چطوری؟",
            `${firstName}؟`,
            "سلام خوبی؟",
            "خوبی؟",
            "الو؟",
        ],
        voicemail: "تصور کن روی پیغام‌گیر فقط بگویی «سلام» و قطع کنی. طرف گوش می‌دهد و هنوز نمی‌داند چه می‌خواستی. 🤷 چت هم همین‌طور است.",

        differenceTitle: "تفاوت",
        howSo: "یعنی چه؟ 😅",
        twoWays: "ببین: یک سؤال، به دو شکل 👇",
        bad: {
            title: "این‌طوری نه",
            summary: "۱۱ دقیقه برای یک سؤال",
            hi: "سلام",
            gapOne: "۴ دقیقه بعد",
            replyHi: "سلام! بگو 🙂",
            howAreYou: "خوبی؟",
            gapTwo: "۳ دقیقه بعد",
            replyHowAreYou: "خوبم، تو چطوری؟ 😅",
            ask: "شماره‌ی آن برق‌کار را برایم می‌فرستی؟",
            answer: "حتماً",
        },
        good: {
            title: "این‌طوری آره",
            summary: "۱ دقیقه، و کسی منتظر نماند",
            ask: `سلام ${firstName}، خوبی؟ شماره‌ی برق‌کاری که معرفی کردی را برایم می‌فرستی؟ 🙏`,
            answer: "حتماً! این هم شماره‌اش 👍",
            thanks: "مرسی!",
        },

        whyTitle: "چرا این را می‌خواهم",
        whatsTheProblem: "ولی اول سلام کردن چه اشکالی دارد؟",
        typingIsSlow: "تایپ کردن از حرف زدن کندتر است. بعد از «سلام»، فقط به «در حال نوشتن…» خیره می‌شوم و کاری از دستم برنمی‌آید.",
        busy: "شاید هم سر کار باشم، در حال رانندگی یا پیش خانواده. یک «سلام» خالی مجبورم می‌کند چت را باز کنم و باز هم نفهمم موضوع چیست.",
        fullQuestion: "با سؤال کامل، هر وقت توانستم جواب می‌دهم، حتی اگر تو رفته باشی. هیچ‌کس منتظر کسی نمی‌ماند.",
        isItRude: "ولی این بی‌ادبی نیست؟",
        notRude: "اصلاً! سلام کن، حالم را بپرس، استیکر بفرست. فقط همه را همراه سؤال در یک پیام بفرست 😉",

        alsoTitle: "این‌ها هم همین‌طورند",
        whatAbout: "«هستی؟» چی؟",
        alsoNo: "آن هم نه 😄 همین برای این‌ها هم صدق می‌کند:",
        alsoCounts: [
            "هستی؟",
            "سلام، خوبی؟",
            "صبح بخیر!",
            "یک دقیقه وقت داری؟",
            "می‌توانم یک چیزی بپرسم؟",
            `${firstName}؟`,
            "درود",
            "هی",
            "👋",
        ],

        formulaTitle: "فرمول",
        howDoI: "پس چه کار کنم؟",
        oneMessage: "فقط یک پیام، همه با هم:",
        formula: [
            { label: "سلام", text: `سلام ${firstName}، خوبی؟` },
            { label: "زمینه", text: "دیدم یک برق‌کار معرفی کرده بودی." },
            { label: "سؤال", text: "شماره‌اش را برایم می‌فرستی؟" },
        ],
        anotherExample: "یک مثال دیگر، در یک پیام:",
        // Friday afternoon: the weekend in Iran
        example: `سلام ${firstName}، خوبی؟ جمعه عصر نزدیک خانه‌ات هستم. آن موقع خانه‌ای؟`,
        justAsk: "فقط سؤالت را بپرس.",
        answerFaster: "خیلی سریع‌تر جواب می‌دهم.",

        closing: "این ۱۰۰٪ جدی نیست (ولی یک‌کم هست 👀). یک صفحه مثل این می‌خواهی؟",
        codeLink: "کدش باز است",

        eggWord: "سلام",
        eggMessage: "😅 دیدی؟ فقط «سلام» چیزی به من نمی‌گوید. سؤالت را بفرست!",
    }),
};
