// The service worker for Ultraviolet
// This handles the requests for the proxy

importScripts("ocu/uv.bundle.js");
importScripts("ocu/uv.config.js");
importScripts(__uv$config.sw || "ocu/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));