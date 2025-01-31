function mostrarUsuario (){
var usuario = {nombre: valor};
console.log('Dentro de la funcion:', usuario);
}

mostrarUsuario();

try {
    console.log("Desde el scope global:", usuario);
} catch (error) {
    console.log("Error: No se puede acceder a la variable 'usuario' desde el scope global.");
}