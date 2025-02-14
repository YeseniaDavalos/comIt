interface Animal {
    raza: string;
    muerde: boolean;
    color: ("marron" | "negro" | "blanco" | "gris")[];
}


function mostrarDatosDeLaColeccion(datos: unknown): void {
    if (Array.isArray(datos)) {
    (datos as Animal[]).forEach((animal) => {
        console.log(`Raza: ${animal.raza}`);
        console.log(`Muerde: ${animal.muerde ? "Sí" : "No"}`);
        console.log(`Colores: ${animal.color.join(", ")}`);
        console.log("----------------------");
    });
    } else {
    console.error("Los datos proporcionados no son una colección de animales.");
    }
}


const animales: Animal[] = [
    { raza: "Cocker", muerde: true, color: ["negro"] },
    { raza: "Persa", muerde: false, color: ["marron", "blanco"] },
    { raza: "León Africano", muerde: true, color: ["marron", "negro"] },
];


mostrarDatosDeLaColeccion(animales);
