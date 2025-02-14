type Alumno = [number, string];


const alumnos: string[] = ["Nicolas", "Clara", "Manuel", "Alejandra"];


function mostrarAlumno(alumno: Alumno): void {
    console.log(`ID: ${alumno[0]} Alumno: ${alumno[1]}`);
}

// Recorrer la colección de alumnos con forEach
alumnos.forEach((nombre, indice) => {
    const alumno: Alumno = [indice, nombre];
    mostrarAlumno(alumno);
});
