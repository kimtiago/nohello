import type { LocaleDefinition } from "@/i18n/types";

export const id: LocaleDefinition = {
    ogLocale: "id_ID",
    fallbackName: "Budi Santoso",
    messages: (firstName) => ({
        title: "Pesanmu sudah kuterima 👀",
        description: `${firstName} di sini! Aku tinggalkan catatan singkat sebelum membalas. Cuma sebentar.`,

        online: "online",
        today: "hari ini",
        you: "Kamu",
        typing: `${firstName} sedang mengetik`,
        contactPhone: "0812-0000-0000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Agus Setiawan",
        chat: "Kirim pesan",
        moreMessages: "Ada pesan lagi",
        moreMessagesLabel: "Ada pesan lagi: gulir ke bawah",

        headline: "Tolong jangan cuma kirim",
        quote: ["“", "”"],
        greetings: [
            "halo",
            "hai",
            "p",
            "pagi!",
            "woi",
            "ada?",
            "haloo",
            "👋",
            `hai ${firstName}`,
            "selamat siang",
            "bro",
            `${firstName}?`,
            "assalamualaikum",
            "apa kabar?",
            "halo?",
        ],
        voicemail:
            "Bayangkan meninggalkan pesan suara yang isinya cuma “halo”, lalu menutup telepon. Orang itu mendengarkan dan tetap tidak tahu apa maumu. 🤷 Chat juga begitu.",

        differenceTitle: "Bedanya",
        howSo: "maksudnya? 😅",
        twoWays: "Lihat: pertanyaan yang sama, ditanyakan dengan dua cara 👇",
        bad: {
            title: "Jangan begini",
            summary: "11 menit untuk satu pertanyaan",
            hi: "halo",
            gapOne: "4 mnt kemudian",
            replyHi: "halo! ada apa? 🙂",
            howAreYou: "apa kabar?",
            gapTwo: "3 mnt kemudian",
            replyHowAreYou: "baik, kamu? 😅",
            ask: "boleh minta kontak tukang listrik yang itu?",
            answer: "boleh",
        },
        good: {
            title: "Begini",
            summary: "1 menit, dan tidak ada yang menunggu",
            ask: `Hai ${firstName}, apa kabar? Boleh minta kontak tukang listrik yang kamu rekomendasikan? 🙏`,
            answer: "Boleh! Ini kontaknya 👍",
            thanks: "Makasih!",
        },

        whyTitle: "Kenapa aku minta ini",
        whatsTheProblem: "memangnya kenapa kalau menyapa dulu?",
        typingIsSlow:
            "Mengetik lebih lambat daripada bicara. Setelah “halo”, aku cuma bisa menatap “sedang mengetik…” tanpa bisa berbuat apa-apa.",
        busy: "Dan aku mungkin sedang kerja, menyetir, atau bersama keluarga. “Halo” saja membuatku membuka chat hanya untuk tahu bahwa aku masih belum tahu maksudnya.",
        fullQuestion: "Kalau pertanyaannya lengkap, aku balas secepatnya, walaupun kamu sudah pergi. Tidak ada yang perlu menunggu.",
        isItRude: "tapi bukannya itu terkesan tidak sopan?",
        notRude:
            "Sama sekali tidak! Silakan menyapa, tanya kabarku, kirim stiker. Gabungkan saja semuanya dengan pertanyaannya dalam satu pesan 😉",

        alsoTitle: "Ini juga berlaku untuk",
        whatAbout: "kalau “ada?” gimana?",
        alsoNo: "Itu juga 😄 Sama halnya dengan:",
        alsoCounts: ["ada?", "halo, apa kabar?", "pagi!", "ada waktu sebentar?", "boleh tanya sesuatu?", `${firstName}?`, "p", "hai", "👋"],

        formulaTitle: "Rumusnya",
        howDoI: "jadi gimana caranya?",
        oneMessage: "Satu pesan saja, semuanya sekaligus:",
        formula: [
            { label: "sapaan", text: `Hai ${firstName}, apa kabar?` },
            { label: "konteks", text: "Aku lihat kamu merekomendasikan tukang listrik." },
            { label: "pertanyaan", text: "Boleh minta kontaknya?" },
        ],
        anotherExample: "Contoh lain, dalam satu pesan:",
        example: `Hai ${firstName}, apa kabar? Minggu sore aku mau lewat dekat rumahmu. Kamu ada di rumah?`,
        justAsk: "Langsung saja tanyakan.",
        answerFaster: "Aku akan membalas jauh lebih cepat.",

        closing: "Ini tidak 100% serius (tapi agak serius sih 👀). Mau halaman seperti ini?",
        codeLink: "Kodenya terbuka",

        eggWord: "halo",
        eggMessage: "😅 Tuh kan? Cuma “halo” tidak memberitahuku apa-apa. Kirim pertanyaannya!",
    }),
};
