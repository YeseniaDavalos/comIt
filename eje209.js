var IconsSize;
(function (IconsSize) {
    IconsSize[IconsSize["SMALL"] = 8] = "SMALL";
    IconsSize[IconsSize["MEDIUM"] = 12] = "MEDIUM";
    IconsSize[IconsSize["LARGE"] = 24] = "LARGE";
    IconsSize[IconsSize["XL"] = 48] = "XL";
})(IconsSize || (IconsSize = {}));
// Crear un objeto icono con las propiedades nombre y tamanio
var icono = {
    nombre: "wave",
    tamanio: IconsSize.XL // 48
};
// Definir la función showIcon con los tipos de parámetros
function showIcon(nombre, tamanio) {
    console.log("El nombre del icono es ".concat(nombre, " y su tama\u00F1o es de ").concat(tamanio, " puntos"));
}
// Llamar a la función showIcon con el objeto icono
showIcon(icono.nombre, icono.tamanio);
// Llamar a la función showIcon con "muscle" y el tamaño SMALL
showIcon("muscle", IconsSize.SMALL);
