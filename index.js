const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("form");
const container = document.getElementById("container");
const error = document.getElementById("error");
const inputNumber = document.getElementById("input-number");

form.addEventListener("submit", searchPizza);

function searchPizza(e) {
  e.preventDefault();

  const inputValue = parseInt(inputNumber.value);

  if (isNaN(inputValue)) {
    renderErrorCard("Por favor, ingrese un número del 1 al 5.");
    return;
  }

  const pizza = pizzas.find((pizza) => pizza.id === inputValue);

  if (pizza) {
    renderPizzaCard(pizza);
    localStorage.setItem("lastPizzaId", pizza.id);
  } else {
    renderErrorCard("No se encontró una pizza con ese número.");
  }
}

function renderErrorCard(errorMessage) {
  container.innerHTML = `
    <div class="pizza-card">
      <h2>Error</h2>
      <p>${errorMessage}</p>
      <img src="https://img.freepik.com/vector-premium/linda-mascota-pizza-expresion-triste_700108-327.jpg?w=300" alt="Error">
    </div>
  `;
}

function renderPizzaCard(pizza) {
  container.innerHTML = `
    <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio}</p>
    </div>
  `;
  error.textContent = "";
}

function renderError(message) {
  container.innerHTML = "";
  error.textContent = message;
}

const lastPizzaId = localStorage.getItem("lastPizzaId");
if (lastPizzaId) {
  const lastPizza = pizzas.find((pizza) => pizza.id === parseInt(lastPizzaId));
  if (lastPizza) {
    renderPizzaCard(lastPizza);
  }
}
