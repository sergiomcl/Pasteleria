const contenedor = document.querySelector(".productos-container"); // Asegúrate que tu HTML tenga esta clase

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

// // Función auxiliar para categorizar por ID (puedes mejorarla si tienes una mejor lógica)
// function obtenerCategoria(id) {
//   if (id <= 2) return "Tortas Cuadradas";
//   if (id <= 4) return "Tortas Circulares";
//   if (id <= 6) return "Postres individuales";
//   if (id <= 8) return "Productos Sin Azúcar";
//   if (id <= 10) return "Pastelería tradicional";
//   if (id <= 12) return "Productos sin gluten";
//   if (id <= 14) return "Productos Veganos";
//   return "Tortas Especiales";
// }

const totalProductos = productos.length;
const titulo = document.querySelector(".catalogo h2 span");
titulo.textContent = `${totalProductos} productos`;
