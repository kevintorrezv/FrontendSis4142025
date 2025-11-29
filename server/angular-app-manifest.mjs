
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contactos"
  },
  {
    "renderMode": 2,
    "route": "/producto"
  },
  {
    "renderMode": 2,
    "route": "/fabricantes"
  },
  {
    "renderMode": 2,
    "route": "/escobas"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 708, hash: 'd507c58661f3a1fa13de396faf0a3ac9b524f46d5d0f7c8db732c788a8f47c81', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1110, hash: 'e6c1f0f29e4dbea9706732f9d944a1437f349a6c8e82a04168911c63a8634cea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8854, hash: '631b9eecf43648670664c20755d9dc4a405c4213b6ed485a6b4203f4790b0ceb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contactos/index.html': {size: 6681, hash: '548e021245f4ccb237cc3b967109e39e73739cfaacc6150cd885b867c87ac967', text: () => import('./assets-chunks/contactos_index_html.mjs').then(m => m.default)},
    'fabricantes/index.html': {size: 8581, hash: 'b1576347aadd11f4f856fef352e92a3db6eccb60a5c516f17a9c812d2bcfe3e3', text: () => import('./assets-chunks/fabricantes_index_html.mjs').then(m => m.default)},
    'producto/index.html': {size: 4733, hash: '248fd9016f8675bb08d99499faacdd1211a759c4418a67e887206bd0637c0866', text: () => import('./assets-chunks/producto_index_html.mjs').then(m => m.default)},
    'escobas/index.html': {size: 5539, hash: '77c2458d05f9850135fa4a7beb4e87ad80a2ae76055929126db272fcc8765885', text: () => import('./assets-chunks/escobas_index_html.mjs').then(m => m.default)},
    'styles-ONMZYPPO.css': {size: 2273, hash: '5rtboTbIZT8', text: () => import('./assets-chunks/styles-ONMZYPPO_css.mjs').then(m => m.default)}
  },
};
