self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('reservoir-v1').then(cache =>
      cache.addAll([
        '/Raymond-s-Reservoir/',
        '/Raymond-s-Reservoir/index.html'
      ])
    )
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
