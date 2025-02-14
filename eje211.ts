type Mascota = {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
};

// Definimos los objetos mascota1 y mascota2
const mascota1: Mascota = {
    nombre: "Firu",
    edad: 3,
};

const mascota2: Mascota = {
    nombre: "Pelusa",
    edad: 5,
    fechaDeNacimiento: "10/05/2018"
};

// Definimos la función para mostrar los datos de la mascota
function mostrarDatosMascota(mascota: Mascota): void {
    if (mascota.fechaDeNacimiento) {
        console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad} años.`);
}


mostrarDatosMascota(mascota1);
mostrarDatosMascota(mascota2);
