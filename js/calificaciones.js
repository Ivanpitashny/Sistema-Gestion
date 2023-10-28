document.addEventListener("DOMContentLoaded", function() {
    const botonVolver = document.getElementById("botonVolver");
    
    // Agregar un manejador de eventos al botón para ir atrás en la historia del navegador
    botonVolver.addEventListener("click", function() {
        window.history.back();
    });
});


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

function populateTable() {
    const list = document.querySelector('.materias');
    alert("el archivo js se esta ejecutando")
    // Create and add courses for the first year
    const firstYearTitle = document.createElement('li');
    firstYearTitle.textContent = "Primer año";
    firstYearTitle.classList.add('año');
    list.appendChild(firstYearTitle);

    for (const course of primerAno) {
        const courseItem = document.createElement('li');
        courseItem.textContent = course;
        courseItem.classList.add('mat');
        list.appendChild(courseItem);
    }

    // Create and add courses for the second year
    const secondYearTitle = document.createElement('li');
    secondYearTitle.textContent = "Segundo año";
    secondYearTitle.classList.add('año');
    list.appendChild(secondYearTitle);

    for (const course of segundoAno) {
        const courseItem = document.createElement('li');
        courseItem.textContent = course;
        courseItem.classList.add('mat');
        list.appendChild(courseItem);
    }

        // Create and add courses for the second year
    const tercerYearTitle = document.createElement('li');
    tercerYearTitle.textContent = "Tercer Año";
    tercerYearTitle.classList.add('año');
    list.appendChild(tercerYearTitle);

    for (const course of tercerAno) {
        const courseItem = document.createElement('li');
        courseItem.textContent = course;
        courseItem.classList.add('mat');
        list.appendChild(courseItem);
    }
}

// Call the function to populate the table
populateTable();
