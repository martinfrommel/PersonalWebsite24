import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://martin.frommel.cz",
  integrations: [tailwind({
    applyBaseStyles: false
  }), icon(), sitemap()]
});