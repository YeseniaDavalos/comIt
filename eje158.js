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

  // Declarar la variable zona y localidadFiltrada
  const zona = 1; // Cambiar el valor de 1 a 3 según la zona deseada
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

  // Función para ordenar los juegos según el precio
function ordenarPorPrecio(juegos, orden = 'ASC') {
    return juegos.sort((a, b) => {
    if (orden === 'ASC') {
        return a.precio - b.precio;
    } else if (orden === 'DESC') {
        return b.precio - a.precio;
    }
    return 0;
    });
}

  // Mostrar productos ordenados por precio ascendente
console.log("\nOrdenados por precio ascendente:");
ordenarPorPrecio([...juegos], 'ASC').forEach((juego) => juego.imprimirEnPantalla());

  // Mostrar productos ordenados por precio descendente
console.log("\nOrdenados por precio descendente:");
ordenarPorPrecio([...juegos], 'DESC').forEach((juego) => juego.imprimirEnPantalla());

  // Filtrar por localidad "Capital Federal" y mostrar ordenados de manera descendente
console.log("\nFiltrar por Capital Federal y ordenar por precio descendente:");
ordenarPorPrecio(juegos.filter((juego) => juego.localidad === "Capital Federal"), 'DESC').forEach((juego) => juego.imprimirEnPantalla());
