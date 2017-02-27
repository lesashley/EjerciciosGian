function convertidor(grado) {
  var arrFinal = [];
  if (grado != undefined && typeof(grado) == "object"){
    for(var i = 0; i <grado.length; i++){
      arrFinal.push(Math.round(grado[i] - 32 * (5/9)));
    }
    return arrFinal;
  }
  else {
    return "Error";
  }
}

if(typeof exports !== 'undefined') {
    exports.convertidor = convertidor;
}
