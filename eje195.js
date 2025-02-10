const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan, Pablo, Char"],
    leGustaJavaScript: true,
};

const estadoAlumno = {
    nombre: "Yesenia",
    apellido: "Dávalos",
    amigos: ["Ana", "Carlos", "Elena"],
};

const nuevoEstado = { ...estadoProfesor, ...estadoAlumno };

console.log(nuevoEstado);
