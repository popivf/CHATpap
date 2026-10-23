
const sala = document.getElementById("sala");
const salaActual = document.getElementById("salaActual");
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const mensajes = document.getElementById("mensajes");

sala.addEventListener("change", function () {
    salaActual.textContent = sala.value;
    mensajes.innerHTML = "";
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = nombre.value.trim();
    const texto = mensaje.value.trim();

    if (!usuario || !texto) {
        alert("Escribe tu nombre y un mensaje.");
        return;
    }

    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.className = "mensaje-item";
    nuevoMensaje.textContent = usuario + ": " + texto;

    mensajes.appendChild(nuevoMensaje);
    mensaje.value = "";
});
