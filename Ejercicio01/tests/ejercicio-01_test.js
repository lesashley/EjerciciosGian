var assert = require('assert');
var word = require('../ejercicio-01.js')

describe('idioma', function () {
  it("Retorne el texto en ingles",function () {
    assert.equal(word.idioma("Hola Mundo","en"),"Hello World")
  })

  it("Retorne el texto en francés", function(){
    assert.equal(word.idioma("Hola Mundo","fr"),"Salut monde")
  })

  it("Retorne el texto en alemán", function(){
    assert.equal(word.idioma("Hola Mundo","al"),"Hallo Welt")
  })

  it("Debe retornar español si no hay idioma",function(){
    assert.equal(word.idioma("Hola Mundo"),"Hola Mundo")
  })

  it("Si no hay texto ni idioma  debe retornar Error",function () {
    assert.equal(word.idioma(),"Error")
  })
})
