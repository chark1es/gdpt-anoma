import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-decap-cms";
import mdx from "@astrojs/mdx";
import decapCmsOauth from "astro-decap-cms-oauth";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [decapCmsOauth(), tailwind(), mdx()],
    output: "server",
    adapter: cloudflare()
});
