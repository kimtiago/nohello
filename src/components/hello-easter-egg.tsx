"use client";

import { useEffect, useState } from "react";
import { useCopy } from "@/i18n/use-copy";

// Easter egg: typing the page's "hi" anywhere on the page (outside a text field) gets a gentle reminder.
export function HelloEasterEgg() {
    const [visible, setVisible] = useState(false);
    const { t } = useCopy();
    const sequence = t.eggWord;

    useEffect(() => {
        let position = 0;
        let hideTimer: number | undefined;

        function onKeyDown(event: KeyboardEvent) {
            const target = event.target;
            if (target instanceof Element && target.closest("input, textarea, [contenteditable]")) return;

            position = event.key.toLowerCase() === sequence[position] ? position + 1 : event.key.toLowerCase() === sequence[0] ? 1 : 0;
            if (position === sequence.length) {
                position = 0;
                setVisible(true);
                document.getElementById("headline")?.classList.add("animate-wiggle");
                window.clearTimeout(hideTimer);
                hideTimer = window.setTimeout(() => {
                    setVisible(false);
                    document.getElementById("headline")?.classList.remove("animate-wiggle");
                }, 3500);
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.clearTimeout(hideTimer);
        };
    }, [sequence]);

    return (
        <div
            role="status"
            className={`fixed top-16 left-1/2 z-40 border border-line bg-bar shadow-lg shadow-black/40 -translate-x-1/2 w-max max-w-[calc(100vw-2rem)] rounded-full px-5 py-3 text-center text-sm transition-all duration-500 ${
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
            }`}>
            {visible && <span>{t.eggMessage}</span>}
        </div>
    );
}
