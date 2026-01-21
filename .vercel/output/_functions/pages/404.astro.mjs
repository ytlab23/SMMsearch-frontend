import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
import { $ as $$PanelLayout } from '../chunks/PanelLayout_Dzn49oZB.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PanelLayout", $$PanelLayout, { "title": "Page Not Found", "metaDescription": `Page Not Found` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper flex flex-wrap lg:justify-start justify-center gap-5 my-6 px-5"> <div class="404Content py-8 gap-y-7 size-full flex flex-col justify-center items-center"> <h1 class="text-2xl">OOOOPS!! ERROR 404 </h1> <span class="text-4xl">PAGE NOT FOUND</span> <p>It might has been removed, renamed Or temporarily unavailable. Let's go to home!</p> <a href="/" class="rounded px-4 py-2 bg-slate-700 text-white"><i class="fa-solid fa-house"></i> Home</a> </div> </div> ` })}`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/404.astro", void 0);

const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
