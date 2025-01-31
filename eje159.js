const propiedad1 = 'nombre';
const propiedad2 = 'edad';

// Crear el objeto persona
const persona = {
nombre: 'Yesenia',
edad: 30 
};

// Mostrar valores utilizando corchetes y strings
console.log(persona['nombre']); 
console.log(persona['edad']);  

// Mostrar valores utilizando las variables propiedad1 y propiedad2
console.log(persona[propiedad1]); // Yesenia
console.log(persona[propiedad2]); // 30
