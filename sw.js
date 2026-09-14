const CACHE='salgados-de-gourmet-v3';
const ASSETS=['/','/index.html','/manifest.json','/pwabuilder-icon-72x72.png','/pwabuilder-icon-96x96.png','/pwabuilder-icon-128x128.png','/pwabuilder-icon-144x144.png','/pwabuilder-icon-152x152.png','/pwabuilder-icon-192x192.png','/pwabuilder-icon-384x384.png','/pwabuilder-icon-512x512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE?caches.delete(k):null))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('/'))))});