const contenedor = document.querySelector(".productos-container"); 

productos.forEach(producto => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");
  tarjeta.setAttribute("data-categoria", producto.categoria);
  tarjeta.setAttribute("data-personas", producto.personas);

  

  tarjeta.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <div class="info">
      <h4>${producto.nombre}</h4>
      <p class="personas">${producto.personas} Personas</p>
      <a href="detalle.html?id=${producto.id}" class="btn_producto">Ver detalles</a>
      <p class="precio">$${producto.precio.toLocaleString()}</p>
    </div>
  `;

  contenedor.appendChild(tarjeta);
});


const totalProductos = productos.length;
const titulo = document.querySelector(".catalogo h2 span");
titulo.textContent = `${totalProductos} productos`;
