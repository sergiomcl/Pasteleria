// logica filtros

window.onload = function() {
  const categoriaInputs = document.querySelectorAll('input[name="categoria"]');
  const personasInputs = document.querySelectorAll('input[name="personas"]');

  function filtrar() {
    const categorias = Array.from(categoriaInputs)
      .filter(input => input.checked)
      .map(input => input.value);

    const personas = Array.from(personasInputs)
      .filter(input => input.checked)
      .map(input => input.value);

    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
      const cat = tarjeta.getAttribute('data-categoria');
      const per = tarjeta.getAttribute('data-personas');

      const coincideCategoria = categorias.length === 0 || categorias.includes(cat);
      const coincidePersonas = personas.length === 0 || personas.includes(per);

      tarjeta.style.display = (coincideCategoria && coincidePersonas) ? "" : "none";
    });
  }

  categoriaInputs.forEach(input => input.addEventListener("change", filtrar));
  personasInputs.forEach(input => input.addEventListener("change", filtrar));
};