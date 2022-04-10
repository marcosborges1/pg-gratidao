const staticDevCoffee = "pg-gratidao";
const assets = [
	"/",
	"/index.html",
	"/css/style.css",
	"/js/app.js",
	"/images/como_ler_a_biblia.jpg",
	"/images/culto_domingo.jpg",
	"/images/devocional.jpg",
];

self.addEventListener("install", (installEvent) => {
	installEvent.waitUntil(
		caches.open(staticDevCoffee).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener("fetch", (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});
