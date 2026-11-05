"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1800;

type GreetingTyperProps = {
    greetings: string[];
    quote: [open: string, close: string];
};

// The headline's last word: starts as the page's “hi”, then strikes the greeting through, deletes it and types the next one — forever.
export function GreetingTyper({ greetings, quote }: GreetingTyperProps) {
    const [index, setIndex] = useState(0);
    const [length, setLength] = useState(Array.from(greetings[0]).length);
    const [deleting, setDeleting] = useState(false);
    const reducedMotion = useReducedMotion();

    const word = Array.from(greetings[index]); // Array.from keeps emojis as one character
    const visibleLength = reducedMotion ? word.length : length; // reduced motion: the first word, standing still
    const typed = word.slice(0, visibleLength).join("");
    const complete = !deleting && visibleLength === word.length;

    useEffect(() => {
        if (reducedMotion) return;

        let delay = deleting ? DELETE_MS : TYPE_MS;
        if (complete) delay = HOLD_MS;
        if (deleting && length === 0) delay = 300;

        const timer = window.setTimeout(() => {
            if (complete) {
                setDeleting(true);
            } else if (deleting && length === 0) {
                setDeleting(false);
                setIndex((i) => (i + 1) % greetings.length);
            } else {
                setLength((l) => l + (deleting ? -1 : 1));
            }
        }, delay);
        return () => window.clearTimeout(timer);
    }, [length, deleting, complete, index, reducedMotion, greetings.length]);

    return (
        <span className="block min-h-[1.2em] text-accent">
            <span className="sr-only">
                {quote[0]}
                {greetings[0]}
                {quote[1]}.
            </span>
            <span aria-hidden="true">
                {quote[0]}
                <span className="relative">
                    {typed}
                    {/* the strike line draws itself once the word is fully typed */}
                    <span
                        className="absolute top-[54%] left-0 h-[0.07em] rounded-full bg-bad transition-[width] duration-500 ease-out"
                        style={{ width: complete ? "100%" : "0%" }}
                    />
                </span>
                {quote[1]}
                <span className="ml-1 inline-block h-[0.85em] w-0.5 animate-blink bg-fg/80 align-[-0.05em]" />
            </span>
        </span>
    );
}
