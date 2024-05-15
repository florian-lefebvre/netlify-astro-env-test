import { e as createComponent, r as renderTemplate, g as addAttribute, i as renderHead, h as createAstro } from '../astro_DnZpA14c.mjs';

const PUBLIC_NETLIFY = false;

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const vars = {
    PUBLIC_FOO: null,
    PUBLIC_NETLIFY,
    PUBLIC_DEPLOY_URL: null
  };
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> <pre>${JSON.stringify(vars, null, 2)}</pre> </body></html>`;
}, "C:/Users/Admin/Documents/github/__tests/netlify-astro-env-test/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Documents/github/__tests/netlify-astro-env-test/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
