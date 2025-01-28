let numero = 1;
let sumaParcial = 0;

do {
sumaParcial += numero;
console.log(`Suma parcial hasta ${numero}: ${sumaParcial}`);
numero += 2;
} while (numero <= 1000);