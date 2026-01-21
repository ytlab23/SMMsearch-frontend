import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, u as unescapeHTML, h as addAttribute } from '../../chunks/astro/server_CJV_qxen.mjs';
import 'piccolore';
import { g as getAPIPath } from '../../chunks/utils_Dqhjze6i.mjs';
import { $ as $$PanelLayout } from '../../chunks/PanelLayout_Dzn49oZB.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://smmsearch.io/");
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUs;
  const pagesRes = await fetch(getAPIPath() + "api/pages.json");
  const allPagesFetch = pagesRes.ok ? await pagesRes.json() : [];
  var contactPageContent;
  for (let i = 0; i < allPagesFetch.length; i++) {
    if (allPagesFetch[i].pageTitle.toLowerCase().includes("contact")) {
      contactPageContent = allPagesFetch[i].pageContent;
    }
  }
  var form_message = "";
  var isFormSubmitted = false;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      isFormSubmitted = true;
      const response = await fetch(getAPIPath() + "api/messages.json", {
        method: "POST",
        body: data
      });
      const APIResponse = await response.json();
      if (APIResponse.message == "Message Saved into Database and Email is Sent.") {
        form_message = "Thank You for contacting us. We will reach out to soon!!";
        isFormSubmitted = true;
      } else {
        form_message = "A Problem occured. Your Message could not be sent.";
        isFormSubmitted = false;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
      isFormSubmitted = false;
    }
  }
  return renderTemplate(_a || (_a = __template(["", ' <script src="https://www.google.com/recaptcha/api.js" async defer></script> <style>\n    .content h1{\n        font-size: 22px;\n        font-weight: 600;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content h2{\n        font-size: 20px;\n        font-weight: 500;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content h3{\n        font-size: 19px;\n        font-weight: 500;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content h4{\n        font-size: 17px;\n        font-weight: 500;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content h5{\n        font-size: 16px;\n        font-weight: 500;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content h6{\n        font-size: 15px;\n        font-weight: 500;\n        padding-bottom: 15px;\n        padding-top: 10px;\n    }\n    .content ol{\n        list-style-type: decimal;\n        padding-left: 2rem;\n    }\n    .content p{\n        padding-bottom: 15px;\n    }\n\n    .content a{\n        color: blue;\n    }\n    .content a:hover{\n        text-decoration-line: underline;\n    }\n</style>'])), renderComponent($$result, "PanelLayout", $$PanelLayout, { "title": "Contact Us", "metaDescription": "" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="content-wrapper flex flex-wrap lg:justify-start justify-center gap-5 my-6 px-5"> <article class="leading-8"> <div class="content">${unescapeHTML(contactPageContent)}</div> </article> ${form_message != "" ? renderTemplate`<div class="responseMessage w-full flex justify-center items-center flex-col gap-3"> <p class="font-bold text-center text-3xl my-4">${form_message}</p> <a href="/" class="rounded px-4 py-2 bg-slate-700 text-white"><i class="fa-solid fa-house"></i> Home</a> </div>` : renderTemplate`<form method="post" class="flex flex-col justify-center items-center mt-3 w-full"> <div class="fields-container lg:w-1/2 w-full flex flex-col gap-3 bg-white p-4 rounded"> <h2 class="text-xl font-bold text-left w-full mb-4">Write your message - </h2> <input required class="border-green-500 border shadow-lg shadow-green-100 px-3 py-2 rounded-md" type="text" name="contact_name" id="contact_name" placeholder="Your Name"> <input required class="border-green-500 border shadow-lg shadow-green-100 px-3 py-2 rounded-md" type="email" name="contact_email" id="contact_email" placeholder="Email Address"> <textarea required class="border-green-500 border shadow-lg shadow-green-100 px-3 py-2 rounded-md min-h-32" name="contact_msg" id="contact_msg" placeholder="Your Message"></textarea> <!-- Captcha --> <div class="my-3 g-recaptcha flex justify-center"${addAttribute("6Le8LjAqAAAAAMLLuNUqUD_4_zXrhYaGCRP2gixw", "data-sitekey")}></div> <button id="userAddBtn" type="submit" class="size-fit w-auto my-2 px-5 py-3 text-white rounded-lg bg-[#44f570] hover:bg-[#37bc58] capitalize">
Send Message <i class="fa-solid fa-paper-plane-top"></i> </button> </div> </form>`} </div> ` }));
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/page/contact-us.astro", void 0);
const $$file = "/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/page/contact-us.astro";
const $$url = "/page/contact-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$ContactUs,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
