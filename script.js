// Función para obtener la hora actual
function obtenerHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

// Función para obtener la fecha actual
function obtenerFecha() {
    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0'); // Se supone que enero es 0
    const año = ahora.getFullYear();
    return `${dia}/${mes}/${año}`;
}

// Función para obtener la ubicación del usuario [solo funciona en navegador]
function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude.toFixed(6);
            const longitud = position.coords.longitude.toFixed(6);
            document.getElementById("ubicacion").textContent = `${latitud}, ${longitud}`;
        }, function(error) {
            document.getElementById("ubicacion").textContent = "No se pudo obtener la ubicación.";
        });
    } else {
        document.getElementById("ubicacion").textContent = "Geolocalización no es soportada por este navegador.";
    }
}

// Función para actualizar la hora y la fecha en la página
function actualizarHoraYFecha() {
    const horaElemento = document.getElementById("hora");
    const fechaElemento = document.getElementById("fecha");
    horaElemento.textContent = `Hora: ${obtenerHora()}`;
    fechaElemento.textContent = `Fecha: ${obtenerFecha()}`;
}

// Actualiza la hora y la fecha cada segundo
setInterval(actualizarHoraYFecha, 1000);
actualizarHoraYFecha();
obtenerUbicacion();
