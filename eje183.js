const contador = (function () {
    let acumulador = 0;
    
    return {
    increment: function () {
        acumulador++;
    },
    decrement: function () {
        acumulador--;
    },
    reset: function () {
        acumulador = 0;
    },
    getCount: function () {
        console.log(acumulador);
    },
    };
})();


contador.increment();
contador.getCount(); 
contador.increment();
contador.getCount(); 


contador.decrement();
contador.getCount(); 
contador.reset();
contador.getCount(); 


  console.log(typeof acumulador); // undefined
