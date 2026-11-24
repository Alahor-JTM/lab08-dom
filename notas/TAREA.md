# Tarea: Mi componente interactivo

## Componente elegido
Catálogo interactivo de "Películas por Ver", que permite registrar títulos y géneros mediante un formulario (`submit`), marcar el estado como vista o pendiente con un clic (`click`), y eliminar registros de manera dinámica con botones específicos.

## Código principal
```js
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
```

## Pruebas realizadas
| Acción | Resultado esperado | Cumple (Sí/No) |
|--------|--------------------|----------------|
| Enviar formulario con campos vacíos | No debe agregar elementos al catálogo debido a la validación. | Sí |
| Agregar una película con título y género válidos | Se crea el objeto y se muestra dinámicamente en la lista de la página. | Sí |
| Hacer clic sobre el texto de la película | Cambia su estado visual a tachado/visto actualizando el DOM. | Sí |
| Hacer clic en el botón "Eliminar" | Remueve el elemento seleccionado del arreglo y de la pantalla. | Sí |

## Por qué diseñé así mi clase
Elegí diseñar la clase `Pelicula` con los atributos `titulo`, `genero` y `vista` porque permiten estructurar con precisión la información esencial de cada elemento. Además, los métodos `cambiarEstado()` y `descripcion()` encapsulan la lógica para alternar su estado y mostrar el texto formateado en el DOM de forma limpia y reutilizable.