var alumnos = ["Nicolas", "Clara", "Manuel", "Alejandra"];
function mostrarAlumno(alumno) {
    console.log("ID: ".concat(alumno[0], " Alumno: ").concat(alumno[1]));
}
// Recorrer la colección de alumnos con forEach
alumnos.forEach(function (nombre, indice) {
    var alumno = [indice, nombre];
    mostrarAlumno(alumno);
});
