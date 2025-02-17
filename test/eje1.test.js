import { nombre, apellido, edad,fechaDeNacimiento, direccion } from "../eje1";  

describe("Pruebas en eje1", () => {
    test("Las variables están definidas", () => {
        expect(nombre).toBeUndefined();
        expect(apellido).toBeUndefined();
        expect(edad).toBeUndefined();
        expect(fechaDeNacimiento).toBeUndefined();
        expect(direccion).toBeUndefined();
    });
    
    });
