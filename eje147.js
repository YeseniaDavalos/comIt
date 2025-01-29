
let usuario = {};


usuario.username = "batman";
usuario.password = "Alfred1960KPO!";


function autenticarUsuario(usuario) {
return usuario.username === "batman" && usuario.password === "Alfred1960KPO!";
}


if (autenticarUsuario(usuario)) {

console.log("Usuario autenticado:");
console.log(usuario);
} else {

console.error("Usuario no autenticado");
}
