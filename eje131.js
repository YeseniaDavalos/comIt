let alumnas = [
"Ana López",
"María Pérez",
"Laura García",
"Sofía Martínez",
"Isabel Rodríguez"
];


let alumnos = [
"Juan Fernández",
"Carlos Sánchez",
"Pedro González",
"Miguel Díaz",
"Luis Ramírez"
];


let todosLosAlumnos = alumnas.concat(alumnos);


console.log("Nombres de las alumnas:");
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);


console.log("\nNombres de los alumnos:");
let i = 0;
while (i < alumnos.length) {
console.log(alumnos[i]);
i++;
}


console.log("\nNombres de todos los alumnos del curso:");
for (let i = 0; i < todosLosAlumnos.length; i++) {
console.log(todosLosAlumnos[i]);
}
