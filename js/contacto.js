function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  // Validación de nombre
  if (!nombre) {
    alert("El nombre es requerido.");
    return false;
  }
  if (nombre.length > 100) {
    alert("El nombre no puede superar los 100 caracteres.");
    return false;
  }

  // Validación de correo
  if (!correo) {
    alert("El correo es requerido.");
    return false;
  }
  if (correo.length > 100) {
    alert("El correo no puede superar los 100 caracteres.");
    return false;
  }
  if (!dominiosPermitidos.some(d => correo.endsWith(d))) {
    alert("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    return false;
  }

  // Validación de mensaje
  if (!mensaje) {
    alert("El mensaje es requerido.");
    return false;
  }
  if (mensaje.length > 500) {
    alert("El mensaje no puede superar los 500 caracteres.");
    return false;
  }
    if (mensaje.length < 30) {
    alert("El mensaje no puede ser tan corto.");
    return false;
  }


  alert("¡Formulario enviado con éxito!");
  document.getElementById("loginForm").reset();
  return false; 
}