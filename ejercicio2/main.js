// 2.1 Crear un div vacío
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 Crear un div con una <p> dentro
const divConParrafo = document.createElement('div');
const p2 = document.createElement('p');
p2.textContent = 'Soy un párrafo dentro de un div';
divConParrafo.appendChild(p2);
document.body.appendChild(divConParrafo);

// 2.3 Crear un div con 6 <p> usando un bucle
const div6P = document.createElement('div');

for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i}`;
  div6P.appendChild(p);
}

document.body.appendChild(div6P);

// 2.4 Insertar una <p> con el texto "Soy dinámico!"
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 Insertar texto en el h2 con clase .fn-insert-here
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 Crear lista ul > li con los elementos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

for (const app of apps) {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 2.7 Eliminar todos los nodos con clase .fn-remove-me
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');

for (const el of elementosAEliminar) {
  el.remove();
}

// 2.8 Insertar una <p> entre los dos primeros <div>
const todosLosDivs = document.querySelectorAll('div');
const pEntre = document.createElement('p');
pEntre.textContent = 'Voy en medio!';

// Insertar entre el primer y segundo div
todosLosDivs[0].parentNode.insertBefore(pEntre, todosLosDivs[1]);

// 2.9 Insertar una <p> dentro de cada div con clase .fn-insert-here
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');

for (const div of divsInsertHere) {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
}
