"use client";

import { Check, Clock, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Bubble, ContactCard, TypingBubble, type Contact, type Sender } from "@/components/bubble";
import { useInView } from "@/lib/use-in-view";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export type ChatItem = { kind: "message"; from: Sender; text: string; time: string; contact?: Contact } | { kind: "gap"; label: string };

type ChatDemoProps = {
    variant: "bad" | "good";
    title: string;
    items: ChatItem[];
    summary: string;
};

const STEP_MS = 900;
const GAP_MS = 1300;

const variants = {
    bad: {
        Icon: X,
        card: "border-bad/60 bg-wall-bad",
        bar: "border-bad/30 bg-bad/15 text-bad",
        badge: "bg-bad text-canvas",
        finished: "demo-finished-bad",
    },
    good: {
        Icon: Check,
        card: "border-good/60 bg-wall-good",
        bar: "border-good/30 bg-good/15 text-good",
        badge: "bg-good text-canvas",
        finished: "demo-finished-good",
    },
};

// A conversation inside the conversation, played once it scrolls into view.
export function ChatDemo({ variant, title, items, summary }: ChatDemoProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [played, setPlayed] = useState(0);
    const reducedMotion = useReducedMotion();
    const started = useInView(ref, { threshold: 0.3, enabled: !reducedMotion });
    const shown = reducedMotion ? items.length : played; // reduced motion: the whole conversation at once

    useEffect(() => {
        if (!started || shown >= items.length) return;
        const next = items[shown];
        const delay = shown === 0 ? 400 : next.kind === "gap" ? GAP_MS : STEP_MS;
        const timer = window.setTimeout(() => setPlayed((s) => s + 1), delay);
        return () => window.clearTimeout(timer);
    }, [started, shown, items]);

    const next = items[shown];
    const typing = started && next?.kind === "message" && next.from === "owner";
    const done = shown >= items.length;
    const { Icon, card, bar, badge, finished } = variants[variant];

    return (
        <div ref={ref} className={`flex h-full flex-col overflow-hidden rounded-2xl border-2 ${card} ${done ? finished : ""}`}>
            <p className={`flex items-center gap-2.5 border-b px-4 py-2.5 text-lg font-bold ${bar}`}>
                <span className={`grid size-7 shrink-0 place-items-center rounded-full ${badge} ${done ? "demo-stamp" : ""}`}>
                    <Icon className="size-4.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {title}
            </p>

            {/* An invisible copy of the whole conversation reserves its height, in any language and width, so the page doesn't jump
                while it plays. Without JavaScript, this copy is the one that shows (see layout.tsx). */}
            <div className="grid flex-1 grid-cols-1 px-3 py-4">
                <div data-demo-full="" className="invisible col-start-1 row-start-1 flex flex-col gap-2">
                    {items.map((item, i) => (
                        <DemoItem key={i} item={item} variant={variant} />
                    ))}
                </div>
                <div className="col-start-1 row-start-1 flex flex-col justify-end gap-2" aria-live="polite">
                    {items.slice(0, shown).map((item, i) => (
                        <DemoItem key={i} item={item} variant={variant} />
                    ))}
                    {typing && <TypingBubble />}
                </div>
            </div>

            <p
                data-demo-summary=""
                className={`border-t px-4 py-2.5 text-[15px] font-semibold transition-opacity duration-500 ${bar} ${done ? "opacity-100" : "opacity-0"}`}>
                {summary}
            </p>
        </div>
    );
}

function DemoItem({ item, variant }: { item: ChatItem; variant: ChatDemoProps["variant"] }) {
    if (item.kind === "gap") {
        return (
            <p className="demo-gap mx-auto flex items-center gap-1.5 rounded-full bg-bad/15 px-2.5 py-0.5 text-xs font-semibold text-bad">
                <Clock className="size-3.5" aria-hidden="true" />
                {item.label}
            </p>
        );
    }

    return (
        <div className={`bubble-in flex ${item.from === "you" ? "justify-end" : "justify-start"}`}>
            <Bubble from={item.from} time={item.time} wrong={variant === "bad"} className="text-[15px]">
                {item.text}
                {item.contact && <ContactCard {...item.contact} />}
            </Bubble>
        </div>
    );
}
