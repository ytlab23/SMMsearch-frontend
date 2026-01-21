import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, o as renderSlot, r as renderTemplate, k as renderComponent, n as renderHead, u as unescapeHTML } from '../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
import { $ as $$SEO, a as $$Navbar, b as $$Footer } from '../chunks/Footer_BpMrZqEn.mjs';
import { g as getAPIPath, r as removeHTMLTags, J as JSONConvertToHTML, o as optimizeImageUrl } from '../chunks/utils_Dqhjze6i.mjs';
import { $ as $$SearchForm } from '../chunks/SearchForm_CooTtR6z.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://smmsearch.io/");
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroSection;
  const { headerBgImgSrc = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero relative lg:h-[50vh] text-white"> <img${addAttribute(
    headerBgImgSrc != "" ? headerBgImgSrc : "/assets/images/cover.avif",
    "src"
  )} alt="top background banner image" class="size-full object-cover absolute z-0 select-none brightness-50 pointer-events-none"> <div class="hero-content relative size-full p-4 flex justify-center items-center Z-[1]"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/components/HeroSection.astro", void 0);

const $$Astro$1 = createAstro("https://smmsearch.io/");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const siteDataRes = await fetch(getAPIPath() + "api/siteData.json");
  const allSiteFetch = siteDataRes.ok ? await siteDataRes.json() : [{
    SiteTitle: "SMM Search",
    siteMetaDescription: "",
    siteFavicon: { url: "/favicon.ico" },
    siteLog: { url: "" },
    homeBackgroundImage: { url: "" }
  }];
  const {
    title,
    metaDescription = allSiteFetch[0].siteMetaDescription,
    isCanonical = false,
    pageType = "website"
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "SEO", $$SEO, { "title": `${title} - ${allSiteFetch[0].SiteTitle}`, "description": metaDescription, "openGraph": {
    basic: {
      title: `${title} - ${allSiteFetch[0].SiteTitle}`,
      type: pageType,
      image: allSiteFetch[0].siteFavicon.url
    }
  }, "twitter": {
    creator: "@Jack"
  }, "extend": {
    // extending the default link tags{allSiteFetch[0].siteFavicon.url}
    link: [{ rel: "icon", href: allSiteFetch[0].siteFavicon.url }],
    // extending the default meta tags
    meta: [
      { name: "twitter:title", content: `${title} - ${allSiteFetch[0].SiteTitle}` },
      { name: "twitter:description", content: metaDescription }
    ]
  } })}<link rel="shortcut icon"${addAttribute(allSiteFetch[0].siteFavicon.url, "href")} type="image/x-icon"><link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, { "logoImgSrc": allSiteFetch[0].siteLog.url })} ${renderComponent($$result, "HeroSection", $$HeroSection, { "headerBgImgSrc": allSiteFetch[0].homeBackgroundImage.url }, { "default": async ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["heroContent"])} ` })} <div class="main-placeholder py-5 flex justify-center items-center bg-slate-100"> <div class="main-container lg:w-[1150px]"> ${renderSlot($$result, $$slots["default"])} <!-- Main Content Placeholder --> </div> </div> ${renderComponent($$result, "Footer", $$Footer, { "siteTitle": allSiteFetch[0].SiteTitle })} </body></html>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://smmsearch.io/");
const $$SMMPanelCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SMMPanelCards;
  const { imageSrc, panelTitle, descriptionText, slugURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="post p-5 rounded-lg flex gap-3 shadow-lg border border-gray-200 bg-white"> <img${addAttribute(
    imageSrc != "" ? imageSrc : "/assets/images/no-image-available.jpg",
    "src"
  )} alt="" class="rounded-lg w-1/4 object-fill object-left"> <span class="details w-3/4"> <h3 class="text-blue-600 font-semibold"><a${addAttribute("/panels/" + slugURL, "href")}>${panelTitle}</a></h3> <span class="textContent line-clamp-2">${unescapeHTML(removeHTMLTags(JSONConvertToHTML(descriptionText)).substring(0, 120))}</span> <a${addAttribute("/panels/" + slugURL, "href")} class="linkbtn block w-fit p-1 px-2 my-1 rounded-xl text-black border hover:text-white hover:bg-[#3838be] hover:shadow-lg hover:underline"><i class="fa-solid fa-arrow-right"></i> Know more...</a> </span> </article>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/components/SMM_panelCards.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const siteDataRes = await fetch(getAPIPath() + "api/siteData.json");
  const allSiteFetch = siteDataRes.ok ? await siteDataRes.json() : [{ homeHeaderText: "Welcome", homeHeaderPara: "", homePanelCount: 6 }];
  const allServicesFetch = await fetch(getAPIPath() + "api/services.json");
  const allServiceRes = allServicesFetch.ok ? await allServicesFetch.json() : [];
  const allPanels = await fetch(getAPIPath() + "api/panels.json");
  const responsePanels = allPanels.ok ? await allPanels.json() : [];
  const sidebarRes = await fetch(getAPIPath() + "api/sidebarWidgets.json");
  const allSidebarWidgetsFetch = sidebarRes.ok ? await sidebarRes.json() : [];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n\n	const searchBox = document.getElementById("searchQuery");\n	function validateSearchForm() {\n		if(searchBox.value === ""){\n			return false;\n		}\n		else\n			return true;\n	}\n\n<\/script>'])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="w-full flex flex-col md:flex-row gap-5"> <!-- SMM Panels Listing --> <section class="panel-container lg:mb-14 lg:w-[60%] lg:p-0 p-5"> ${responsePanels.length > 0 ? renderTemplate`<div class="header flex justify-between items-center gap-2 w-full my-4"> <span> <h2 class="text-xl font-semibold">Latest SMM Panels</h2> <p>Explore the most recently added SMM Panels and more...</p> </span> <a class="w-[15%] text-right hover:font-semibold hover:underline" href="/panels">See all</a> </div>

					<div class="wrapper flex justify-center items-center flex-wrap gap-5"> ${responsePanels.reverse().slice(0, allSiteFetch[0].homePanelCount).map((panel) => renderTemplate`${renderComponent($$result2, "SMM_panelCards", $$SMMPanelCards, { "descriptionText": panel.panelTextDescrition, "imageSrc": panel.paneFeaturedImage == null ? "" : optimizeImageUrl(panel.paneFeaturedImage.url, 250), "panelTitle": panel.panelTitle, "slugURL": panel.panelSlug })}`)} </div>` : renderTemplate`<h2 class="text-xl font-semibold text-center">No Panel is there at the moment.</h2>`} </section> <aside class="lg:w-[40%] p-5 flex flex-col gap-y-4"> <div class="services-cloud-container bg-white p-3 rounded-md"> ${// servicePlatformsData.length > 0
  allServiceRes.length > 0 ? renderTemplate`<div class="header flex justify-between items-center w-full"> <span class="w-full"> <h2 class="text-xl font-semibold text-center">
All Services
</h2> </span> </div>

					<div class="services-cloud flex flex-wrap gap-3 text-white"> ${allServiceRes.slice(0, 20).map((panel_service) => renderTemplate`<a${addAttribute("/services/" + panel_service.serviceTitle.toLowerCase().replaceAll(" ", "-"), "href")} class="px-4 capitalize py-2 rounded-md cursor-pointer hover:brightness-110"${addAttribute(`background-color: ${panel_service.serviceColor}`, "style")}>${panel_service.serviceTitle}</a>`)} ${allServiceRes.length > 20 && renderTemplate`<a href="/services/" class="px-4 text-black capitalize py-2 border-2 border-gray-700 rounded-md cursor-pointer hover:brightness-110">Show All</a>`} <!-- {
							servicePlatformsData.map((service) => (
								<a class="px-4 capitalize py-2 rounded-md cursor-pointer" style={\`background-color: \${service.color}\`}
								>{service.platform}</a>
							))
						}  --> </div>` : renderTemplate`<h2 class="text-xl font-semibold text-center">No Services Listed at the Moment</h2>`} </div> ${allSidebarWidgetsFetch.map((widget) => renderTemplate`<div class="widget-container bg-white p-3 rounded-md text-center">${unescapeHTML(widget.widgetCodeBlock)}</div>`)} <div class="top-panel-container bg-white p-3 rounded-md hidden"> <div class="header flex justify-between items-center w-full"> <span class="w-full"> <h2 class="text-xl font-semibold text-center">
Top SMM Panels
</h2> </span> </div> <div class="top-panel"> <ul> <li> <a class="flex gap-3 items-center" href=""> <img src="https://cdn.comparesmm.com/favicons/smmturk.png" class="rounded-full size-10"> <span class="font-semibold">SMMTurk</span> </a> </li> <li> <a class="flex gap-3 items-center" href=""> <img src="https://cdn.comparesmm.com/favicons/smm-cost.png" class="rounded-full size-10"> <span class="font-semibold">SMM Cost</span> </a> </li> <li> <a class="flex gap-3 items-center" href=""> <img src="https://cdn.comparesmm.com/favicons/bulkfollows.png" class="rounded-full size-10"> <span class="font-semibold">Bulkfollows</span> </a> </li> <li> <a class="flex gap-3 items-center" href=""> <img src="https://cdn.comparesmm.com/favicons/crescitaly.png" class="rounded-full size-10"> <span class="font-semibold">Crescitaly</span> </a> </li> <li> <a class="flex gap-3 items-center" href=""> <img src="https://cdn.comparesmm.com/favicons/global-smm.png" class="rounded-full size-10"> <span class="font-semibold">Global SMM</span> </a> </li> </ul> </div> </div> </aside> </main> `, "heroContent": async ($$result2) => renderTemplate`<div class="indexHero text-center lg:w-2/4"> <h1 class="text-3xl font-bold my-5">${allSiteFetch[0].homeHeaderText}</h1> <p class="my-5">${allSiteFetch[0].homeHeaderPara}</p> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "searchPagePath": "/search" })} </div>` }));
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/index.astro", void 0);

const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
