import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
    const media = window.matchMedia(query);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
}

// Whether the visitor asked the OS for less motion (false while prerendering).
export function useReducedMotion() {
    return useSyncExternalStore(
        subscribe,
        () => window.matchMedia(query).matches,
        () => false,
    );
}
