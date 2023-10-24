document.addEventListener("DOMContentLoaded", function() {
    const botonVolver = document.getElementById("botonVolver");
    
    // Agregar un manejador de eventos al botón para ir atrás en la historia del navegador
    botonVolver.addEventListener("click", function() {
        window.history.back();
    });
});