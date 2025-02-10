const personas = [
    { nombre: "Yesenia" },
    { nombre: "Nicolas" },
    { nombre: "Andrea" }
];

  // arrow function 
personas.forEach(persona => {
    console.log(persona.nombre); 
});

  // función normal 

function mostrarNombres() {
    personas.forEach(function (persona) {
    console.log(persona.nombre);
    });
}

mostrarNombres();


