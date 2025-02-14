function mostrarDatosDeLaColeccion(datos) {
    if (Array.isArray(datos)) {
        datos.forEach(function (animal) {
            console.log("Raza: ".concat(animal.raza));
            console.log("Muerde: ".concat(animal.muerde ? "Sí" : "No"));
            console.log("Colores: ".concat(animal.color.join(", ")));
            console.log("----------------------");
        });
    }
    else {
        console.error("Los datos proporcionados no son una colección de animales.");
    }
}
var animales = [
    { raza: "Cocker", muerde: true, color: ["negro"] },
    { raza: "Persa", muerde: false, color: ["marron", "blanco"] },
    { raza: "León Africano", muerde: true, color: ["marron", "negro"] },
];
mostrarDatosDeLaColeccion(animales);
