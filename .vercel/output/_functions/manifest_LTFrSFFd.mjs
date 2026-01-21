import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CJV_qxen.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CGHNj-Dd.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/","cacheDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/node_modules/.astro/","outDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/dist/","srcDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/src/","publicDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/public/","buildClientDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/dist/client/","buildServerDir":"file:///Users/niangamadou888/Documents/SMMsearch-frontend/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/page/contact-us","isIndex":false,"type":"page","pattern":"^\\/page\\/contact-us\\/?$","segments":[[{"content":"page","dynamic":false,"spread":false}],[{"content":"contact-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/page/contact-us.astro","pathname":"/page/contact-us","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/services/search","isIndex":false,"type":"page","pattern":"^\\/services\\/search\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/search.astro","pathname":"/services/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B5co3ogI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://smmsearch.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/page/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/page/contact-us.astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/panels/[...page].astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/panels/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/search.astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/services/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["/Users/niangamadou888/Documents/SMMsearch-frontend/src/pages/services/search.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/page/contact-us@_@astro":"pages/page/contact-us.astro.mjs","\u0000@astro-page:src/pages/page/[slug]@_@astro":"pages/page/_slug_.astro.mjs","\u0000@astro-page:src/pages/panels/[slug]@_@astro":"pages/panels/_slug_.astro.mjs","\u0000@astro-page:src/pages/panels/[...page]@_@astro":"pages/panels/_---page_.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/services/search@_@astro":"pages/services/search.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_LTFrSFFd.mjs","/Users/niangamadou888/Documents/SMMsearch-frontend/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DDe5q5xo.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.B5co3ogI.css","/favicon.svg","/robots.txt","/assets/images/Sitejabber_logo.png","/assets/images/admin-cover1.jpg","/assets/images/admin-cover2.jpg","/assets/images/admin-cover3.jpg","/assets/images/adminFav.png","/assets/images/auth-decoration.png","/assets/images/banner.avif","/assets/images/bg.webp","/assets/images/cover.avif","/assets/images/cover.png","/assets/images/cover.webp","/assets/images/favicon.png","/assets/images/icons.png","/assets/images/laptop-frame.png","/assets/images/login.png","/assets/images/logo-placeholder-image.png","/assets/images/logo.png","/assets/images/no-image-available.jpg","/assets/images/placeholderImage.jpg","/assets/images/reviewsLogo.webp","/assets/images/trustpilotlogo.webp","/assets/images/usericon.png","/assets/scripts/dashboard.js","/assets/scripts/main.js","/assets/scripts/search.js","/assets/scripts/searchServices.js","/assets/styles/stylesheet.css"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"jxFEYsj4sZXotIZE6ZmovzxGTsXDDezQ0BVEhVTXvH0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
