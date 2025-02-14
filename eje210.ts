interface Mascota {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
}

  // Creamos el objeto mascota
let mascota: Mascota = {
    nombre: "Luna",
    edad: 3,
};


function mostrarDatosMascota(mascota: Mascota): void {
    if (mascota.fechaDeNacimiento) {
    console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
}

  // Llamamos a la función sin la fecha de nacimiento
mostrarDatosMascota(mascota);

  // Modificamos el objeto para agregar la fecha de nacimiento
mascota.fechaDeNacimiento = "2021-05-15";

  // Volvemos a llamar a la función
mostrarDatosMascota(mascota);