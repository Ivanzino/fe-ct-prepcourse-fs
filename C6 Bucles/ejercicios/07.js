function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if (a %2==0 && a / 3){
     return true;
  }else{
    return false;
  }
}
console.log(esParYDivisiblePorTres(99))
console.log(esParYDivisiblePorTres(76))
console.log(esParYDivisiblePorTres(12))
module.exports = esParYDivisiblePorTres;