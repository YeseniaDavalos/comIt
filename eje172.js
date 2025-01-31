function crearMultiplicador(numero1) {
    // Retorna una función que multiplica numero1 por numero2
    return function (numero2) {
      return numero1 * numero2;
    };
}

  // Llamamos a la función crearMultiplicador
const multiplicarPor3 = crearMultiplicador(3);

  // Ejecutamos la función retornada con el valor 5
const resultado = multiplicarPor3(5);

  // Mostramos en pantalla el resultado
  console.log(resultado); // Imprime: 15
