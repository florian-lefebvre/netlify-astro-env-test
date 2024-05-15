import { defineConfig, envField } from 'astro/config';
import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
    output: "server",
    adapter: netlify({
        imageCDN: false,
        inlineBuildVariables: true
    }),
    experimental: {
        env: {
            schema: {
                PUBLIC_FOO: envField.string({ context: "client", access: "public", optional: true })
            }
        }
    }
});
