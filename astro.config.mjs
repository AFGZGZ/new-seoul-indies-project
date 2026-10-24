// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "IBMPlexMono-Regular",
      cssVariable: "--font-ibm-plex-mono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/IBMPlexMono-Regular.ttf"],
            weight: "400",
            style: "normal",
          },
        ],
      },
    },
  ],
});
