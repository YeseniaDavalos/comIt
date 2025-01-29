function autenticarUsuario(usuario, password) {
const credencialesValidas = {
"nacho": "Nerd1979",
"pedro": "Batman0217",
"marta": "Madre2312"
};

if (credencialesValidas[usuario] === password) {
console.log(`Bienvenido ${usuario}, te estábamos esperando`);
return true;
} else {
console.log("Por favor ingrese credenciales válidas");
return false;
}
}

// Ejemplos 
autenticarUsuario("nacho", "Nerd1979"); 
autenticarUsuario("pedro", "Batman0217"); 
autenticarUsuario("marta", "Madre2312"); 
autenticarUsuario("nacho", "1234"); 
autenticarUsuario("juan", "Batman0217"); 
