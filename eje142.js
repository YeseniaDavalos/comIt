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


let mutantesString = mutantes.reduce((acumulador, mutante, indice) => {
return indice === mutantes.length - 1
? acumulador + mutante
: acumulador + mutante + ", ";
}, "");


console.log(mutantesString);
