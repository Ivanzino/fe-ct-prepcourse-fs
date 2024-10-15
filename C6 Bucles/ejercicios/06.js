function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if ( num.toString().length === 3){
    return true;
  }else{
    return false;
  }
};
console.log(tieneTresDigitos(333));
console.log(tieneTresDigitos(12));
console.log(tieneTresDigitos(1));
module.exports = tieneTresDigitos;
