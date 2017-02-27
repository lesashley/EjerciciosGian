function convertidor(grado) {
  if (grado != undefined && typeof(grado) == "number"){
    return ((9/5) * grado + 32);
  }
  else {
    return "Error";
  }
}

if(typeof exports !== 'undefined') {
    exports.convertidor = convertidor;
}
