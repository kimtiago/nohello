"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";
import { useSiteConfig } from "@/i18n/use-copy";

export function Avatar() {
    const { photo } = useSiteConfig();
    const [failed, setFailed] = useState(false);

    // Decorative: the name is always right next to it
    return (
        <Image
            src={failed ? site.fallbackPhoto : photo}
            alt=""
            width={40}
            height={40}
            preload
            onError={() => setFailed(true)}
            className="size-10 shrink-0 rounded-full object-cover"
        />
    );
}
