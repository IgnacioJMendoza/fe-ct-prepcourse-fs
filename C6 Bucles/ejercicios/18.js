function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let inicio = Math.min (a,b);
  let final = Math.max (a,b);

  let producto = 1;

  if (inicio<= 0 && final >= 0){
    return 0;
  }

  for(let i = inicio; i<= final; i++){
    producto = producto * i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;