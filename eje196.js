function Vehiculo(marca, modelo, cantidadDePuertas, anio, color) {
    return {
    marca,
    modelo,
    cantidadDePuertas,
    anio,
    color,
    toString: function () {
        console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
        return this.color;
    },
    };
}

const vehiculo = Vehiculo("Toyota", "Rav4", 4, 2024, "Black");
vehiculo.toString();
console.log(vehiculo.getColor());

const vehiculo2 = Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");
vehiculo2.toString();
console.log(vehiculo2.getColor());
