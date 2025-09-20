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

     // Activar botón "Añadir al carrito"
    const botonAgregar = document.querySelector('.btn_detalle');
    botonAgregar.addEventListener('click', () => {
      const cantidad = parseInt(document.getElementById('cantidad').value);
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      const existente = carrito.find(p => p.id === id);
      if (existente) {
        existente.cantidad += cantidad;
      } else {
        carrito.push({ id, cantidad });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      console.log(`Producto ${producto.nombre} agregado al carrito (${cantidad})`);
      // Aquí más adelante irá el popup

      // Mostrar popup con datos del producto
      document.getElementById('popup-imagen').src = producto.imagen;
      document.getElementById('popup-imagen').alt = producto.nombre;
      document.getElementById('popup-nombre').textContent = producto.nombre;
      document.getElementById('popup-precio').textContent = "$" + producto.precio.toLocaleString('es-CL') + " CLP";
      document.getElementById('popup-carrito').style.display = 'flex';
    });


  } else {
    document.getElementById('detalle-nombre').textContent = "Producto no encontrado";
    document.getElementById('detalle-precio').textContent = "";
    document.getElementById('detalle-descripcion').textContent = "";
    document.getElementById('detalle-imagen').style.display = 'none';
  }
};
