// // productos.js

// document.addEventListener('DOMContentLoaded', function() {
//   // Selección de filtros
//   const categoriaInputs = document.querySelectorAll('.filtros input[type="radio"][name="categoria"]');
//   const personasInputs = document.querySelectorAll('.filtros input[type="checkbox"]');
//   const tarjetas = document.querySelectorAll('.tarjeta');

//   function filtrar() {
//     // Obtener categoría seleccionada
//     let categoriaSeleccionada = null;
//     categoriaInputs.forEach(input => {
//       if (input.checked) {
//         categoriaSeleccionada = input.parentElement.textContent.trim();
//       }
//     });

//     // Obtener personas seleccionadas
//     let personasSeleccionadas = [];
//     personasInputs.forEach(input => {
//       if (input.checked) {
//         const texto = input.parentElement.textContent.trim();
//         const match = texto.match(/(\d+)/);
//         if (match) {
//           personasSeleccionadas.push(match[1]);
//         }
//       }
//     });

//     tarjetas.forEach(tarjeta => {
//       const categoria = tarjeta.getAttribute('data-categoria');
//       const personas = tarjeta.getAttribute('data-personas');
//       let mostrar = true;

//       if (categoriaSeleccionada && categoria !== categoriaSeleccionada) {
//         mostrar = false;
//       }
//       if (personasSeleccionadas.length > 0 && !personasSeleccionadas.includes(personas)) {
//         mostrar = false;
//       }
//       tarjeta.style.display = mostrar ? '' : 'none';
//     });
//   }

//   categoriaInputs.forEach(input => {
//     input.addEventListener('change', filtrar);
//   });
//   personasInputs.forEach(input => {
//     input.addEventListener('change', filtrar);
//   });
// });


// productos.js

window.onload = function() {
  var categoriaInputs = document.getElementsByName("categoria");
  var personasInputs = document.querySelectorAll('.filtros input[type="checkbox"]');
  var tarjetas = document.getElementsByClassName("tarjeta");

  function filtrar() {
    var categoriaSeleccionada = null;
    for (var i = 0; i < categoriaInputs.length; i++) {
      if (categoriaInputs[i].checked) {
        categoriaSeleccionada = categoriaInputs[i].parentNode.textContent.replace(/\s+/g, ' ').trim();
        break;
      }
    }

    var personasSeleccionadas = [];
    for (var j = 0; j < personasInputs.length; j++) {
      if (personasInputs[j].checked) {
        var texto = personasInputs[j].parentNode.textContent.replace(/\s+/g, ' ').trim();
        var numero = texto.match(/\d+/);
        if (numero) {
          personasSeleccionadas.push(numero[0]);
        }
      }
    }

    for (var k = 0; k < tarjetas.length; k++) {
      var tarjeta = tarjetas[k];
      var categoria = tarjeta.getAttribute("data-categoria");
      var personas = tarjeta.getAttribute("data-personas");
      var mostrar = true;

      if (categoriaSeleccionada !== null && categoria !== categoriaSeleccionada) {
        mostrar = false;
      }

      if (personasSeleccionadas.length > 0) {
        var coincide = false;
        for (var p = 0; p < personasSeleccionadas.length; p++) {
          if (personas === personasSeleccionadas[p]) {
            coincide = true;
            break;
          }
        }
        if (!coincide) {
          mostrar = false;
        }
      }

      tarjeta.style.display = mostrar ? "" : "none";
    }
  }

  for (var i = 0; i < categoriaInputs.length; i++) {
    categoriaInputs[i].addEventListener("change", filtrar);
  }

  for (var j = 0; j < personasInputs.length; j++) {
    personasInputs[j].addEventListener("change", filtrar);
  }
};