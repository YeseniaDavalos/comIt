let numero = 0;
let sumaParcial = 0;

do {
sumaParcial += numero;
console.log(`Suma parcial hasta ${numero}: ${sumaParcial}`);
numero++;
} while (numero <= 1000);
