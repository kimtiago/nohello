import type { LocaleDefinition } from "@/i18n/types";

// Simplified Chinese, also used for other Chinese variants until they have their own file
export const zhCN: LocaleDefinition = {
    ogLocale: "zh_CN",
    fallbackName: "张三",
    messages: (firstName) => ({
        title: "收到你的消息了 👀",
        description: `我是${firstName}！回复之前，先给你留个小纸条。很快就看完。`,

        online: "在线",
        today: "今天",
        you: "你",
        typing: `${firstName}正在输入`,
        contactPhone: "138 0000 0000", // No range is reserved for fiction here: zeros make it look obviously fake
        contactName: "李明",
        chat: "发消息",
        moreMessages: "还有更多消息",
        moreMessagesLabel: "还有更多消息：向下滚动",

        headline: "请不要只给我发",
        quote: ["“", "”"],
        greetings: [
            "你好",
            "在吗？",
            "嗨",
            "早上好！",
            "哈喽",
            "在不在？",
            "你好呀",
            "👋",
            `${firstName}，你好`,
            "下午好",
            "hi",
            `${firstName}？`,
            "在？",
            "最近好吗？",
            "喂？",
        ],
        voicemail: "想象一下，你在语音信箱里只留了一句“你好”就挂了。对方听完，还是不知道你想干什么。🤷 聊天也是一样。",

        differenceTitle: "区别",
        howSo: "什么意思？😅",
        twoWays: "看：同一个问题，两种问法 👇",
        bad: {
            title: "别这样",
            summary: "一个问题花了 11 分钟",
            hi: "你好",
            gapOne: "4 分钟后",
            replyHi: "你好！什么事？🙂",
            howAreYou: "最近好吗？",
            gapTwo: "3 分钟后",
            replyHowAreYou: "挺好的，你呢？😅",
            ask: "能把那个电工的联系方式发我吗？",
            answer: "可以",
        },
        good: {
            title: "这样才对",
            summary: "1 分钟，谁也不用等",
            ask: `${firstName}你好，最近好吗？能把你推荐的那个电工的联系方式发我吗？🙏`,
            answer: "好的！这是他的联系方式 👍",
            thanks: "谢谢！",
        },

        whyTitle: "我为什么这样请求",
        whatsTheProblem: "可是先打个招呼有什么不好？",
        typingIsSlow: "打字比说话慢。看到“你好”之后，我只能盯着“正在输入…”，什么也做不了。",
        busy: "而且我可能正在工作、开车，或者陪家人。一句单独的“你好”让我打开聊天，结果还是不知道是什么事。",
        fullQuestion: "有了完整的问题，我会尽快回复，就算你已经离开了也没关系。谁也不用等谁。",
        isItRude: "可是这样不会显得没礼貌吗？",
        notRude: "完全不会！打招呼、问我最近怎么样、发个表情包都行。只要把这些和问题放在同一条消息里就好 😉",

        alsoTitle: "这些也一样",
        whatAbout: "那“在吗？”呢？",
        alsoNo: "也不行 😄 这些也一样：",
        alsoCounts: ["在吗？", "你好，最近好吗？", "早上好！", "有空吗？", "能问你个事吗？", `${firstName}？`, "在？", "嗨", "👋"],

        formulaTitle: "公式",
        howDoI: "那我该怎么做？",
        oneMessage: "只发一条消息，全部写在一起：",
        formula: [
            { label: "问候", text: `${firstName}你好，最近好吗？` },
            { label: "背景", text: "看到你推荐过一个电工。" },
            { label: "问题", text: "能把他的联系方式发我吗？" },
        ],
        anotherExample: "再举个例子，一条消息搞定：",
        example: `${firstName}你好，最近好吗？我周日下午会经过你家附近，你那时候在家吗？`,
        justAsk: "直接问问题就好。",
        answerFaster: "我会回复得快很多。",

        closing: "这不是百分之百认真的（不过也有点认真 👀）。想要一个这样的页面吗？",
        codeLink: "代码是开源的",

        // Chinese characters need an input method, which never reaches the page as plain key presses: pinyin does
        eggWord: "nihao",
        eggMessage: "😅 看到了吧？只说“你好”我什么也不知道。直接发问题吧！",
    }),
};
