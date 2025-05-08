const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
  ];
  
  // Creamos el <ul>
  const ul = document.createElement('ul');
  
  // Recorremos el array y creamos un <li> por cada álbum
  for (const album of albums) {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
  }
  
  // Insertamos la lista en el body
  document.body.appendChild(ul);
  