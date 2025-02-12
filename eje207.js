var notas = [6, 8, 7.5];
var notas2 = [5, 4, 8];
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    return Vehiculo;
}());
var vehiculo1 = new Vehiculo("Toyota", "Rav4", 2024, "negro");
var vehiculo2 = new Vehiculo("Toyota", "4Runner", 2010, "gris");
var vehiculo3 = new Vehiculo("Honda", "Pilot", 2020, "blanco");
var vehiculo4 = new Vehiculo("Honda", "CR-V", 2015, "rojo");
var vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];
console.log("Notas:", notas);
console.log("Notas2:", notas2);
console.log("Vehículos:", vehiculos);
