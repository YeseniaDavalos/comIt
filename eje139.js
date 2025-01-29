let numeros = [];
for (let i = 1; i <= 100; i++) {
numeros.push(i);
}


let numerosPares = numeros.filter(numero => numero % 2 === 0);


let numerosImpares = numeros.filter(numero => numero % 2 !== 0);


console.log("Últimos 10 números pares:");
console.log(numerosPares.slice(-10));

console.log("Últimos 10 números impares:");
console.log(numerosImpares.slice(-10));
