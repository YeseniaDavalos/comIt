function obtenerFuncion() {
    // Se declara una variable local llamada nombre
    const nombre = "JavaScript";

    // Se define una función anidada llamada mostrarMensaje
    function mostrarMensaje() {
      // La función utiliza la variable nombre del ámbito exterior
    console.log("Yo <3 " + nombre);
    }

    // Se llama a la función mostrarMensaje desde dentro de obtenerFuncion
    mostrarMensaje();
}

  // Se invoca la función obtenerFuncion
obtenerFuncion();
