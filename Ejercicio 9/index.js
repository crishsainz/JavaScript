function conversionºCºF (ºC) {
    return (ºC * 9/5) + 32;
}

const ºC = prompt("Introduce los grados celsius", "00");
const ºF = conversionºCºF(ºC);
console.log("Son " + ºF + " grados Fahrenheit");
