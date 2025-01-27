// Declarar las variables numero1 y numero2
let numero1 = 10;
let numero2 = 20;

// Comparar las variables y mostrar el mensaje correspondiente
if (numero1 === numero2) {
console.log(`Los dos números son iguales: ${numero1}`);
} else if (numero1 > numero2) {
console.log(`La variable numero1 (${numero1}) es más grande que numero2 (${numero2})`);
} else {
console.log(`La variable numero2 (${numero2}) es más grande que numero1 (${numero1})`);
}

// Cambiar los valores y volver a ejecutar
numero1 = 30;
numero2 = 30;

if (numero1 === numero2) {
console.log(`Los dos números son iguales: ${numero1}`);
} else if (numero1 > numero2) {
console.log(`La variable numero1 (${numero1}) es más grande que numero2 (${numero2})`);
} else {
console.log(`La variable numero2 (${numero2}) es más grande que numero1 (${numero1})`);
}
