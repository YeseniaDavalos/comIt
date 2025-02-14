function mostrarMascota(mascota, tipo) {
    if (tipo === "perro") {
        console.log("La mascota es un Canino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo === "gato") {
        console.log("La mascota es un Felino y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
    else if (tipo === "mono") {
        console.log("La mascota es un Monito y se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os"));
    }
}
var perro = { nombre: "Firulais", edad: 5 };
var gato = { nombre: "Michi", edad: 3 };
var mono = { nombre: "George", edad: 2 };
mostrarMascota(mono, "mono");
mostrarMascota(gato, "gato");
mostrarMascota(perro, "perro");
