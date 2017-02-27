function array(arreglo1,arreglo2) {
  var nuevo = [];
  if(arreglo1 == undefined && arreglo2 == undefined){
    return "Ingrese un dato";
  }
  if(arreglo1 == undefined){
    return arreglo2;
  }
  else if(arreglo2 == undefined) {
    return arreglo1;
  }
  for(var i = 0; i< arreglo1.length; i++ ){
      nuevo.push(arreglo1[i] + arreglo2[i]);
  }
  return nuevo;
}

if(typeof exports !== 'undefined') {
    exports.array = array;
}
