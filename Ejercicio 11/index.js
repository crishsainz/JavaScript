function palabrasMinMay(letras) {
    if (letras === letras.toUpperCase()) {
      alert("La frase está escrita en mayúsculas");
    } else if (letras === letras.toLowerCase()) {
      alert("La frase está escrita en minúsculas");
    } else {
      alert("La frase está escrita en mayúsculas y minúsculas");
    }
  }
  var frase = prompt("Introduce una frase:");
  palabrasMinMay(frase);