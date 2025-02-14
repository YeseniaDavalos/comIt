var mascota1 = {
    nombre: "Firu",
    edad: 3,
};
var mascota2 = {
    nombre: "Pelusa",
    edad: 5,
    fechaDeNacimiento: "10/05/2018"
};
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
}
mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);
