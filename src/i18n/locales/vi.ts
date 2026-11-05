import type { LocaleDefinition } from "@/i18n/types";

// "mình" and "bạn" keep it friendly without depending on age or gender, as the other pronouns would
export const vi: LocaleDefinition = {
    ogLocale: "vi_VN",
    fallbackName: "Nguyễn Văn An",
    givenNameLast: true,
    messages: (firstName) => ({
        title: "Mình đã nhận được tin nhắn của bạn 👀",
        description: `${firstName} đây! Mình để lại vài dòng trước khi trả lời. Đọc nhanh thôi.`,

        online: "đang hoạt động",
        today: "hôm nay",
        you: "Bạn",
        typing: `${firstName} đang soạn tin`,
        contactPhone: "090 000 0000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "Trần Văn Bình",
        chat: "Nhắn tin",
        moreMessages: "Còn tin nhắn nữa",
        moreMessagesLabel: "Còn tin nhắn nữa: cuộn xuống",

        headline: "Làm ơn đừng chỉ nhắn cho mình",
        quote: ["“", "”"],
        greetings: [
            "chào",
            "hi",
            "alo",
            "chào buổi sáng!",
            "ê",
            "có đó không?",
            "chàooo",
            "👋",
            `chào ${firstName}`,
            "chào buổi chiều",
            "hello",
            `${firstName} ơi?`,
            "xin chào",
            "khỏe không?",
            "alo alo?",
        ],
        voicemail:
            "Hãy tưởng tượng bạn để lại tin nhắn thoại chỉ nói “chào” rồi cúp máy. Người kia nghe xong vẫn không biết bạn muốn gì. 🤷 Nhắn tin cũng vậy.",

        differenceTitle: "Sự khác biệt",
        howSo: "ý bạn là sao? 😅",
        twoWays: "Xem này: cùng một câu hỏi, hỏi theo hai cách 👇",
        bad: {
            title: "Đừng như thế này",
            summary: "11 phút cho một câu hỏi",
            hi: "chào",
            gapOne: "4 phút sau",
            replyHi: "chào! có gì không? 🙂",
            howAreYou: "khỏe không?",
            gapTwo: "3 phút sau",
            replyHowAreYou: "khỏe, còn bạn? 😅",
            ask: "gửi mình số anh thợ điện đó được không?",
            answer: "được chứ",
        },
        good: {
            title: "Hãy như thế này",
            summary: "1 phút, và không ai phải chờ",
            ask: `Chào ${firstName}, khỏe không? Gửi mình số anh thợ điện bạn giới thiệu được không? 🙏`,
            answer: "Được chứ! Số của anh ấy đây 👍",
            thanks: "Cảm ơn nhé!",
        },

        whyTitle: "Vì sao mình nhờ điều này",
        whatsTheProblem: "nhưng chào trước thì có gì sai?",
        typingIsSlow: "Gõ chữ chậm hơn nói. Sau câu “chào”, mình chỉ biết nhìn dòng “đang soạn tin…” mà không làm gì được.",
        busy: "Và mình có thể đang làm việc, lái xe hay ở bên gia đình. Một câu “chào” không đầu không đuôi khiến mình mở tin nhắn ra rồi vẫn không biết chuyện gì.",
        fullQuestion: "Có câu hỏi đầy đủ, mình sẽ trả lời ngay khi có thể, kể cả khi bạn đã rời đi. Không ai phải chờ ai.",
        isItRude: "nhưng như vậy có bất lịch sự không?",
        notRude: "Không hề! Cứ chào, hỏi thăm mình, gửi sticker. Chỉ cần gộp tất cả cùng câu hỏi vào một tin nhắn thôi 😉",

        alsoTitle: "Cũng áp dụng cho",
        whatAbout: "còn “có đó không?” thì sao?",
        alsoNo: "Cũng vậy luôn 😄 Áp dụng cho cả:",
        alsoCounts: [
            "có đó không?",
            "chào, khỏe không?",
            "chào buổi sáng!",
            "rảnh một chút không?",
            "mình hỏi chút được không?",
            `${firstName} ơi?`,
            "alo",
            "ê",
            "👋",
        ],

        formulaTitle: "Công thức",
        howDoI: "vậy mình nên làm sao?",
        oneMessage: "Chỉ một tin nhắn, gộp hết lại:",
        formula: [
            { label: "lời chào", text: `Chào ${firstName}, khỏe không?` },
            { label: "bối cảnh", text: "Mình thấy bạn có giới thiệu một thợ điện." },
            { label: "câu hỏi", text: "Gửi mình số của anh ấy được không?" },
        ],
        anotherExample: "Một ví dụ khác, trong một tin nhắn:",
        example: `Chào ${firstName}, khỏe không? Chiều Chủ nhật mình sẽ đi ngang gần nhà bạn. Lúc đó bạn có nhà không?`,
        justAsk: "Cứ hỏi thẳng luôn.",
        answerFaster: "Mình sẽ trả lời nhanh hơn nhiều.",

        closing: "Cái này không nghiêm túc 100% (nhưng cũng hơi hơi 👀). Bạn muốn có một trang như vậy không?",
        codeLink: "Mã nguồn mở",

        // Words with tone marks need an input method, which never reaches the page as plain key presses
        eggWord: "alo",
        eggMessage: "😅 Thấy chưa? Chỉ “alo” thì mình chẳng biết gì cả. Gửi câu hỏi đi!",
    }),
};
