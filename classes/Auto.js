const Vehiculo = require('./Vehiculo')

class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas){
        super(marca, modelo, precio)
        this.puertas = puertas

    }

    showDetails(){
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${super.formatPrice(this.precio)}`
    }
}


module.exports = Auto