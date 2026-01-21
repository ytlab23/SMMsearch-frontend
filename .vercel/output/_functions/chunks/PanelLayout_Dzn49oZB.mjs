import { e as createAstro, f as createComponent, k as renderComponent, h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate } from './astro/server_CJV_qxen.mjs';
import 'piccolore';
/* empty css                         */
import { $ as $$SEO, a as $$Navbar, b as $$Footer } from './Footer_BpMrZqEn.mjs';
import { g as getAPIPath } from './utils_Dqhjze6i.mjs';

const $$Astro = createAstro("https://smmsearch.io/");
const $$PanelLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PanelLayout;
  const siteDataRes = await fetch(getAPIPath() + "api/siteData.json");
  const allSiteFetch = siteDataRes.ok ? await siteDataRes.json() : [{
    SiteTitle: "SMM Search",
    siteMetaDescription: "",
    siteFavicon: { url: "/favicon.ico" },
    siteLog: { url: "" }
  }];
  const {
    title,
    metaDescription = allSiteFetch[0].siteMetaDescription,
    pageType = "website",
    pageFeaturedImage = allSiteFetch[0].siteFavicon.url,
    isCanonical = false
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "SEO", $$SEO, { "title": `${title} - ${allSiteFetch[0].SiteTitle}`, "description": metaDescription, "openGraph": {
    basic: {
      title: `${title} - ${allSiteFetch[0].SiteTitle}`,
      type: pageType,
      image: pageFeaturedImage
    }
  }, "twitter": {
    creator: "@Jack"
  }, "extend": {
    // extending the default link tags{allSiteFetch[0].siteFavicon.url} 
    link: [{ rel: "icon", href: allSiteFetch[0].siteFavicon.url }],
    // extending the default meta tags
    meta: [
      {
        name: "twitter:image",
        content: pageFeaturedImage
      },
      { name: "twitter:title", content: `${title} - ${allSiteFetch[0].SiteTitle}` },
      { name: "twitter:description", content: metaDescription }
    ]
  } })}<link rel="shortcut icon"${addAttribute(allSiteFetch[0].siteFavicon.url, "href")} type="image/x-icon"><link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.5.1/css/all.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, { "logoImgSrc": allSiteFetch[0].siteLog.url })} <div class="main-placeholder py-5 flex justify-center items-center bg-slate-100"> <div class="main-container lg:w-[1150px]"> <main class="lg:min-h-[80vh]"> ${renderSlot($$result, $$slots["default"])} <!-- Main Content Placeholder --> </main> </div> </div> ${renderComponent($$result, "Footer", $$Footer, { "siteTitle": allSiteFetch[0].SiteTitle })} </body></html>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/layouts/PanelLayout.astro", void 0);

export { $$PanelLayout as $ };
