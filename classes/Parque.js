class Parque {
    constructor(vehiculos) {
        this.vehiculos = vehiculos
    }

    mostrarTodos() {
        this.vehiculos.map(item => console.log(item.showDetails()))
    }

    mostrarMasCaro() {
        let masCaro = this.vehiculos.reduce((max, item) => max = item.precio > max.precio ? item : max, this.vehiculos[0])
        console.log(`Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}`)
    }

    mostrarMasBarato() {
        let masBarato = this.vehiculos.reduce((min, item) => min = item.precio < min.precio ? item : min, this.vehiculos[0])
        console.log(`Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}`)
    }

    contieneLetra(key) {
        let contienenY = this.vehiculos
                            .filter(item => item.modelo.includes(key))
                            .map(item => item.marca + ' ' + item.modelo)
        console.log(`Vehículo que contiene en el modelo la letra ‘${key}’: ${contienenY}`)
    }

    ordenarPorMayorPrecio() {
        let ordenados = this.vehiculos.sort((x,y) => y.precio - x.precio)
        console.log('Vehículos ordenados por precio de mayor a menor:')
        ordenados.map(item => console.log(item.marca + ' ' + item.modelo))
    }

    detalleCompleto() {
        let separador = '============================='
        this.mostrarTodos()
        console.log(separador)
        this.mostrarMasCaro()
        this.mostrarMasBarato()
        this.contieneLetra('Y')
        console.log(separador)
        this.ordenarPorMayorPrecio()
    }

}

module.exports = Parque