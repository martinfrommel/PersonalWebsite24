import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://martin.frommel.cz",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"]
      }
    }),
  ],
});
