// Renders the favicon PNG and the link preview image from src/app/icon.svg. Run it after changing the SVG:
// node scripts/generate-images.mjs
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const icon = await readFile("src/app/icon.svg");

await sharp(icon, { density: 192 }).resize(192, 192).png().toFile("src/app/icon.png");

const background = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs>
        <radialGradient id="glow">
            <stop offset="0" stop-color="#1c7a5c" />
            <stop offset="1" stop-color="#0d1a16" />
        </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#0d1a16" />
    <ellipse cx="600" cy="315" rx="520" ry="400" fill="url(#glow)" />
</svg>`;
const mark = await sharp(icon, { density: 300 }).resize(460, 460).png().toBuffer();

await sharp(Buffer.from(background))
    .composite([{ input: mark, gravity: "center" }])
    .png()
    .toFile("src/app/opengraph-image.png");
