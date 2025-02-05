function crearPromesa(delay, tieneError = false) {
    return new Promise((onSuccess, onError) => {
        setTimeout(() => {
            if (tieneError) {
                onError(`Pasaron ${delay} segundos y la promesa no fue exitosa`);
            } else {
                onSuccess(`Pasaron ${delay} segundos y la promesa fue exitosa`);
            }
        }, delay * 1000);
    });
}

const promesas = [
    crearPromesa(1),
    crearPromesa(5),
    crearPromesa(10),
    crearPromesa(3, true)
];

promesas.forEach(promesa => {
    promesa
        .then(mensaje => console.log(mensaje))
        .catch(error => console.error(error));
});
