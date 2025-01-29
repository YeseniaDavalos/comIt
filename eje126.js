const gustosHelados = [];


function agregarGusto(coleccion, nuevoGusto) {
coleccion.push(nuevoGusto);
return coleccion;
}


agregarGusto(gustosHelados, "Chocolate");
agregarGusto(gustosHelados, "Vainilla");
agregarGusto(gustosHelados, "Frutilla");
agregarGusto(gustosHelados, "Dulce de leche");
agregarGusto(gustosHelados, "Limón");
agregarGusto(gustosHelados, "Coco");
agregarGusto(gustosHelados, "Menta granizada");
agregarGusto(gustosHelados, "Crema del cielo");
agregarGusto(gustosHelados, "Tiramisú");
agregarGusto(gustosHelados, "Banana split");


const gustosReorganizados = gustosHelados.reverse();

console.log("Lista reorganizada de gustos de helados:", gustosReorganizados);
