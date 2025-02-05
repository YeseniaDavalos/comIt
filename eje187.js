let tieneError = true;

function crearPromesa() {
    return new Promise((onSuccess, onError) => {
        if (tieneError) {
            onError("Error: La promesa no se cumplió. Muy feo no cumplir las promesas!!!");
        } else {
            onSuccess("Éxito: La promesa se cumplió correctamente!");
        }
    });
}

const promesa = crearPromesa();

promesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    });


