"use client";

import { ChevronDown } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useCopy } from "@/i18n/use-copy";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const END_MARGIN_PX = 80;

function subscribe(onChange: () => void) {
    // The page also grows on its own while the examples play
    const resize = new ResizeObserver(onChange);
    resize.observe(document.documentElement);
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
        resize.disconnect();
        window.removeEventListener("scroll", onChange);
        window.removeEventListener("resize", onChange);
    };
}

function hasMoreBelow() {
    return document.documentElement.scrollHeight - window.scrollY - window.innerHeight > END_MARGIN_PX;
}

// Tells the visitor the conversation goes on below, until they reach the end.
export function ScrollHint() {
    const visible = useSyncExternalStore(subscribe, hasMoreBelow, () => false);
    const reducedMotion = useReducedMotion();
    const { t } = useCopy();

    return (
        <button
            type="button"
            tabIndex={visible ? 0 : -1}
            aria-hidden={!visible}
            aria-label={t.moreMessagesLabel}
            onClick={() => window.scrollBy({ top: window.innerHeight * 0.7, behavior: reducedMotion ? "auto" : "smooth" })}
            className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-30 -translate-x-1/2 transition-opacity duration-300 ${
                visible ? "opacity-100" : "pointer-events-none opacity-0"
            }`}>
            <span className="scroll-hint flex items-center gap-1.5 rounded-full bg-accent py-2 ps-4 pe-3 text-[15px] font-semibold whitespace-nowrap text-canvas shadow-lg shadow-black/50">
                {t.moreMessages}
                <ChevronDown className="size-5" strokeWidth={2.5} aria-hidden="true" />
            </span>
        </button>
    );
}
