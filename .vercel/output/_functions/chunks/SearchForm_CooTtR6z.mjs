import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CJV_qxen.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://smmsearch.io/");
const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchForm;
  const { searchPagePath } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="searchBox my-5"> <form onsubmit="return validateSearchForm()"${addAttribute(searchPagePath, "action")} name="searchPanel" class="relative flex gap-3 items-center"> <input type="text" name="q" required id="searchQuery" class="w-full px-3 py-2 text-gray-800 rounded-lg shadow-xl" placeholder="Search Youtube Services"> <i class="fa-solid fa-magnifying-glass absolute right-7 text-blue-500"></i> </form> </div>`;
}, "/Users/niangamadou888/Documents/SMMsearch-frontend/src/components/SearchForm.astro", void 0);

export { $$SearchForm as $ };
