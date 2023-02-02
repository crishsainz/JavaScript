function sumaNumPares(pares) {
    const resultado = pares[1] + pares[3];
    return resultado;
  }
  const pares = [1, 2, 3, 4, 5];
  const suma = sumaNumPares(pares);
  console.log("La suma de los números pares es " + suma);
  