// Nueva función que muestra los datos del vehículo (Auto1 o Camion1)
function mostrarAutoOCamion(vehiculo) {
    console.log("Marca: ".concat(vehiculo.marca));
    console.log("Modelo: ".concat(vehiculo.modelo));
    console.log("Color: ".concat(vehiculo.color));
    console.log("Cantidad de pasajeros: ".concat(vehiculo.cantidadDePasajeros));
    // Verificamos si el vehículo es un Auto o un Camion
    if ("esDescapotable" in vehiculo) {
        console.log("Es descapotable: ".concat(vehiculo.esDescapotable));
    }
    else {
        console.log("Cantidad de acoplados: ".concat(vehiculo.cantidadDeAcoplados));
    }
}
// Creamos los objetos auto1 y camion1
var auto1 = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};
var camion1 = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};
// Llamamos a la función con los objetos correspondientes
mostrarAutoOCamion(auto1);
mostrarAutoOCamion(camion1);
