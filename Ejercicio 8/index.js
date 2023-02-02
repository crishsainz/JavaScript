function extraerCaracteres(frase) {
  const resultado = frase[1] + frase[3] + frase[6] + frase[9];
  return resultado;
}
  
const frase = "Hola mundo";
const resultado = extraerCaracteres(frase);
console.log(resultado);