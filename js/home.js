const materias=[
    "UDI 2 - Unidad de Definición Institucional 2",
    "BD 1 - Base de Datos 1",
    "PP 1 - Practicas Profesionalizantes 1",
    "ING.T 2 - Ingenieria de Software 2",
    "PSC - Problematica Socio-Contemporanea",
    "IYD - Innovacion y Desarrollo Emprendedor",
    "PR 1 - Programación 1",
    "IT 2 - Ingles Tecnico 2",
    "EST - Estadistica"
];

let myList = document.getElementById("miGlosario");
//creando glosario
//creando titulo del glosario
let titulo = document.createElement("h1");
let tituloTexto = document.createTextNode("Glosario");
titulo.appendChild(tituloTexto);
myList.appendChild(titulo);

let linea = document.createElement("hr");
myList.appendChild(linea);


// A continuación, recorremos los elementos de la lista y los agregamos al HTML
for (var i = 0; i < materias.length; i++) {
    var listItem = document.createElement("li");
    var textNode = document.createTextNode(materias[i]);
    listItem.appendChild(textNode);
    myList.appendChild(listItem);

    // Agregar un salto de línea después de cada <li>
    var lineBreak = document.createElement("br");
    myList.appendChild(lineBreak);
 }
