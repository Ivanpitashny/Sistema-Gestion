document.addEventListener("DOMContentLoaded", function() {
    const botonVolver = document.getElementById("botonVolver");
    
    // Agregar un manejador de eventos al botón para ir atrás en la historia del navegador
    botonVolver.addEventListener("click", function() {
        window.history.back();
    });
});

window.onload= function(){
//arrays con las materias por año
//primer año
const primerAno = [
    // 1st Quarter
    "Comunicación",
    "Unidad de definición institucional I",
    "Inglés técnico I",
    "Matemática",
    "Administración",
    "Tecnología de la información",
    "Lógica y estructura de datos",
    "Ingeniería de software I",
    "Sistemas operativos"
];
//sefundo año
const segundoAno = [
    "Problemas Socio Contemp.",
    "Unidad de definición institucional II",
    "Inglés técnico II",
    "Innovación y desarrollo emprendedor",
    "Estadística",
    "Programación I",
    "Base de Datos I",
    "Ingeniería de software II",
    "Práctica Profesionalizante I"
];
// tercer año
const tercerAno = [
    "Ética y responsabilidad social",
    "Derecho y legislación laboral",
    "Redes and comunicación",
    "Programación II",
    "Gestión de proyectos de software",
    "Base de datos II",
    "Práctica profesionalizante II"
];

var myList = document.getElementById("miLista");
// creando lista primer año
var titulo = document.createElement("ul");
var tituloTexto = document.createTextNode("Primer Año");
titulo.appendChild(tituloTexto);

// Aquí le agregamos la clase "año" al elemento titulo
titulo.setAttribute("class", "año");

myList.appendChild(titulo);


// A continuación, recorremos los elementos de la lista y los agregamos al HTML
for (var i = 0; i < primerAno.length; i++) {
   var listItem = document.createElement("li");
   var textNode = document.createTextNode(primerAno[i]);
   listItem.appendChild(textNode);
   listItem.id = "mat";
   myList.appendChild(listItem);
}


// creando lista para segundo año
var titulo = document.createElement("ul");
var tituloTexto = document.createTextNode("Segundo Año");
titulo.appendChild(tituloTexto);

// Aquí le agregamos la clase "año" al elemento titulo
titulo.setAttribute("class", "año");

myList.appendChild(titulo);


// A continuación, recorremos los elementos de la lista y los agregamos al HTML
for (var i = 0; i < segundoAno.length; i++) {
   var listItem = document.createElement("li");
   var textNode = document.createTextNode(segundoAno[i]);
   listItem.appendChild(textNode);
   listItem.id = "mat";
   myList.appendChild(listItem);
}
//creando lista para tercer año
var titulo = document.createElement("ul");
var tituloTexto = document.createTextNode("Tercer Año");
titulo.appendChild(tituloTexto);

// Aquí le agregamos la clase "año" al elemento titulo
titulo.setAttribute("class", "año");

myList.appendChild(titulo);


// A continuación, recorremos los elementos de la lista y los agregamos al HTML
for (var i = 0; i < segundoAno.length; i++) {
   var listItem = document.createElement("li");
   var textNode = document.createTextNode(tercerAno[i]);
   listItem.appendChild(textNode);
   listItem.id = "mat";
   myList.appendChild(listItem);
}
};