let form = document.getElementById("usuariocontraseña");
let username = document.getElementById("dni");
let password = document.getElementById("password");

document.getElementById("loginButton").addEventListener("click", function(event){
    event.preventDefault(); // Prevenir el envío del formulario por defecto


    let dni = document.getElementById("dni").value;
    let password = document.getElementById("password").value;

    if (dni.value === "" || password.value === "") {
        alert("Rellena los campos");
    } else if (!(/^\d{7,}$/.test(dni))) {
        alert("El DNI debe tener al menos 7 caracteres numéricos.");   
    } else {
        // Realizar el inicio de sesión, como enviar los datos al servidor
        window.location.href="home.html";
    }
    
});


