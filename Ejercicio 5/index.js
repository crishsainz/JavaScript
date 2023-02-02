const numeroDNI = prompt("Introduce tu número de DNI", "12345678");
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

if (numeroDNI<0 || numeroDNI>99999999) {
    alert("El número proporcionado no es válido");
} else {
    alert("La letra de tu DNI es" + letrasDNI[numeroDNI%23]);
}
