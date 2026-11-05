"use client";

import { CheckCheck } from "lucide-react";
import Image from "next/image";
import { useCopy } from "@/i18n/use-copy";

export type Sender = "you" | "owner";

type BubbleProps = {
    from: Sender;
    time?: string;
    wrong?: boolean; // the visitor's bubble in the "don't do this" example
    className?: string;
    children: React.ReactNode;
};

// One chat bubble: the visitor on the right, the owner on the left.
export function Bubble({ from, time, wrong = false, className = "", children }: BubbleProps) {
    const { firstName, t } = useCopy();
    const mine = from === "you";
    const mineBackground = wrong ? "bg-bubble-wrong" : "bg-bubble-you";
    const mineMeta = wrong ? "text-meta-wrong" : "text-meta-you";

    return (
        <div
            className={`max-w-[88%] rounded-2xl px-3.5 py-2 text-[17px] leading-snug shadow-sm shadow-black/20 ${
                mine ? `rounded-se-sm ${mineBackground}` : "rounded-ss-sm bg-bubble-owner"
            } ${className}`}>
            <span className="sr-only">{mine ? t.you : firstName}: </span>
            {children}
            {time && (
                <span
                    className={`float-end mt-1.5 ms-3 flex items-center gap-1 text-[11px] tabular-nums ${mine ? mineMeta : "text-muted"}`}>
                    {time}
                    {mine && <CheckCheck className="size-3.5" aria-hidden="true" />}
                </span>
            )}
        </div>
    );
}

export type Contact = { name: string; phone: string; photo: string };

// A contact shared inside a message, the way WhatsApp shows it. Illustration only: nothing here is clickable.
export function ContactCard({ name, phone, photo }: Contact) {
    const { t } = useCopy();

    return (
        <div className="mt-2 w-60 max-w-full overflow-hidden rounded-xl bg-canvas/70">
            <div className="flex items-center gap-2.5 px-3 py-2.5">
                <Image src={photo} alt="" width={44} height={44} className="size-11 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 leading-tight">
                    <p className="font-semibold">{name}</p>
                    {/* A phone number reads left to right even on right-to-left pages, or its groups swap places */}
                    <p className="mt-0.5 text-sm text-muted tabular-nums">
                        <bdi dir="ltr">{phone}</bdi>
                    </p>
                </div>
            </div>
            <p aria-hidden="true" className="border-t border-line py-1.5 text-center text-sm font-medium text-accent">
                {t.chat}
            </p>
        </div>
    );
}

export function TypingBubble() {
    const { t } = useCopy();

    return (
        <div className="bubble-in flex justify-start" role="status" aria-label={t.typing}>
            <span className="flex gap-1 rounded-2xl rounded-ss-sm bg-bubble-owner px-4 py-3.5">
                <span className="typing-dot size-1.5 rounded-full bg-fg" />
                <span className="typing-dot size-1.5 rounded-full bg-fg" />
                <span className="typing-dot size-1.5 rounded-full bg-fg" />
            </span>
        </div>
    );
}
