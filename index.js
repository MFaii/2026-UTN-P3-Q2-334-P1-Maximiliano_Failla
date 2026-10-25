const superdeportivos = [
	{
		modelo: "Aston Martin DB11",
		imagen: "aston-martin-db11.png",
		categoria: "Superdeportivo",
	},
	{
		modelo: "Audi R8",
		imagen: "audi-r8.png",
		categoria: "Superdeportivo",
	},
	{
		modelo: "Chevrolet Corvette",
		imagen: "chevrolet-corvette.png",
		categoria: "Superdeportivo",
	},
	{
		modelo: "Ford Mustang",
		imagen: "ford-mustang.png",
		categoria: "Superdeportivo",
	},
	{
		modelo: "Mercedes-Benz AMG",
		imagen: "mercedes-benz-amg.png",
		categoria: "Superdeportivo",
	},
	{
		modelo: "Porsche 911",
		imagen: "porsche-911.png",
		categoria: "Superdeportivo",
	},
];

const deportivos = [
	{
		modelo: "Audi A3",
		imagen: "audi-a3.png",
		categoria: "Deportivo",
	},
	{
		modelo: "Chevrolet Cruze",
		imagen: "chevrolet-cruze.png",
		categoria: "Deportivo",
	},
	{
		modelo: "Fiat Cronos",
		imagen: "fiat-kronnos.png",
		categoria: "Deportivo",
	},
	{
		modelo: "Nissan Sentra",
		imagen: "nissan-sentra.png",
		categoria: "Deportivo",
		descripcion: "Líneas afiladas y equipamiento tecnológico de vanguardia.",
	},
	{
		modelo: "Toyota Corolla",
		imagen: "toyota-corolla.png",
		categoria: "Deportivo",
	},
	{
		modelo: "Volkswagen Golf",
		imagen: "volkswagen-golf.png",
		categoria: "Deportivo",
	},
];

const CarCard = (vehiculo, path) => {
	return `
    <article class="car-card">
      <div class="card-img-wrapper">
        <img src="assets/${path}/${vehiculo.imagen}" alt="${vehiculo.modelo}" loading="lazy" />
      </div>
      <div class="card-content">
          <span class="badge">${vehiculo.categoria}</span>
            <h3>${vehiculo.modelo}</h3>
      </div>
    </article>
  `;
};

const renderizarCatalogos = () => {
	const contenedorSuperdeportivos = document.getElementById("grid-superdeportivos");
	const contenedorDeportivos = document.getElementById("grid-deportivos");

	if (contenedorSuperdeportivos) {
		contenedorSuperdeportivos.innerHTML = superdeportivos.map((auto) => CarCard(auto, "premiums-y-superdeportivos")).join("");
	}

	if (contenedorDeportivos) {
		contenedorDeportivos.innerHTML = deportivos.map((auto) => CarCard(auto, "nobles-y-deportivos")).join("");
	}
};

document.addEventListener("DOMContentLoaded", renderizarCatalogos);
