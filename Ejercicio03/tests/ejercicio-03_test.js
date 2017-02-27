var assert = require('assert');
var app = require('../ejercicio-03.js')

describe("Convertir Temperatura", function () {
    it("Convertir de celsius a Farenheit", function () {
      assert.equal(app.convertidor(36),96.8)
    })

    it("Si no hay ningun dato ", function () {
      assert.equal(app.convertidor(),"Error")
    })

    it("Si se ingresa otro tipo de dato", function () {
      assert.equal(app.convertidor("34"),"Error")
    })
})
