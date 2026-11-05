// Public URL used for canonical/Open Graph links (build time): NEXT_PUBLIC_SITE_URL, else the production domain
// Vercel injects into every build, else localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const url = process.env.NEXT_PUBLIC_SITE_URL?.trim() || (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

const fallbackPhoto = "/avatar.svg";

// Next.js only inlines NEXT_PUBLIC_ values written out in full
const buildValues = {
    NEXT_PUBLIC_LANGUAGE: process.env.NEXT_PUBLIC_LANGUAGE,
    NEXT_PUBLIC_OWNER_NAME: process.env.NEXT_PUBLIC_OWNER_NAME,
    NEXT_PUBLIC_OWNER_PHOTO: process.env.NEXT_PUBLIC_OWNER_PHOTO,
    NEXT_PUBLIC_GIF_1_URL: process.env.NEXT_PUBLIC_GIF_1_URL,
    NEXT_PUBLIC_GIF_2_URL: process.env.NEXT_PUBLIC_GIF_2_URL,
};

type ConfigValues = Partial<Record<keyof typeof buildValues, string>>;

declare global {
    interface Window {
        __NOHELLO_CONFIG__?: ConfigValues; // only in the Docker image: written when the container starts (docker/apply-config.sh)
    }
}

// Only full http(s) URLs count: anything else is treated as not set.
function publicUrl(value?: string) {
    const url = value?.trim();
    return url && /^https?:\/\//.test(url) ? url : undefined;
}

function toConfig(override?: ConfigValues) {
    const value = (key: keyof ConfigValues) => override?.[key]?.trim() || buildValues[key];

    return {
        language: value("NEXT_PUBLIC_LANGUAGE"),
        owner: value("NEXT_PUBLIC_OWNER_NAME")?.trim() || undefined,
        photo: publicUrl(value("NEXT_PUBLIC_OWNER_PHOTO")) ?? fallbackPhoto,
        gifs: [publicUrl(value("NEXT_PUBLIC_GIF_1_URL")), publicUrl(value("NEXT_PUBLIC_GIF_2_URL"))],
    };
}

export const site = {
    url,
    repo: "https://github.com/kimtiago/nohello", // always the original project, also in copies of it
    fallbackPhoto,
};

// What the prerendered HTML was built with, and what applies in the browser. They only differ in the Docker image.
export const buildConfig = toConfig();
export const browserConfig = typeof window !== "undefined" && window.__NOHELLO_CONFIG__ ? toConfig(window.__NOHELLO_CONFIG__) : buildConfig;
