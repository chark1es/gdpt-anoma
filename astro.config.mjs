import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-decap-cms";
import mdx from "@astrojs/mdx";
import DecapCMS from "astro-decap-cms";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [
        DecapCMS({
            config: {
                backend: {
                    name: "git-gateway",
                    branch: "main"
                },
                collections: [
                    // Announcements
                    {
                        name: "announcements",
                        label: "Announcements",
                        folder: "content/announcements",
                        create: true,
                        fields: [
                            {
                                label: "Title",
                                name: "title",
                                widget: "string"
                            },
                            {
                                label: "Description",
                                name: "description",
                                widget: "string"
                            },
                            {
                                label: "Body",
                                name: "body",
                                widget: "markdown"
                            },
                            {
                                label: "Publish Date",
                                name: "pubDate",
                                widget: "datetime"
                            }
                        ]
                    }
                ]
            }
        }),
        tailwind(),
        mdx()
    ],
    output: "server",
    adapter: cloudflare()
});
