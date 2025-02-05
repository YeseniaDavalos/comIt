function calcularPromedio(...numeros) {
    // Si no se pasan números, el promedio es 0
    if (numeros.length === 0) {
    return 0;
    }

    // Calculamos la suma de todos los números
    const suma = numeros.reduce((acumulado, numero) => acumulado + numero, 0);

    // Calculamos el promedio
    return suma / numeros.length;
}

  // Llamamos a la función con los valores solicitados
console.log(calcularPromedio(10, 20, 30));          
console.log(calcularPromedio(5, 15, 25, 35, 45));    
console.log(calcularPromedio(100, 200));            
console.log(calcularPromedio());        