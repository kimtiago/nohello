import { useEffect, useState, type RefObject } from "react";

/**
 * Becomes true (once, for good) when the element first scrolls into view.
 * `enabled: false` skips observing entirely.
 */
export function useInView(ref: RefObject<HTMLElement | null>, { threshold = 0, rootMargin = "0px", enabled = true } = {}) {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || !enabled) return;

        const show = () => {
            setInView(true);
            cleanup();
        };
        const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && show(), { threshold, rootMargin });
        // A fast jump (End key, flick, anchor) can skip right past the element without it ever intersecting
        const onScroll = () => node.getBoundingClientRect().bottom < 0 && show();
        const cleanup = () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };

        observer.observe(node);
        window.addEventListener("scroll", onScroll, { passive: true });
        return cleanup;
    }, [ref, enabled, threshold, rootMargin]);

    return inView;
}
