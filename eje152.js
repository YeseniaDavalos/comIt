const usuario = {
    username: null,
    password: null,


    saludar: function() {
    if (this.username !== null) {
        console.log(`Hola, soy el usuario ${this.username}`);
    } else {
        console.log('Este usuario no tiene username');
    }
    },


    updaterUsername: function(newUsername) {
    this.username = newUsername;
    },

    updatePassword: function(newPassword) {
    this.password = newPassword;
    }
};


usuario.updaterUsername('Yess');

usuario.updatePassword('12345');


usuario.saludar();


console.log(usuario.password);
