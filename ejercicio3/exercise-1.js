// 1.1 Crear lista <ul> con países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');

for (const country of countries) {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
}

document.body.appendChild(ulCountries);

// 1.2 Eliminar el elemento con clase .fn-remove-me
const toRemove = document.querySelector('.fn-remove-me');
if (toRemove) {
  toRemove.remove();
}

// 1.3 Crear lista <ul> con coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const carsList = document.createElement('ul');
for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  carsList.appendChild(li);
}

const printHereDiv = document.querySelector('[data-function="printHere"]');
printHereDiv.appendChild(carsList);

// 1.4 Crear divs con h4 + img para cada objeto del array
const countryCards = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

// Creamos un contenedor para las tarjetas
const cardsContainer = document.createElement('div');
cardsContainer.id = 'cards-container';

for (const item of countryCards) {
  const card = document.createElement('div');
  card.classList.add('country-card');

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;

  card.appendChild(h4);
  card.appendChild(img);

  // 1.6 Botón para eliminar solo este div
  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Eliminar esta tarjeta';
  btnDelete.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(btnDelete);
  cardsContainer.appendChild(card);
}

document.body.appendChild(cardsContainer);

// 1.5 Botón para eliminar el último div de tarjetas
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar última tarjeta';
deleteLastBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.country-card');
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});

document.body.appendChild(deleteLastBtn);
