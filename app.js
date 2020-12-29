const Auto = require('./classes/Auto')
const Moto = require('./classes/Moto')
const Parque = require('./classes/Parque')

let v1 = new Auto('Peugeot','206',200000,4)
let v2 = new Moto('Honda','Titan',75000,'250cc')
let v3 = new Auto('Peugeot','208',250000,5)
let v4 = new Moto('Yamaha','YBR',80500.5,'150cc')

let vehiculos = [v1,v2,v3,v4]

let parque = new Parque(vehiculos)

parque.detalleCompleto()


