// Creamos el objeto mascota
var mascota = {
    nombre: "Luna",
    edad: 3,
};
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
}
// Llamamos a la función sin la fecha de nacimiento
mostrarDatosMascota(mascota);
// Modificamos el objeto para agregar la fecha de nacimiento
mascota.fechaDeNacimiento = "2021-05-15";
// Volvemos a llamar a la función
mostrarDatosMascota(mascota);
