
const CACHE = "z81c-app-v1";
const FILES = [
  "index.html",
  "styles.css",
  "main.js",
  "manifest.json",
  "logo.png"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
