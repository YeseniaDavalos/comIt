function mostrarNumeros(inicio, fin) {

if (isNaN(inicio) || isNaN(fin)) {
console.log("Ambos parámetros deben ser números.");
return;
}


inicio = Number(inicio);
fin = Number(fin);

if (inicio === fin) {
console.log(`Los números son iguales: ${inicio}`);
return;
}


if (inicio > fin) {
for (let i = inicio; i >= fin; i--) {
console.log(i);
}
} else { // Si el inicio es menor que el fin, mostrar la secuencia ascendente
for (let i = inicio; i <= fin; i++) {
console.log(i);
}
}
}

mostrarNumeros(0, 1000);
mo
