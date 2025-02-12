enum IconsSize {
    SMALL = 8,
    MEDIUM = 12,
    LARGE = 24,
    XL = 48
}

  // Crear un objeto icono con las propiedades nombre y tamanio
const icono = {
    nombre: "wave",
    tamanio: IconsSize.XL // 48
};

  // Definir la función showIcon con los tipos de parámetros
function showIcon(nombre: string, tamanio: IconsSize): void {
    console.log(`El nombre del icono es ${nombre} y su tamaño es de ${tamanio} puntos`);
}

  // Llamar a la función showIcon con el objeto icono
showIcon(icono.nombre, icono.tamanio);

  // Llamar a la función showIcon con "muscle" y el tamaño SMALL
showIcon("muscle", IconsSize.SMALL);
