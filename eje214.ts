interface Vehiculo {
    marca: string;
    modelo: string;
    color: string;
    cantidadDePasajeros: number;
}


interface Auto1 extends Vehiculo {
    esDescapotable: boolean;
}

// Definimos la interfaz Camion que extiende de Vehiculo
interface Camion1 extends Vehiculo {
    cantidadDeAcoplados: number;
}

// Nueva función que muestra los datos del vehículo (Auto1 o Camion1)
function mostrarAutoOCamion(vehiculo: Auto1 | Camion1): void {
    console.log(`Marca: ${vehiculo.marca}`);
    console.log(`Modelo: ${vehiculo.modelo}`);
    console.log(`Color: ${vehiculo.color}`);
    console.log(`Cantidad de pasajeros: ${vehiculo.cantidadDePasajeros}`);

    // Verificamos si el vehículo es un Auto o un Camion
    if ("esDescapotable" in vehiculo) {
        console.log(`Es descapotable: ${vehiculo.esDescapotable}`);
    } else {
        console.log(`Cantidad de acoplados: ${vehiculo.cantidadDeAcoplados}`);
    }
}

// Creamos los objetos auto1 y camion1
const auto1: Auto1 = {
    marca: "Honda",
    modelo: "Civic",
    color: "Negro",
    cantidadDePasajeros: 5,
    esDescapotable: true,
};

const camion1: Camion1 = {
    marca: "Volvo",
    modelo: "FH16",
    color: "Rojo",
    cantidadDePasajeros: 3,
    cantidadDeAcoplados: 2,
};

// Llamamos a la función con los objetos correspondientes
mostrarAutoOCamion(auto1);
mostrarAutoOCamion(camion1);

