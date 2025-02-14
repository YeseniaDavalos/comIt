function mostrarDatosAuto(auto) {
    console.log("Marca: ".concat(auto.marca));
    console.log("Modelo: ".concat(auto.modelo));
    console.log("Color: ".concat(auto.color));
    console.log("Cantidad de pasajeros: ".concat(auto.cantidadDePasajeros));
    console.log("Es descapotable: ".concat(auto.esDescapotable));
}
// Función para mostrar datos de un Camion
function mostrarDatosCamion(camion) {
    console.log("Marca: ".concat(camion.marca));
    console.log("Modelo: ".concat(camion.modelo));
    console.log("Color: ".concat(camion.color));
    console.log("Cantidad de pasajeros: ".concat(camion.cantidadDePasajeros));
    console.log("Cantidad de acoplados: ".concat(camion.cantidadDeAcoplados));
}
// Creamos los objetos auto y camion
var auto = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};
var camion = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};
mostrarDatosAuto(auto);
mostrarDatosCamion(camion);
