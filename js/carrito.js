document.addEventListener('DOMContentLoaded', () => {
  const tabla = document.getElementById('carrito-tabla');
  const totalSpan = document.getElementById('carrito-total');
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  function obtenerProducto(id) {
    return productos.find(p => p.id === id);
  }

  function actualizarCarrito() {
    tabla.innerHTML = '';
    let total = 0;

    carrito.forEach((item, index) => {
      const producto = obtenerProducto(item.id);
      if (!producto) return; // Evita errores si el producto no existe

      const subtotal = producto.precio * item.cantidad;
      total += subtotal;


      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 100px; height: auto;"></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio.toLocaleString('es-CL')}</td>
        <td>${item.cantidad}</td>
        <td>$${subtotal.toLocaleString('es-CL')}</td>
        <td><button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button></td>
      `;
      tabla.appendChild(fila);
    });

    totalSpan.textContent = `$${total.toLocaleString('es-CL')}`;
  }


  tabla.addEventListener('click', e => {
    if (e.target.classList.contains('btn-danger')) {
      const index = e.target.dataset.index;
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarCarrito();
    }
  });

  actualizarCarrito();
});