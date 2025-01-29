function obtenerPerimetroRectangulo(base, altura) {
let perimetro;


if (isNaN(base) || isNaN(altura)) {
console.log("Ambos parámetros deben ser números.");
return;
}


if (base === altura) {
perimetro = 4 * base;  
} else {
perimetro = 2 * (base + altura);  
}


console.log(`El perímetro es ${perimetro}`);


if (perimetro > 100) {
console.log("El perímetro es muy grande");
} else {
console.log("Este perímetro no es muy grande");
}

return perimetro;
}


obtenerPerimetroRectangulo(10, 10); 
obtenerPerimetroRectangulo(20, 3)
