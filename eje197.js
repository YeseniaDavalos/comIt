const vehiculo = {
    marca: "Toyota",
    modelo: "Rav4",
    cantidadDePuertas: 4,
    anio: 2024,
    color: "black",
    toString: function () {
    console.log(`${this.marca} ${this.modelo} ${this.anio}`);
    },
    getColor: function () {
    return this.color;
    },
};

  // Crear una nueva instancia usando Object.create
const vehiculo2 = Object.create(vehiculo);

  // Asignar nuevos valores a las propiedades
vehiculo2.marca = "Honda";
vehiculo2.modelo = "Pilot";
vehiculo2.cantidadDePuertas = 4;
vehiculo2.anio = 2025;
vehiculo2.color = "Dark Blue";

  // Mostrar los valores en consola
vehiculo2.toString();
console.log(vehiculo2.getColor());
