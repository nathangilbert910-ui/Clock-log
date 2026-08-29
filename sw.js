// Minimal service worker — just enough to satisfy Chrome's installability
// requirements. It doesn't cache anything; every request still goes to
// the network as normal.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
