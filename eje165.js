const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear la función forEach
function forEach(coleccion, funcion) {
    // Recorremos la colección utilizando un ciclo for
    for (let i = 0; i < coleccion.length; i++) {
        // Llamamos a la función pasando el valor actual de la colección
        funcion(coleccion[i]);
    }
}

// Llamar a la función forEach pasando la colección numeros
// y una función que imprima en pantalla cada uno de los valores
forEach(numeros, function(valor) {
    console.log(valor);
});
