var usuario = { nombre: "Yesenia" }; 


function isUserValid() {
  // Verificar si el nombre del usuario coincide
if (usuario.nombre === "Yesenia") {
    console.log("Éxito: El nombre del usuario es correcto.");
} else {
    console.log("Error: El nombre del usuario no coincide.");
}
}

// Llamar a la función para ejecutar el código
isUserValid();

// Cambiar el valor del objeto usuario y probar de nuevo
usuario = { nombre: "Juan" }; 
isUserValid();
