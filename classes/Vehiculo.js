class Vehiculo {
    constructor(marca,modelo,precio){
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
    }

    formatPrice(price){
        return "$" + new Intl.NumberFormat().format(this.precio)
    }

}

module.exports = Vehiculo