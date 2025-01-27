// Declarar la variable dia y asignar un número del 1 al 7
let dia = 3;

// Declarar la variable nombreDelDia y asignar un valor null
let nombreDelDia = null;

// Usar un switch para asignar el nombre del día
switch (dia) {
case 1:
nombreDelDia = 'lunes';
break;
case 2:
nombreDelDia = 'martes';
break;
case 3:
nombreDelDia = 'miércoles';
break;
case 4:
nombreDelDia = 'jueves';
break;
case 5:
nombreDelDia = 'viernes';
break;
case 6:
nombreDelDia = 'sábado';
break;
case 7:
nombreDelDia = 'domingo';
break;
default:
nombreDelDia = null;
}

// Verificar si nombreDelDia no es null
if (nombreDelDia !== null) {
console.log(`El día seleccionado es ${nombreDelDia}`);
} else {
console.log('Por favor seleccionar un número de 1 a 7');
}
