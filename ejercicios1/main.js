// 1.1 Seleccionar el botón con la clase .showme
const boton = document.querySelector('.showme');
console.log("1.1 Botón .showme:", boton);

// 1.2 Seleccionar el h1 con id #pillado
const h1 = document.querySelector('#pillado');
console.log("1.2 H1 con id 'pillado':", h1);

// 1.3 Seleccionar todos los <p> (devuelve una NodeList)
const parrafos = document.querySelectorAll('p');
console.log("1.3 Todos los párrafos:", parrafos);

// 1.4 Seleccionar todos los elementos con la clase .pokemon
const pokemones = document.querySelectorAll('.pokemon');
console.log("1.4 Todos los elementos .pokemon:", pokemones);

// 1.5 Seleccionar todos los elementos con el atributo data-function="testMe"
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 Elementos con data-function="testMe":', personajes);

// 1.6 Mostrar el 3er personaje con ese atributo (índice 2 porque empieza en 0)
const tercerPersonaje = personajes[2];
console.log("1.6 Tercer personaje con data-function='testMe':", tercerPersonaje);
