function obtenerIDUsuario() {
return 50;
}

function usuarioValido() {
const idUsuario = obtenerIDUsuario();
return idUsuario <= 30;
}

if (usuarioValido()) {
console.log("El usuario es válido");
} else {
console.log("El usuario no es válido");
}
