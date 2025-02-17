import { nombre, edad } from "../eje4";  

describe("Pruebas en eje2.js", () => {
    test("El nombre debe ser 'Yess'", () => {
        expect(nombre).toBe("Yess");
    });
    
    test("La edad debe ser 30", () => {
        expect(edad).toBe(30);
    });
    });