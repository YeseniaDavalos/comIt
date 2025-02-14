var mascota1 = {
    nombre: "Firu",
    edad: 3,
};
var mascota2 = {
    nombre: "Pelusa",
    edad: 5,
    fechaDeNacimiento: "10/05/2018"
};
// Definimos la función para mostrar los datos de la mascota
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad, " a\u00F1os."));
}
// Llamamos a la función con ambas mascotas
mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);
