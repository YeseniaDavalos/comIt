let numeros = [];

for (let i = 0; i <= 10000; i++) {
numeros.push(i);
}


let sumaTotal = 0;


numeros.forEach((numero, index) => {
sumaTotal += numero;
console.log(`Suma parcial hasta el número ${numero}: ${sumaTotal}`);
});


console.log("\nResultado final:");
console.log(sumaTotal);


if (sumaTotal === 50005000) {
console.log("El ejercicio es correcto");
} else {
console.log("Verificar el ejercicio para obtener el resultado esperado!!!");
}
