
let usuario = {};


usuario.username = "batman";
usuario.password = "Alfred1960KPO!";


function autenticarUsuario(nombreDeUsuario, clave) {
return nombreDeUsuario === "batman" && clave === "Alfred1960KPO!";
}


if (autenticarUsuario(usuario.username, usuario.password)) {

console.log("Usuario autenticado:");
console.log(usuario);
} else {

console.error("Usuario no autenticado");
}
