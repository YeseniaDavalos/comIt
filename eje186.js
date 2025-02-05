
function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        setTimeout(() => {
            onSuccess(mensaje);
        }, 1000);
    });
}

const promesa = crearPromesa("La promesa se resolvió exitosamente.");

promesa.then((mensaje) => {
    console.log(mensaje);
});
