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


console.log("Gustos de helados de inicio a fin:");
gustosHelados.forEach((gusto) => console.log(gusto));


console.log("\nGustos de helados de fin a inicio:");
for (let i = gustosHelados.length - 1; i >= 0; i--) {
console.log(gustosHelados[i]);
}
