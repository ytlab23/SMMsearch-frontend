import { f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
import { $ as $$SearchForm } from '../chunks/SearchForm_CooTtR6z.mjs';
import { g as getAPIPath } from '../chunks/utils_Dqhjze6i.mjs';
import { $ as $$PanelLayout } from '../chunks/PanelLayout_Dzn49oZB.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const siteDataRes = await fetch(getAPIPath() + "api/siteData.json");
  const allSiteFetch = siteDataRes.ok ? await siteDataRes.json() : [{ platformServiceCount: 20, SiteTitle: "SMM Search" }];
  const panelsRes = await fetch(getAPIPath() + "api/panels.json");
  const allPanels = panelsRes.ok ? await panelsRes.json() : [];
  let SMMService_APIData = [];
  let allPanelAPIs = [];
  allPanels.map(
    (panel) => allPanelAPIs.push([
      `${panel.panelAPILink}?key=${panel.panelAPIKey}&action=services`,
      panel.panelTitle,
      panel.panelWebsiteURL
    ])
  );
  for (let i = 0; i < 4; i++) {
    let panelServicesdata = [];
    try {
      panelServicesdata = await fetch(allPanelAPIs[i][0]).then(
        (Response) => Response.json()
      );
    } catch (error) {
      console.log("GET Request failed for-", allPanelAPIs[i][0]);
    }
    try {
      if (panelServicesdata.length == 0) {
        panelServicesdata = await fetch(allPanelAPIs[i][0], { method: "POST" }).then(
          (Response) => Response.json()
        );
      }
    } catch (error) {
      console.log("POST Request failed for-", allPanelAPIs[i][0]);
    }
    if (panelServicesdata.length > 0)
      SMMService_APIData.push([panelServicesdata, allPanelAPIs[i][1], allPanelAPIs[i][2]]);
  }
  let relevantServices = [];
  for (let j = 0; j < SMMService_APIData.length; j++) {
    for (let k = 0; k < SMMService_APIData[j][0].length; k++) {
      var temp = {
        serviceData: SMMService_APIData[j][0][k],
        serviceTitle: SMMService_APIData[j][1],
        serviceRefUrl: SMMService_APIData[j][2]
      };
      relevantServices.push(temp);
    }
  }
  let servicePageListCount = allSiteFetch[0].platformServiceCount || 20;
  return renderTemplate(_a || (_a = __template(["", ' <script src="/assets/scripts/search.js"><\/script> <script src="/assets/scripts/main.js"><\/script> <script>\n    allowServiceCardClick("#servicesWrapper")\n<\/script>'])), renderComponent($$result, "PanelLayout", $$PanelLayout, { "title": ` on ${allSiteFetch[0].SiteTitle}`, "metaDescription": `Search among Best SMM Panels, and SMM Services on ${allSiteFetch[0].SiteTitle}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper flex flex-wrap lg:justify-start justify-center gap-5 my-6 px-5"> <article class="flex flex-col gap-5 w-full"> <h1 class="searchResTitle text-2xl font-semibold"></h1> <div class="searchBox flex justify-center items-center"> <div class="wrapper w-1/2"> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "searchPagePath": "/search" })} </div> </div> <div class="searchResultsPanels hidden"> <h2 class="searchResTitle text-xl font-semibold">SMM Panels found:</h2> <div id="panelsWrapper" class="panelsWrapper flex lg:justify-start md:justify-center items-center flex-wrap gap-4 my-5"></div> </div> <div class="searchResultsServices hidden"> <h2 class="searchResTitle text-xl font-semibold">Services found:</h2> <div id="servicesWrapper" class="panelsWrapper flex lg:justify-start md:justify-center items-center flex-wrap gap-4 my-5"></div> </div> ${relevantServices.length > 0 ? renderTemplate`<div class="services hidden lg:min-h-[400px] flex flex-col justify-center items-center"> <h2 class="text-3xl font-semibold">Services</h2> <div class="services-table-holder shadow-2xl text-center mt-5 lg:w-full w-[89vw] overflow-auto"> <div class="table-wrapper md:w-full w-[900px]"> <span class="offerHeader w-full flex bg-[#36304a] font-semibold text-white"> <span class="offer_id my-6 w-[5%] pl-2">S.No</span> <span class="offer_service my-6 w-[41%]">Service</span> <span class="offer_Minorder my-6 w-[13.5%]">Min order</span> <span class="offer_Maxorder my-6 w-[13.5%]">Max order</span> <span class="offer_rate my-6 w-[13.5%]">Rate per 1000</span> <span class="offer_rate my-6 w-[13.5%]">SMM Panel</span> </span> ${relevantServices.map((smm_service, j) => renderTemplate`<span${addAttribute(["offerList w-full flex border-b border-gray-400", [
    j + 1 == 1 && "pageCounter",
    j + 1 > servicePageListCount && "hidden"
  ]], "class:list")}> <span class="offer_id line-clamp-1 my-3 w-[5%] pl-2"> ${j + 1} </span> <span class="offer_service line-clamp-1 my-3 w-[41%] text-left"${addAttribute(smm_service.serviceData.name, "title")}> ${smm_service.serviceData.name} </span> <span class="offer_Minorder line-clamp-1 my-3 w-[13.5%]"> ${smm_service.serviceData.min} </span> <span class="offer_Maxorder line-clamp-1 my-3 w-[13.5%]"> ${smm_service.serviceData.max} </span> <span class="offer_rate line-clamp-1 my-3 w-[13.5%]">
$${smm_service.serviceData.rate} </span> <span class="offer_panelTitle line-clamp-1 my-3 w-[13.5%]"> <a class="hover:underline hover:font-semibold"${addAttribute(smm_service.serviceRefUrl, "href")}>${smm_service.serviceTitle}</a> </span> </span>`)} </div> </div> ${relevantServices.length > servicePageListCount && renderTemplate`<div class="paginationHolder flex flex-col gap-3 w-full items-center my-5"${addAttribute(servicePageListCount, "data-pageSize")}> <div class="paginationBtns flex gap-3 items-center"> <div class="prevbtns flex justify-center items-center cursor-pointer rounded-full size-12 bg-slate-700 text-white border"> <i class="fa-duotone fa-chevrons-left"></i> </div> <div class="paginationInfo text-center"> <span class="rounded-lg p-4 h-full font-bold">
Showing Results
</span> <span class="pageNumber block"></span> </div> <div class="nextbtns flex justify-center items-center cursor-pointer rounded-full size-12 bg-slate-700 text-white border"> <i class="fa-duotone fa-chevrons-right"></i> </div> </div> </div>`} </div>` : renderTemplate`<h2 class="font-bold text-xl text-center">Sorry No Service Available right now for this Website.</h2>`} </article> </div> ` }));
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/search.astro", void 0);

const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Search,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
