const persona = {
    nombre: "Yesenia",
    apellido: "Dávalos",
    edad: 30,
    profesion: "Desarrolladora",
    saludar: function () {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
    },
    presentarse: function () {
    console.log(`Me llamo ${this.nombre} ${this.apellido} y soy ${this.profesion}.`);
    },
    cumplirAnios: function () {
    this.edad++;
    console.log(`Feliz cumpleaños! Ahora tienes ${this.edad} años.`);
    }
};

  // Uso de for...in para recorrer las propiedades del objeto
for (const propiedad in persona) {
    if (typeof persona[propiedad] === "function") {
      persona[propiedad](); // Ejecuta los métodos
    } else {
    console.log(`${propiedad}: ${persona[propiedad]}`); 
    }
}
