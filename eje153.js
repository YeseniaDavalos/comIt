const aritmetica = {

    suma: function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('Resultado de la suma:', a + b);
    } else {
        console.log('Error: ambos parámetros deben ser números.');
    }
    },


    resta: function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('Resultado de la resta:', a - b);
    } else {
        console.log('Error: ambos parámetros deben ser números.');
    }
    },


    multiplicar: function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('Resultado de la multiplicación:', a * b);
    } else {
        console.log('Error: ambos parámetros deben ser números.');
    }
    },


    dividir: function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (b !== 0) {
        console.log('Resultado de la división:', a / b);
        } else {
        console.log('Error: no se puede dividir entre 0.');
        }
    } else {
        console.log('Error: ambos parámetros deben ser números.');
    }
    },


    mostrarModulo: function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('Resultado del módulo:', a % b);
    } else {
        console.log('Error: ambos parámetros deben ser números.');
    }
    }
};


aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);
