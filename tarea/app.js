// Tarea: Componente interactivo de Películas por Ver
class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
    this.vista = false;
  }

  cambiarEstado() {
    this.vista = !this.vista;
  }

  descripcion() {
    const estadoStr = this.vista ? "[Vista]" : "[Pendiente]";
    return `${this.titulo} - Género: ${this.genero} ${estadoStr}`;
  }
}

const formPelicula = document.querySelector("#formPelicula");
const inputTitulo = document.querySelector("#inputTitulo");
const inputGenero = document.querySelector("#inputGenero");
const listaPeliculas = document.querySelector("#listaPeliculas");

const catalogo = [];

// Evento submit para agregar nueva película
formPelicula.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const tituloVal = inputTitulo.value.trim();
  const generoVal = inputGenero.value.trim();

  if (tituloVal === "" || generoVal === "") return;

  const nuevaPelicula = new Pelicula(tituloVal, generoVal);
  catalogo.push(nuevaPelicula);

  renderizarCatalogo();
  
  inputTitulo.value = "";
  inputGenero.value = "";
});

// Función para renderizar el catálogo en el DOM
function renderizarCatalogo() {
  listaPeliculas.innerHTML = "";

  catalogo.forEach((pelicula, index) => {
    const li = document.createElement("li");
    li.textContent = pelicula.descripcion();

    if (pelicula.vista) {
      li.classList.add("vista");
    }

    // Evento click en el elemento li para cambiar estado (marcar como vista/pendiente)
    li.addEventListener("click", () => {
      pelicula.cambiarEstado();
      renderizarCatalogo();
    });

    // Botón para borrar con evento click independiente
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.classList.add("btn-borrar");

    btnBorrar.addEventListener("click", (evento) => {
      evento.stopPropagation(); // Evita que se propague al evento click del li
      catalogo.splice(index, 1);
      renderizarCatalogo();
    });

    li.appendChild(btnBorrar);
    listaPeliculas.appendChild(li);
  });
}