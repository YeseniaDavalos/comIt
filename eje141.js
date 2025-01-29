let gastosViaje = [100, 1000, 200]; 


let totalGastos = gastosViaje.reduce((acumulador, gasto) => acumulador + gasto, 0);


console.log(`Vamos a gastar ${totalGastos} pesos en el viaje.`);
