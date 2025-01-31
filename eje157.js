const juegos = [
    {
    nombre: "Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado",
    precio: 1060,
    cantidadVendida: 276,
    localidad: "Capital Federal",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
    {
    nombre: "Lego Marvel Super Heroes",
    precio: 700,
    cantidadVendida: 48,
    localidad: "Capital Federal",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
    {
    nombre: "Gta V Ps4 Físico",
    precio: 1449,
    cantidadVendida: 82,
    localidad: "Santa Fe",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
    {
    nombre: "Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo",
    precio: 1190,
    cantidadVendida: 348,
    localidad: "Capital Federal",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
    {
    nombre: "Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado",
    precio: 1250,
    cantidadVendida: 445,
    localidad: "Buenos Aires",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
    {
    nombre: "Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!",
    precio: 890,
    cantidadVendida: 182,
    localidad: "Capital Federal",
    imprimirEnPantalla: function () {
        console.log(`${this.nombre}\n$ ${this.precio}\n${this.cantidadVendida} vendidos\n${this.localidad}`);
    },
    },
];


  const zona = 2; // Cambiar el valor de 1 a 3 según la zona deseada
let localidadFiltrada;

switch (zona) {
    case 1:
    localidadFiltrada = "Capital Federal";
    break;
    case 2:
    localidadFiltrada = "Santa Fe";
    break;
    case 3:
    localidadFiltrada = "Buenos Aires";
    break;
    default:
    localidadFiltrada = "Capital Federal";
}


juegos
    .filter((juego) => juego.localidad === localidadFiltrada)
    .forEach((juego) => juego.imprimirEnPantalla());
