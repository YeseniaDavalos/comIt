function dividir(numero1, numero2) {
    if (numero2 === 0) {
      // Lanzar un error si numero2 es 0
    throw new Error("No se puede dividir por 0");
    }
    // Retornar el resultado de la división
    return numero1 / numero2;
}

  // Llamadas a la función dividir con manejo de errores
try {
    console.log(dividir(10, 2)); // Imprime: 5
} catch (error) {
    console.log(error.message);
}

try {
    console.log(dividir(10, 0)); // Lanza un error
} catch (error) {
    console.log(error.message); // Imprime: No se puede dividir por 0
}

try {
    console.log(dividir(15, 3)); // Imprime: 5
} catch (error) {
    console.log(error.message);
}
