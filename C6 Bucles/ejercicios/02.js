function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 === true && booleano2 === true){
    return true
  }else{
    return false
  };
};
console.log(esVerdaderoYFalso(true, true));   // true, porque ambos son verdaderos
console.log(esVerdaderoYFalso(true, false));  // false, porque uno es falso
console.log(esVerdaderoYFalso(false, true));  // false, porque uno es falso
console.log(esVerdaderoYFalso(false, false)); // false, porque ambos son falsos
module.exports = esVerdaderoYFalso;
