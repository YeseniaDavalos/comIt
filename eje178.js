function cantidadDeCaracteres(texto) {
    // Verificamos si el texto es undefined o nulo
    if (texto === undefined || texto === null) {
    console.log(0);
    } else {
      // Si el texto es una cadena vacía o tiene contenido, mostramos la longitud
    console.log(texto.length);
    }
}

  // Llamamos a la función con los valores solicitados
  cantidadDeCaracteres("perro");   // 5
  cantidadDeCaracteres("");        // 0
  cantidadDeCaracteres(undefined); // 0
