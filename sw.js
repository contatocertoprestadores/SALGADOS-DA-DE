const CACHE_NAME='salgados-de-v1';
const urlsToCache=['/','/manifest.json','/pwabuilder-icon-192x192.png','/pwabuilder-icon-512x512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
