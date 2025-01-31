function contar() {
    // Variable local contador inicializada en 0
    let contador = 0;

    // Retornamos una función anónima
    return function () {
      // Incrementamos el valor de contador
    contador++;
      // Imprimimos el valor actualizado de contador
    console.log(contador);
    };
}

  // Asignamos a incrementar la función retornada por contar
const incrementar = contar();

  // Llamamos a la función incrementar múltiples veces
incrementar(); 
incrementar(); 
incrementar(); 
incrementar(); 
