function numeroMasGrande(numero1, numero2) {
if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
console.log("Esta función espera valores del tipo number");
return;
}

if (numero1 === numero2) {
console.log(`Los dos números son ${numero1}`);
} else if (numero1 > numero2) {
console.log(`El número ${numero1} es más grande que ${numero2}`);
} else {
console.log(`El número ${numero2} es más grande que ${numero1}`);
}
}

// Ejemplo de ejecución
numeroMasGrande(10, 5);
numeroMasGrande(5, 10);
numeroMasGrande(7, 7);
numeroMasGrande("10", 5);
