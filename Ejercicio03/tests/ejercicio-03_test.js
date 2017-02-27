var assert = require('assert');
var app = require('../ejercicio-03.js')

describe("Convertir Temperatura", function () {
    it("Convertir de farenheit a celsius", function () {
      assert.deepEqual(app.convertidor([34,23,67,23]),[16, 5, 49, 5])
      assert.deepEqual(app.convertidor([23]),[5])
    })

    it("Si no hay ningun dato ", function () {
      assert.equal(app.convertidor(),"Error")
    })

    it("Si se ingresa otro tipo de dato", function () {
      assert.equal(app.convertidor("34"),"Error")
    })
})
