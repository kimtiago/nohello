"use client";

import Image from "next/image";
import { useState } from "react";
import { Bubble } from "@/components/bubble";
import { Reveal } from "@/components/reveal";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type MemeProps = {
    src?: string;
    time: string;
};

// A GIF sent by the owner, from a configurable URL. Purely decorative: without a URL, if it can't load, or for anyone who
// asked for less motion, the message simply isn't there.
export function Meme({ src, time }: MemeProps) {
    const [failed, setFailed] = useState(false);
    const reducedMotion = useReducedMotion();

    if (!src || failed || reducedMotion) return null;

    return (
        <div aria-hidden="true">
            <Reveal className="flex justify-start">
                <Bubble from="owner" time={time} className="p-1.5">
                    {/* Fixed shape, since the GIF can be any size: the page doesn't jump when it loads */}
                    <span className="relative block aspect-video w-64 max-w-full overflow-hidden rounded-xl">
                        <Image
                            src={src}
                            alt=""
                            fill
                            sizes="256px"
                            loading="eager"
                            onError={() => setFailed(true)}
                            className="object-cover"
                        />
                        <span className="absolute bottom-1.5 left-1.5 rounded bg-black/60 px-1.5 text-xs font-bold text-white">GIF</span>
                    </span>
                </Bubble>
            </Reveal>
        </div>
    );
}
