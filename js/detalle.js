// detalle.js

window.onload = function() {
  // Obtener el id de la URL
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  // Buscar el producto en el array
  const producto = productos.find(p => p.id === id);

  // Si existe el producto, mostrar sus datos
  if (producto) {
    document.getElementById('detalle-imagen').src = producto.imagen;
    document.getElementById('detalle-imagen').alt = producto.nombre;
    document.getElementById('detalle-nombre').textContent = producto.nombre;
    document.getElementById('detalle-precio').textContent = "$" + producto.precio.toLocaleString('es-CL') + " CLP";
    document.getElementById('detalle-descripcion').textContent = producto.descripcion;
  } else {
    document.getElementById('detalle-nombre').textContent = "Producto no encontrado";
    document.getElementById('detalle-precio').textContent = "";
    document.getElementById('detalle-descripcion').textContent = "";
    document.getElementById('detalle-imagen').style.display = 'none';
  }
};
