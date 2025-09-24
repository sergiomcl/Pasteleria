function togglePassword() {
  const passwordField = document.getElementById("password");
  const button = event.target;
  if (passwordField.type === "password") {
    passwordField.type = "text";
    button.textContent = "Ocultar";
  } else {
    passwordField.type = "password";
    button.textContent = "Mostrar";
  }
}

function validarLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

  // Validación de correo
  if (!email) {
    alert("El correo electrónico es requerido.");
    return false;
  }
  if (email.length > 100) {
    alert("El correo no puede superar los 100 caracteres.");
    return false;
  }
  if (!dominiosPermitidos.some(d => email.endsWith(d))) {
    alert("Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.");
    return false;
  }

  // Validación de contraseña
  if (!password) {
    alert("La contraseña es requerida.");
    return false;
  }
  if (password.length < 4 || password.length > 10) {
    alert("La contraseña debe tener entre 4 y 10 caracteres.");
    return false;
  }

  alert("¡Inicio de sesión exitoso!");
  window.location.href = "index.html";
  return false;
}