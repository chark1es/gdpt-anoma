import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-decap-cms";
import mdx from "@astrojs/mdx";
import { decapCmsOauth } from "astro-decap-cms-oauth";

// https://astro.build/config
export default defineConfig({
    integrations: [
        decapCmsOauth(),
        
        tailwind(),
        mdx()
    ]
    output: "server",
});

export interface DecapCMSOptions {
  adminRoute?: string;
  oauthDisabled?: boolean;
  oauthLoginRoute?: string;
  oauthCallbackRoute?: string;
}

const defaultOptions: DecapCMSOptions = {
  adminRoute: "/admin",
  oauthDisabled: false,
  oauthLoginRoute: "/oauth",
  oauthCallbackRoute: "/oauth/callback",
}; 