let promedioParaAprobar = 6;
let promedioDelAlumno = 4;

const esPromedioSuficiente = promedioDelAlumno >= promedioParaAprobar;
console.log("El alumno tiene un promedio mayor o igual que el requerido:", esPromedioSuficiente);

if (!esPromedioSuficiente) {
const puntos = promedioParaAprobar - promedioDelAlumno;
console.log(`Al alumno le faltaron ${puntos} puntos para aprobar.`);
}
