  function togglePassword(id, btn) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
    btn.textContent = input.type === "text" ? "Ocultar" : "Mostrar";
  }

  function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

    if (!nombre) {
      alert("El nombre es requerido.");
      return false;
    }
    if (nombre.length > 50) {
      alert("El nombre no puede superar los 50 caracteres.");
      return false;
    }

    if (!apellido) {
      alert("Los apellidos son requeridos.");
      return false;
    }
    if (apellido.length > 100) {
      alert("Los apellidos no pueden superar los 100 caracteres.");
      return false;
    }

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

    if (!password) {
      alert("La contraseña es requerida.");
      return false;
    }
    if (password.length < 4 || password.length > 10) {
      alert("La contraseña debe tener entre 4 y 10 caracteres.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return false;
    }

        alert("¡Registro exitoso! Inicie sesión");
        window.location.href = "login.html";
        return false; 


  }
