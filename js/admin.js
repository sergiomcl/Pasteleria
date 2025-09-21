window.mostrarOpciones = function(tipo) {
  const contenido = document.getElementById("contenidoPanel");
  const formProducto = document.getElementById("formProducto");

  // Ocultar el formulario al iniciar
  formProducto.style.display = "none";

  // Limpiar contenido
  contenido.innerHTML = "";

  // Crear título
  const titulo = document.createElement("h3");
  titulo.style.marginTop = "-22px";
  titulo.textContent = tipo === "usuarios" ? "Usuarios" : "Productos";
  contenido.appendChild(titulo);

  // Crear lista de opciones
  const lista = document.createElement("ul");
  const opciones = tipo === "usuarios"
    ? ["Mostrar usuarios", "Nuevo usuario", "Editar usuario"]
    : ["Mostrar productos", "Nuevo producto", "Editar producto"];

  opciones.forEach(opcion => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = opcion;

    // Detectar clic en "Nuevo producto"
    if (opcion === "Nuevo producto") {
      a.addEventListener("click", () => {
        formProducto.style.display = "block";
        contenido.innerHTML = ""; // Limpiar contenido para mostrar solo el formulario
        contenido.appendChild(formProducto);
      });
    }

    li.appendChild(a);
    lista.appendChild(li);
  });

  contenido.appendChild(lista);
};