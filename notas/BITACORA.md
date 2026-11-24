# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM
| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | El texto del título cambió a "Hola TECSUP". | Sí |
| style.color | El color del texto del título cambió a azul. | Sí |
## Ejercicio 3: Evento click
| Tipo de evento | Qué acción lo dispara | Cuánto suma por acción |
|----------------|-----------------------|------------------------|
| click | Hacer clic y soltar con el botón principal del mouse. | +1 |
| dblclick | Hacer doble clic rápido sobre el elemento. | +1 (la función se ejecuta una vez por evento dblclick). |
| mouseover | Pasar el puntero del cursor por encima del elemento. | +1 al entrar con el cursor. |
## Ejercicio 4: Eventos input y submit
 | Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | El saludo cambia letra por letra en tiempo real. | No |
| Enviar sin preventDefault | El texto "Enviado" parpadea un instante y se borra. | Sí |
| Enviar con preventDefault, correo sin @ | Muestra el mensaje en rojo "Correo no valido: falta @". | No |
| Enviar con preventDefault, correo con @ | Muestra el texto de éxito con el correo ingresado. | No|
## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |