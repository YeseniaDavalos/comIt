function saludar() {
    // Definimos los nombres que se pasarán
    const nombres = ["Nicolas", "Natalia", "Javier", "Ana"];
    
    // Iteramos sobre los nombres y mostramos el saludo para cada uno
    nombres.forEach(nombre => {
    console.log(`¡Hola, ${nombre}!`);
    });
}

  // Llamamos a la función saludar
saludar();
