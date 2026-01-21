import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
import { $ as $$PanelLayout } from '../chunks/PanelLayout_Dzn49oZB.mjs';
import 'clsx';
import { $ as $$SearchForm } from '../chunks/SearchForm_CooTtR6z.mjs';
import { g as getAPIPath, o as optimizeImageUrl } from '../chunks/utils_Dqhjze6i.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://smmsearch.io/");
const $$SMMServicesCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SMMServicesCards;
  const { title, servicesCount = 0, imageLogoPath } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="cursor-pointer hover:bg-white flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:text-left text-center gap-2 lg:w-[32%] w-[47%] p-3 border rounded-md shadow-md hover:shadow-2xl"> <a${addAttribute("/services/" + title.toLowerCase().replaceAll(" ", "-"), "href")}><img${addAttribute(title, "alt")} class="rounded-lg size-20"${addAttribute(imageLogoPath, "src")}></a> <span> <h2 class="font-semibold hover:underline"><a${addAttribute("/services/" + title.toLowerCase().replaceAll(" ", "-"), "href")}>${title}</a></h2> ${servicesCount > 0 && renderTemplate`<span class="block">${servicesCount} Services</span>`} </span> </article>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/components/SMM_servicesCards.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let platformsServiceCount = [];
  const allServicesFetch = await fetch(getAPIPath() + "api/services.json");
  const allServiceRes = await allServicesFetch.json();
  for (let i = 0, counter = 0; i < allServiceRes.length; i++, counter++) {
    platformsServiceCount.push([allServiceRes[i].serviceTitle, 0]);
  }
  return renderTemplate(_a || (_a = __template(["", ' <script src="/assets/scripts/main.js"><\/script> <script>\n    allowServiceCardClick(".content-wrapper")\n<\/script>'])), renderComponent($$result, "PanelLayout", $$PanelLayout, { "title": "List of all Services", "metaDescription": "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-bold text-center text-2xl">Available Social Media Marketing Services</h1> <div class="searchBox flex justify-center items-center"> <div class="wrapper w-1/2"> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "searchPagePath": "/services/search" })} </div> </div> <div class="content-wrapper flex flex-wrap lg:justify-start justify-center gap-5 my-6 px-5"> ${allServiceRes.map((service, index) => renderTemplate`${renderComponent($$result2, "SMM_ServicesCards", $$SMMServicesCards, { "servicesCount": platformsServiceCount[index][1], "title": service.serviceTitle, "imageLogoPath": optimizeImageUrl(service.serviceLogo.url) })}`)} </div> ` }));
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/services/index.astro", void 0);

const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
