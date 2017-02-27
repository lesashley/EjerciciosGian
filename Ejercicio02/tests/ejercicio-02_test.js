var assert = require('assert');
var sum = require('../ejercicio-02.js')

describe('Suma de Arreglos',function () {
  it("Debe retornar la suma de los arreglos", function () {
    assert.deepEqual(sum.array([3,5,6],[6,11,2]),[9,16,8])
  })
  it("Si la longitud de un array es mayor que el otro no cambiar los valores",function () {
    assert.deepEqual(sum.array([1,4],[1,5,6]),[2,9])
  })
  it("Si no hay uno de los arreglos retornar el unico arreglo",function () {
    assert.deepEqual(sum.array([3,5,6]),[3,5,6])
  })

  it("Si no hay ningun parametro retornar mensaje", function () {
    assert.equal(sum.array(),"Ingrese un dato")
  })

})
