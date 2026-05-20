const CACHE_NAME = 'friends-garage-v1';
const ARQUIVOS_CACHE = [
  './índex.html',
  './logo-friends-garage.jpeg',
  './logo-embed.js',
  './modelos-veiculos.js',
  './manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ARQUIVOS_CACHE).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const mesmoSite = url.origin === self.location.origin;

  if (mesmoSite) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const rede = fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => cached);
        return cached || rede;
      })
    );
    return;
  }

  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
