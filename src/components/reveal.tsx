"use client";

import { useRef } from "react";
import { useInView } from "@/lib/use-in-view";

type RevealProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "li" | "article";
};

// Fades/slides its children in the first time they scroll into view (styles in globals.css).
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const visible = useInView(ref, { rootMargin: "0px 0px -10% 0px" });

    return (
        <Tag
            ref={ref as React.Ref<never>}
            data-reveal=""
            data-visible={visible}
            className={className}
            style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}>
            {children}
        </Tag>
    );
}
