// 'this' en funciones normales depende del contexto de la función.
// En el siguiente ejemplo, 'this' hace referencia al objeto global (window en navegadores, global en Node.js).
function saludar() {
    console.log(this); // En modo estricto 'undefined', en modo no estricto es el objeto global
}

saludar();

  // Métodos call, apply y bind
  // Estos métodos nos permiten establecer explícitamente el valor de 'this' cuando llamamos a una función.

const persona = {
    nombre: "Yesenia"
};

function presentar() {
    console.log("Hola, soy " + this.nombre);
}

  // call: llama la función con un valor específico de 'this'
  presentar.call(persona); // 'this' será el objeto 'persona'

  // apply: es similar a call, pero los argumentos se pasan como un array
  presentar.apply(persona); // 'this' será el objeto 'persona'

  // bind: devuelve una nueva función con 'this' ligado al objeto que pasamos
const presentarPersona = presentar.bind(persona);
  presentarPersona(); // 'this' será el objeto 'persona', pero se ejecuta cuando la llamamos después
