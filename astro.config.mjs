import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const site = "https://tabstr.net";

export default defineConfig({
  site,
  trailingSlash: "always",
  redirects: {
    "/preguntas-frecuentes": "/faq/",
    "/blog/article": "/blog/tu-pos-no-es-lealtad/",
  },
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes("/brief") &&
        !page.includes("/blog/article") &&
        !page.includes("/preguntas-frecuentes"),
      changefreq: "weekly",
      serialize(item) {
        item.lastmod = new Date();
        if (item.url === `${site}/` || item.url === `${site}`) {
          item.priority = 1;
        }
        return item;
      },
    }),
  ],
});
