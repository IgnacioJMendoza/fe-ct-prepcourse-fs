function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0
  let maximo = n
  let minimo = 1

  for (let i = minimo; i <=maximo; i++){
    suma = suma + i
  }
  return suma;
}

module.exports = sumarHastaN;
