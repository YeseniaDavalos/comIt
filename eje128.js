function agregarGusto(lista, gusto) {
lista.push(gusto);
return lista;
}


let gustosHelados = [];


gustosHelados = agregarGusto(gustosHelados, "Chocolate");
gustosHelados = agregarGusto(gustosHelados, "Vainilla");
gustosHelados = agregarGusto(gustosHelados, "Frutilla");
gustosHelados = agregarGusto(gustosHelados, "Dulce de leche");
gustosHelados = agregarGusto(gustosHelados, "Limón");
gustosHelados = agregarGusto(gustosHelados, "Crema americana");
gustosHelados = agregarGusto(gustosHelados, "Banana split");
gustosHelados = agregarGusto(gustosHelados, "Cereza");
gustosHelados = agregarGusto(gustosHelados, "Coco");
gustosHelados = agregarGusto(gustosHelados, "Menta granizada");


gustosHelados.reverse();

let sinStock = gustosHelados.splice(0, 2);

let eliminadosFinal = gustosHelados.splice(gustosHelados.length - 2, 2);
sinStock = sinStock.concat(eliminadosFinal);


console.log("Gustos de helados disponibles:", gustosHelados);
console.log("Gustos sin stock:", sinStock);
