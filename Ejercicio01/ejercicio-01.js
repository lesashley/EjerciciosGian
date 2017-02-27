function idioma(texto,len) {
  if(texto == undefined && len == undefined){
    return "Error";
  } else if(len == undefined){
    return texto;
  }
  switch (len) {
    case "en":
      texto = "Hello World";
      break;
    case "fr":
      texto = "Salut monde";
      break;
    case "al":
      texto = "Hallo Welt";
      break;
    default:
    texto= "Hola Mundo";
  }
return texto;
}

if(typeof exports !== 'undefined') {
    exports.idioma = idioma;
}
