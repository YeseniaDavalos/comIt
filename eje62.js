let numeroDeMes = 5; 
let nombreDelMes = null;
let cantidadDeDias = null;

switch (numeroDeMes) {
case 1:
nombreDelMes = "Enero";
cantidadDeDias = null;
}

if (nombreDelMes === null || cantidadDeDias === null) {
console.log("Error: Ingrese un número entre 1 y 12");
} else {
console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días.`);
}
