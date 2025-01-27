let usuario = 'pepe2017';
let password = '12345';

// Verificar si el usuario y el password son correctos utilizando operador ternario
console.log(
(usuario === 'pepe2017' && password === '12345') 
? 'El usuario está autenticado y puede ver el contenido del sitio' 
: 'Error, no se pudo autenticar al usuario, puede intentarlo más tarde'
);
