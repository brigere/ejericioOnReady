const Vehiculo = require("./Vehiculo")

class Moto extends Vehiculo{
    constructor(marca, modelo, precio, cilindrada){
        super(marca, modelo, precio)
        this.cilindrada = cilindrada
    }

    showDetails(){
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${super.formatPrice(this.precio)}`
    }
}

module.exports = Moto