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

const p1 = new Pelicula("Inception", "Ciencia Ficción");
console.log(p1.descripcion());