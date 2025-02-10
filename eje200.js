const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this); // Aquí 'this' hace referencia al objeto 'persona'
      console.log(this.nombre); // 'this.nombre' accede a la propiedad 'nombre' del objeto 'persona'
    },
    saludar2: () => {
      console.log(this); // Aquí 'this' no hace referencia al objeto 'persona', sino al contexto en el que fue definida la función (puede ser window en un navegador o module.exports en Node.js)
    },
};

  // Diferencias entre function y arrow function en este caso:
  // - En 'saludar', 'this' hace referencia al objeto 'persona' porque es una función normal.
  // - En 'saludar2', 'this' no hace referencia a 'persona', sino al contexto global, porque las funciones flecha no crean su propio 'this'.
  // - Si queremos que 'this' haga referencia al objeto 'persona', debemos usar una función normal en lugar de una arrow function.
