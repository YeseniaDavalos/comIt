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

if (mutantes.includes("Lorna Sally Dane")) {

return;
} else {

mutantes.forEach(mutante => console.log(mutante));
}


let mutantesString = "";
for (let i = 0; i < mutantes.length; i++) {
mutantesString += mutantes[i];
if (i < mutantes.length - 1) {
mutantesString += ", ";
}
}


console.log("\nRepresentación de los mutantes en formato string:");
console.log(mutantesString);
