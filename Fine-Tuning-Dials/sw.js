// sw.js
//
// Minimal offline-first service worker. Precaches every app asset on
// install and serves from cache first, falling back to the network (and
// updating the cache) on a miss. Deliberately a classic script (not a
// module) for the broadest possible service worker support.
//
// Bump CACHE_VERSION whenever any cached asset changes so clients pick up
// the update instead of serving stale files forever.
const CACHE_VERSION = 'ftd-v3';
const CACHE_NAME = `fine-tuning-dials-${CACHE_VERSION}`;

// All paths are relative so this works under a sub-path static server and,
// eventually, inside a Capacitor WebView (no absolute paths, no CORS-only
// origins).
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/variables.css',
  './css/base.css',
  './css/knob.css',
  './css/layout.css',
  './css/dialog.css',
  './js/app.js',
  './js/knob.js',
  './js/constants.js',
  './js/physics.js',
  './js/state.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
    })
  );
});
