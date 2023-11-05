function obtenerFechaActual() {
  const dias = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const fecha = new Date();
  const diaSemana = dias[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();
  return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
}
function actualizarFechaActual() {
  const elementoFecha = document.getElementById("fecha-actual");
  elementoFecha.textContent = obtenerFechaActual();
}
actualizarFechaActual();
setInterval(actualizarFechaActual, 1000);
// FORMULARIO
const form = document.getElementById("contact-form");
const correoInput = document.getElementById("correo");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!form.checkValidity()) {
    alert("Por favor, llene todos los campos correctamente.");
  } else if (!validarCorreo(correoInput.value)) {
    alert(
      "Por favor, ingrese un correo válido: con @ y extensión final después del punto."
    );
  } else {
    alert("El correo fue enviado exitosamente");
    limpiarFormulario(); 
  }
});
function validarCorreo(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{1,3}$/;
  return regexCorreo.test(correo);
}
function limpiarFormulario() {
  form.reset(); 
}

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Vista mensual por defecto
    events: [
      // Aquí puedes agregar los eventos de adopción en el formato necesario
      {
        title: 'Evento de Adopción 1',
        start: '2023-08-23'
      },
      {
        title: 'Evento de Adopción 2',
        start: '2023-08-30'
      },
      // Agrega más eventos aquí
    ]
  });
  calendar.render();
});

function prueba() {
  console.log(Uno);
  return 'esta es una prueba'
}
prueba()