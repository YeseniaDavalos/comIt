let contador = 1;
console.log("Inicio");

const timer = setInterval(() => {
    if (contador === 10) {
        console.log("Fin del contador, pasaron 10 segundos");
        clearInterval(timer);
    } else {
        console.log(`Pasaron ${contador} segundos.`);
        console.log("*".repeat(contador));
        contador++;
    }
}, 1000);