function validarAdminLogin() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validación de correo
  if (!email) {
    alert("El correo es requerido.");
    return false;
  }
  if (email.length > 100) {
    alert("El correo no puede superar los 100 caracteres.");
    return false;
  }
  if (email !== "admin@gmail.com") {
    alert("Correo invalido");
    return false;
  }

  // Validación de contraseña
  if (!password) {
    alert("La contraseña es requerida.");
    return false;
  }
  if (password.length < 6 || password.length > 12) {
    alert("La contraseña debe tener entre 6 y 12 caracteres.");
    return false;
  }
  if (password !== "admin123") {
    alert("Contraseña incorrecta.");
    return false;
  }

  alert("¡Bienvenido al panel de administración!");
  return true; 
}