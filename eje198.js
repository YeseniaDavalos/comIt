class Vehiculo {
    constructor(marca, modelo, cantidadDePuertas, anio, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.cantidadDePuertas = cantidadDePuertas;
    this.anio = anio;
    this.color = color;
    }

    toString() {
    console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    }

    getColor() {
    return this.color;
    }
}

  // Crear instancias
const vehiculo = new Vehiculo("Toyota", "Rav4", 4, 2024, "Black");
const vehiculo2 = new Vehiculo("Honda", "Pilot", 4, 2025, "Dark Blue");

  // Mostrar los valores en consola
vehiculo.toString();
console.log(vehiculo.getColor());
vehiculo2.toString();
console.log(vehiculo2.getColor());
