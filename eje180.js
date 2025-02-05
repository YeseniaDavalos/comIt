function mostrarNumeros(numero) {
    // Verificamos si el número es mayor que 10
    if (numero <= 10) {
    console.log(numero);
      mostrarNumeros(numero + 1);  // Llamada recursiva con el número incrementado
    }
}

  // Llamamos a la función con el valor inicial 0
mostrarNumeros(0);

  // Llamamos a la función con otro valor inicial 4
mostrarNumeros(4);

