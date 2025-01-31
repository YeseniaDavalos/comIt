const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,

    
    perderEnergia: function (danio) {
    if (danio > 0) {
        this.energia -= danio;
        if (this.energia < 0) {
        this.energia = 0; 
        }
    }
    },

    
    recuperarEnergia: function (energiaRecuperada) {
    if (energiaRecuperada > 0) {
        this.energia += energiaRecuperada;
        if (this.energia > 100) {
          this.energia = 100; // No puede ser mayor que 100
        }
    }
    },

    
    perderVida: function () {
    if (this.vidas > 0) {
        this.vidas--;
    }
    },

    
    recuperarVida: function () {
    if (this.vidas < 99) {
        this.vidas++;
    }
    },

    
    mostrarEstado: function () {
    console.log(
        `El jugador ${this.nombre} tiene ${this.energia}% de energía y ${this.vidas} vidas`
    );
    }
};


jugador.nombre = "Juan";


jugador.perderVida();
jugador.mostrarEstado();

jugador.perderEnergia(10);
jugador.mostrarEstado();

jugador.perderEnergia(5);
jugador.mostrarEstado();

jugador.perderEnergia(15);
jugador.mostrarEstado();

jugador.perderEnergia(20);
jugador.mostrarEstado();

jugador.recuperarEnergia(10);
jugador.mostrarEstado();

jugador.perderEnergia(30);
jugador.mostrarEstado();

jugador.perderEnergia(40);
jugador.mostrarEstado();

jugador.perderVida();
jugador.mostrarEstado();

jugador.perderVida();
jugador.mostrarEstado();

jugador.recuperarVida();
jugador.mostrarEstado();

jugador.recuperarVida();
jugador.mostrarEstado();

jugador.recuperarVida();
jugador.mostrarEstado();

jugador.perderVida();
jugador.mostrarEstado();
