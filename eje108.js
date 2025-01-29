function ordenarNumeros(numero1, numero2, numero3, descendente = false) {
const numeros = [numero1, numero2, numero3];

if (descendente) {
numeros.sort((a, b) => b - a);
console.log(numeros.join(', '));
} else {
numeros.sort((a, b) => a - b);
console.log(numeros.join(', '));
}
}

// Ejemplo de ejecución
ordenarNumeros(10, 8, 25); // 8, 10, 25
ordenarNumeros(10, 8, 25, true); // 25, 10, 8
