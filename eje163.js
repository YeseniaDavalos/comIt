function saludar(mensaje, despedida) {
    console.log(mensaje);
    despedida();
}

function despedida() {
    console.log("Gracias por visitar, ¡hasta pronto!");
}

saludar("Bienvenidos a JavaScript", despedida);
