import type { LocaleDefinition } from "@/i18n/types";

export const tr: LocaleDefinition = {
    ogLocale: "tr_TR",
    fallbackName: "Ahmet Yılmaz",
    messages: (firstName) => ({
        title: "Mesajını aldım 👀",
        description: `Ben ${firstName}! Cevap vermeden önce sana kısa bir not bıraktım. Hemen bitiyor.`,

        online: "çevrimiçi",
        today: "bugün",
        you: "Sen",
        typing: `${firstName} yazıyor`,
        contactPhone: "0500 000 00 00", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Mehmet Demir",
        chat: "Mesaj",
        moreMessages: "Daha fazla mesaj var",
        moreMessagesLabel: "Daha fazla mesaj var: aşağı kaydır",

        // Turkish puts the verb last, so the headline points at the greeting that follows it
        headline: "Lütfen bana sadece şunu yazma:",
        quote: ["“", "”"],
        greetings: [
            "selam",
            "merhaba",
            "naber",
            "günaydın!",
            "slm",
            "orada mısın?",
            "selaaam",
            "👋",
            `selam ${firstName}`,
            "iyi günler",
            "hey",
            `${firstName}?`,
            "mrb",
            "nasılsın?",
            "alo?",
        ],
        voicemail:
            "Sesli mesaja sadece “selam” deyip kapattığını düşün. Karşındaki dinler ve hâlâ ne istediğini bilmez. 🤷 Sohbet de aynen böyle.",

        differenceTitle: "Fark",
        howSo: "nasıl yani? 😅",
        twoWays: "Bak: aynı soru, iki farklı şekilde 👇",
        bad: {
            title: "Böyle değil",
            summary: "Tek bir soru için 11 dakika",
            hi: "selam",
            gapOne: "4 dk sonra",
            replyHi: "selam! söyle 🙂",
            howAreYou: "nasılsın?",
            gapTwo: "3 dk sonra",
            replyHowAreYou: "iyiyim, sen? 😅",
            ask: "o elektrikçinin numarasını atar mısın?",
            answer: "tabii",
        },
        good: {
            title: "Böyle",
            summary: "1 dakika, kimse beklemedi",
            ask: `Selam ${firstName}, nasılsın? Önerdiğin o elektrikçinin numarasını atar mısın? 🙏`,
            answer: "Tabii! Numarası burada 👍",
            thanks: "Teşekkürler!",
        },

        whyTitle: "Bunu neden istiyorum",
        whatsTheProblem: "önce selam vermenin nesi kötü?",
        typingIsSlow: "Yazmak konuşmaktan yavaştır. “Selam”dan sonra hiçbir şey yapamadan “yazıyor…” yazısına bakıp dururum.",
        busy: "Üstelik çalışıyor, araba kullanıyor ya da ailemle olabilirim. Tek başına bir “selam”, sohbeti açıp konunun ne olduğunu hâlâ bilmediğimi görmeme yol açar.",
        fullQuestion: "Soru tam olunca, sen çıkmış olsan bile ilk fırsatta cevap veririm. Kimse kimseyi beklemez.",
        isItRude: "ama bu kabalık gibi durmuyor mu?",
        notRude: "Hiç de değil! Selam ver, nasıl olduğumu sor, çıkartma gönder. Sadece hepsini soruyla birlikte aynı mesaja koy 😉",

        alsoTitle: "Bunlar için de geçerli",
        whatAbout: "peki “orada mısın?”",
        alsoNo: "O da olmaz 😄 Aynısı bunlar için de geçerli:",
        alsoCounts: [
            "orada mısın?",
            "selam, nasılsın?",
            "günaydın!",
            "bir dakikan var mı?",
            "bir şey sorabilir miyim?",
            `${firstName}?`,
            "naber",
            "hey",
            "👋",
        ],

        formulaTitle: "Formül",
        howDoI: "peki nasıl yapayım?",
        oneMessage: "Tek bir mesaj, hepsi bir arada:",
        formula: [
            { label: "selam", text: `Selam ${firstName}, nasılsın?` },
            { label: "bağlam", text: "Bir elektrikçi önerdiğini gördüm." },
            { label: "soru", text: "Numarasını atar mısın?" },
        ],
        anotherExample: "Başka bir örnek, tek mesajda:",
        example: `Selam ${firstName}, nasılsın? Pazar öğleden sonra senin oralara geleceğim. Evde olacak mısın?`,
        justAsk: "Sadece soruyu sor.",
        answerFaster: "Çok daha hızlı cevap veririm.",

        closing: "Bu %100 ciddi değil (ama biraz öyle 👀). Senin de böyle bir sayfan olsun mu?",
        codeLink: "Kodu açık",

        eggWord: "selam",
        eggMessage: "😅 Gördün mü? Sadece “selam” bana hiçbir şey söylemiyor. Soruyu gönder!",
    }),
};
