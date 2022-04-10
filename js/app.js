const container = document.querySelector(".container");
const coffees = [
	{
		name: "Como ler a bíblia?",
		image: "images/como_ler_a_biblia.jpg",
	},
	{
		name: "Como fazer seu devocional?",
		image: "images/devocional.jpg",
	},
	{
		name: "Culto Domingo",
		image: "images/culto_domingo.jpg",
	},
];
const showCoffees = () => {
	let output = "";
	coffees.forEach(
		({ name, image }) =>
			(output += `
              <div class="card" >
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
              </div>
              `)
	);
	container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
	window.addEventListener("load", function () {
		navigator.serviceWorker
			.register("/serviceWorker.js")
			.then((res) => console.log("service worker registered"))
			.catch((err) => console.log("service worker not registered", err));
	});
}
