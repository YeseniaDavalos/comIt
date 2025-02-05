// Ejemplo 1
// En este caso, la variable "numero1" es declarada con var, lo que significa que se eleva (hoisting), pero su valor es undefined hasta que se le asigna 10.
console.log(numero1); // undefined
var numero1 = 10;

// Ejemplo 2
// Las funciones declaradas con "function" también se elevan completamente, por lo que se puede llamar a la función antes de su declaración.
saludar(); // "Hola Mundo!"

function saludar() {
console.log("Hola Mundo!");
}

// Ejemplo 3
// Las variables declaradas con let también se elevan, pero no pueden ser accedidas antes de su declaración debido a la "Temporal Dead Zone".
// Esto generará un error de referencia (ReferenceError).
console.log(numero2); // ReferenceError
let numero2 = 20;

// Ejemplo 4
// La variable "numero3" es declarada con var dentro de la función, por lo que su declaración se eleva, pero su valor es undefined hasta su asignación.
function prueba() {
  console.log(numero3); // undefined
var numero3 = 5;
  console.log(numero3); // 5
}

prueba();

// Ejemplo 5
// La variable "saludar" se eleva, pero su asignación con la función anónima no se realiza hasta la línea correspondiente.
// Llamar a "saludar()" antes de su asignación generará un TypeError porque es undefined.
saludar(); // TypeError: saludar is not a function

var saludar = function () {
console.log("Hola Mundo!");
};

// Ejemplo 6
// La variable "numero4" está declarada con let dentro de un bloque, pero no puede ser accedida antes de su declaración debido a la "Temporal Dead Zone".
// Esto generará un ReferenceError.
{
  console.log(numero4); // ReferenceError
let numero4 = 15;
}
