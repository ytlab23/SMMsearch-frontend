import { e as createAstro, f as createComponent } from '../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
import 'clsx';
import { g as getAPIPath } from '../chunks/utils_Dqhjze6i.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://smmsearch.io/");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const siteDataRes = await fetch(getAPIPath() + "api/siteData.json");
  const siteData = siteDataRes.ok ? await siteDataRes.json() : [{ adminPath: "/" }];
  return Astro2.redirect(siteData[0].adminPath);
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/admin.astro", void 0);

const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Admin,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
