interface Mascota {
    nombre: string;
    edad: number;
}


type TipoDeMascota = "perro" | "gato" | "mono";


function mostrarMascota(mascota: Mascota, tipo: TipoDeMascota): void {
    if (tipo === "perro") {
    console.log(`La mascota es un Canino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
    } else if (tipo === "gato") {
    console.log(`La mascota es un Felino y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
    } else if (tipo === "mono") {
    console.log(`La mascota es un Monito y se llama ${mascota.nombre} y tiene ${mascota.edad} años`);
    }
}


const perro: Mascota = { nombre: "Firulais", edad: 5 };
const gato: Mascota = { nombre: "Michi", edad: 3 };
const mono: Mascota = { nombre: "George", edad: 2 };


mostrarMascota(mono, "mono");
mostrarMascota(gato, "gato");
mostrarMascota(perro, "perro");
