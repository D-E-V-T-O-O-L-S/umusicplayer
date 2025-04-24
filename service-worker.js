self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('media-player-cache').then(cache => {
      return cache.addAll(['index.html', 'app.webmanifest']);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
