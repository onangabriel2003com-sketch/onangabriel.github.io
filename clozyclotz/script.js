const productos = [
  { nombre: "HURLEY HEAT MAP VERTICAL GRAPHIC TEE", precio: 130000, imagen: "imagenes/remera-1.jpeg", categoria: "remeras" },
  { nombre: "VERMONT DRAGON", precio: 80000, imagen: "imagenes/remera-2.jpeg", categoria: "remeras" },
  { nombre: "KOUT MOD. BARROCO", precio: 80000, imagen: "imagenes/remera-3.jpeg", categoria: "remeras" },
  { nombre: "EVERLAST LOGO BULLDOG", precio: 80000, imagen: "imagenes/remera-4.jpeg", categoria: "remeras" },
  { nombre: "GRYFFINDOR TEAM QUIDDITCH", precio: 80000, imagen: "imagenes/remera-5.jpeg", categoria: "remeras" },
  { nombre: "THE WEEKND STARBOY LEGEND OF THE FALL 2017 WORLD TOUR", precio: 130000, imagen: "imagenes/remera-6.jpeg", categoria: "remeras" },
  { nombre: "ECKO UNLTD. RHINO UNLIMITED", precio: 180000, imagen: "imagenes/remera-7.jpeg", categoria: "remeras" },
  { nombre: "JADED LONDON BLACK SANDBLAST TRIBAL PRINT COLOSSUS", precio: 500000, imagen: "imagenes/jeans-1.png", categoria: "jeans" },
  { nombre: "JADED LONDON BLACK SANDBLAST TRIBAL PRINT BARREL", precio: 150000, imagen: "imagenes/jeans-2.png", categoria: "jeans" },
  { nombre: "BLACK SANDBLAST BILLY", precio: 180000, imagen: "imagenes/jeans-3.png", categoria: "jeans" },
  { nombre: "BAGGY JEANS YOUNGSTYLE", precio: 150000, imagen: "imagenes/jeans-4.png", categoria: "jeans" },
  { nombre: "CARGO CONVERTIBLE LV", precio: 120000, imagen: "imagenes/jeans-5.png", categoria: "jeans" },
  { nombre: "BAGGY JEANS TUCCI ", precio: 150000, imagen: "imagenes/jeans-6.png", categoria: "jeans" },
  { nombre: "JADED LONDON BLACK SANDBLAST TRIBAL PRINT BARREL", precio: 150000, imagen: "imagenes/jorts-2.png", categoria: "jorts" },
  { nombre: "BLACK SANDBLAST BILLY", precio: 180000, imagen: "imagenes/jorts-3.png", categoria: "jorts" },
  { nombre: "BAGGY JEANS YOUNGSTYLE", precio: 150000, imagen: "imagenes/jorts-4.png", categoria: "jorts" },
  { nombre: "CARGO CONVERTIBLE LV", precio: 120000, imagen: "imagenes/jorts-5.png", categoria: "jorts" },
  { nombre: "BAGGY JEANS TUCCI ", precio: 150000, imagen: "imagenes/jorts-6.png", categoria: "jorts" },
];


function mostrarCatalogo(filtro = "todos") {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";
  productos
    .filter(prod => filtro === "todos" || prod.categoria === filtro)
    .forEach((prod, index) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("producto");
      tarjeta.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
     <p>${prod.precio.toLocaleString("es-ES")} Gs</p>
      `;
      catalogo.appendChild(tarjeta);
    });
}

mostrarCatalogo();