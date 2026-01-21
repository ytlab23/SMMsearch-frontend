import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Llz0Edw0.mjs';
import { manifest } from './manifest_LTFrSFFd.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/page/contact-us.astro.mjs');
const _page4 = () => import('./pages/page/_slug_.astro.mjs');
const _page5 = () => import('./pages/panels/_slug_.astro.mjs');
const _page6 = () => import('./pages/panels/_---page_.astro.mjs');
const _page7 = () => import('./pages/search.astro.mjs');
const _page8 = () => import('./pages/services/search.astro.mjs');
const _page9 = () => import('./pages/services/_slug_.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin.astro", _page2],
    ["src/pages/page/contact-us.astro", _page3],
    ["src/pages/page/[slug].astro", _page4],
    ["src/pages/panels/[slug].astro", _page5],
    ["src/pages/panels/[...page].astro", _page6],
    ["src/pages/search.astro", _page7],
    ["src/pages/services/search.astro", _page8],
    ["src/pages/services/[slug].astro", _page9],
    ["src/pages/services/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "85a2a0c1-9c39-4723-8816-63d520e2c306",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
