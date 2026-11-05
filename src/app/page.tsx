"use client";

import { Avatar } from "@/components/avatar";
import { Bubble, type Contact, type Sender } from "@/components/bubble";
import { ChatDemo, type ChatItem } from "@/components/chat-demo";
import { GreetingTyper } from "@/components/greeting-typer";
import { HelloEasterEgg } from "@/components/hello-easter-egg";
import { Meme } from "@/components/meme";
import { Reveal } from "@/components/reveal";
import { ScrollHint } from "@/components/scroll-hint";
import { site } from "@/config/site";
import { useCopy, useSiteConfig } from "@/i18n/use-copy";

export default function Home() {
    const { locale, owner, t } = useCopy();
    const { gifs } = useSiteConfig();

    // A fictional contact: the same person everywhere, with a local number
    const electrician: Contact = { name: "John Smith", phone: t.contactPhone, photo: "/electrician.jpg" };

    const badChat: ChatItem[] = [
        { kind: "message", from: "you", text: t.bad.hi, time: "14:15" },
        { kind: "gap", label: t.bad.gapOne },
        { kind: "message", from: "owner", text: t.bad.replyHi, time: "14:19" },
        { kind: "message", from: "you", text: t.bad.howAreYou, time: "14:20" },
        { kind: "gap", label: t.bad.gapTwo },
        { kind: "message", from: "owner", text: t.bad.replyHowAreYou, time: "14:23" },
        { kind: "message", from: "you", text: t.bad.ask, time: "14:25" },
        { kind: "message", from: "owner", text: t.bad.answer, time: "14:26", contact: electrician },
    ];

    const goodChat: ChatItem[] = [
        { kind: "message", from: "you", text: t.good.ask, time: "14:15" },
        { kind: "message", from: "owner", text: t.good.answer, time: "14:16", contact: electrician },
        { kind: "message", from: "you", text: t.good.thanks, time: "14:16" },
    ];

    return (
        <div className="wallpaper flex min-h-dvh flex-col">
            <HelloEasterEgg />
            <ScrollHint />

            <header className="sticky top-0 z-20 border-b border-line bg-bar">
                <div className="mx-auto flex w-full max-w-4xl items-center gap-3 px-4 py-2.5 sm:px-6">
                    <Avatar />
                    <div className="min-w-0 leading-tight">
                        <p className="truncate font-semibold">{owner}</p>
                        <p className="text-[13px] text-muted">{t.online}</p>
                    </div>
                </div>
            </header>

            <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-2 px-3 pt-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6">
                <Pill>{t.today}</Pill>

                <Message from="owner" time="14:15">
                    <h1 id="headline" className="text-[clamp(1.875rem,8vw,2.75rem)] leading-[1.08] font-bold tracking-tight">
                        {t.headline} <GreetingTyper key={locale} greetings={t.greetings} quote={t.quote} />
                    </h1>
                </Message>
                <Message from="owner" time="14:15" delay={250}>
                    {t.voicemail}
                </Message>
                <Meme src={gifs[0]} time="14:15" />

                <Section title={t.differenceTitle}>
                    <Message from="you" time="14:16">
                        {t.howSo}
                    </Message>
                    <Message from="owner" time="14:16">
                        {t.twoWays}
                    </Message>
                    <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                        <Reveal>
                            <ChatDemo variant="bad" title={t.bad.title} items={badChat} summary={t.bad.summary} />
                        </Reveal>
                        <Reveal>
                            <ChatDemo variant="good" title={t.good.title} items={goodChat} summary={t.good.summary} />
                        </Reveal>
                    </div>
                </Section>

                <Section title={t.whyTitle}>
                    <Message from="you" time="14:17">
                        {t.whatsTheProblem}
                    </Message>
                    <Message from="owner" time="14:17">
                        {t.typingIsSlow}
                    </Message>
                    <Meme src={gifs[1]} time="14:17" />
                    <Message from="owner" time="14:17">
                        {t.busy}
                    </Message>
                    <Message from="owner" time="14:18">
                        {t.fullQuestion}
                    </Message>
                    <Message from="you" time="14:18">
                        {t.isItRude}
                    </Message>
                    <Message from="owner" time="14:18">
                        {t.notRude}
                    </Message>
                </Section>

                <Section title={t.alsoTitle}>
                    <Message from="you" time="14:19">
                        {t.whatAbout}
                    </Message>
                    <Message from="owner" time="14:19">
                        {t.alsoNo}
                        <ul className="mt-2.5 flex flex-wrap gap-1.5">
                            {t.alsoCounts.map((text) => (
                                <li
                                    key={text}
                                    className="rounded-full bg-canvas/70 px-3 py-1 text-[15px] text-muted line-through decoration-bad">
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </Message>
                </Section>

                <Section title={t.formulaTitle}>
                    <Message from="you" time="14:20">
                        {t.howDoI}
                    </Message>
                    <Message from="owner" time="14:20">
                        {t.oneMessage}
                        <dl className="mt-2.5 flex flex-col gap-2">
                            {t.formula.map(({ label, text }) => (
                                <div key={label} className="rounded-xl bg-canvas/70 px-3 py-2">
                                    <dt className="text-xs font-semibold text-accent">{label}</dt>
                                    <dd>{text}</dd>
                                </div>
                            ))}
                        </dl>
                    </Message>
                    <Message from="owner" time="14:20">
                        {t.anotherExample}
                        <p className="mt-2.5 rounded-xl bg-canvas/70 px-3 py-2">{t.example}</p>
                    </Message>
                    <Message from="owner" time="14:21">
                        <strong>{t.justAsk}</strong> {t.answerFaster}
                    </Message>
                </Section>

                <Pill>
                    {t.closing}{" "}
                    <a href={site.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        {t.codeLink}
                    </a>
                    .
                </Pill>
            </main>
        </div>
    );
}

function Message({ from, time, delay, children }: { from: Sender; time: string; delay?: number; children: React.ReactNode }) {
    return (
        <Reveal delay={delay} className={`flex ${from === "you" ? "justify-end" : "justify-start"}`}>
            <Bubble from={from} time={time} className="md:max-w-[70%]">
                {children}
            </Bubble>
        </Reveal>
    );
}

// Each block of the conversation, titled for screen readers only: on screen the bubbles carry the flow.
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-3 flex flex-col gap-2">
            <h2 className="sr-only">{title}</h2>
            {children}
        </section>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return <p className="mx-auto my-3 max-w-[90%] rounded-lg bg-bar px-3 py-1.5 text-center text-[13px] text-muted">{children}</p>;
}
