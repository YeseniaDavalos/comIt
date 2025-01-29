let mutantes = [
"Prof. Charles Francis Xavier",
"Scott Summers",
"Dr. Henry Philip 'Hank' McCoy",
"Jean Elaine Grey",
"Calvin Montgomery Rankin",
"Kevin Sydney",
"Lorna Sally Dane",
"Alexander Summers",
"Suzanne Chan",
"James 'Logan' Howlett",
"Ororo Monroe"
];


console.log("Lista original de mutantes:");
console.log(mutantes);


let listaOrdenada = Array.from(mutantes).sort();

console.log("\nLista ordenada de mutantes:");
console.log(listaOrdenada);


let listaRevertida = Array.from(listaOrdenada).reverse();


console.log("\nLista revertida de mutantes:");
console.log(listaRevertida);


let nombresUnidos = listaRevertida.join('*');


console.log("\nNombres de mutantes separados por *:");
console.log(nombresUnidos);
