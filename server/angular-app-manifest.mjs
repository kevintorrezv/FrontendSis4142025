
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FrontendSis4142025"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis4142025/contactos"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis4142025/producto"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis4142025/fabricantes"
  },
  {
    "renderMode": 2,
    "route": "/FrontendSis4142025/escobas"
  },
  {
    "renderMode": 2,
    "redirectTo": "/FrontendSis4142025",
    "route": "/FrontendSis4142025/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 727, hash: '1808332058d32590a13c3425771d2dce3ac8556e1b30b4566e1240511f695d29', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1129, hash: '00ff03af251b7ac11aec940842ebd02a350606cab7ea56bef77a386f2e72ddc6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'FrontendSis4142025/index.html': {size: 9025, hash: 'f82fbec92baab71ad3857fb0f98415a6fda4d3f167e9469b3b7dfc729de29bd9', text: () => import('./assets-chunks/FrontendSis4142025_index_html.mjs').then(m => m.default)},
    'FrontendSis4142025/contactos/index.html': {size: 6814, hash: '9aee8755da29fda4b107d6d9d716f5433b18f6971fc1a8856066038bb84864c8', text: () => import('./assets-chunks/FrontendSis4142025_contactos_index_html.mjs').then(m => m.default)},
    'FrontendSis4142025/escobas/index.html': {size: 5672, hash: 'c00727a92db73399abe08b3cbdd507dc1a062f9cc6d7cfc37354526f77b06ebb', text: () => import('./assets-chunks/FrontendSis4142025_escobas_index_html.mjs').then(m => m.default)},
    'FrontendSis4142025/fabricantes/index.html': {size: 8714, hash: '71dce68d1c8836f7e6a11815863d80381f51698fc3cbf351fd0c661a8a7564d9', text: () => import('./assets-chunks/FrontendSis4142025_fabricantes_index_html.mjs').then(m => m.default)},
    'FrontendSis4142025/producto/index.html': {size: 4866, hash: 'df5010100b3926ddc006bb52274a57569f72bf5e52b2b7f1cdd2c73118a08b47', text: () => import('./assets-chunks/FrontendSis4142025_producto_index_html.mjs').then(m => m.default)},
    'styles-ONMZYPPO.css': {size: 2273, hash: '5rtboTbIZT8', text: () => import('./assets-chunks/styles-ONMZYPPO_css.mjs').then(m => m.default)}
  },
};
