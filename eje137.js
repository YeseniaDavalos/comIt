let numeros = [];
for (let i = 0; i <= 100; i++) {
numeros.push(i);
}


let numerosIncrementados = numeros.map(numero => numero + 10);


for (let i = 0; i < 10; i++) {
console.log(`Índice: ${i}, Valor original: ${numeros[i]}, Valor incrementado: ${numerosIncrementados[i]}`);
}
