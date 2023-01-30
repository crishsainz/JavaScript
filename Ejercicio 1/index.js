// base 16 * 23 cm
// altura 13 cm

const volumen = 13 * 16 * 23;
console.log("Volumen del cubo", volumen + " cm3");

// area = area lateral + 2*(altura*base)
const areaLateral = 13*23;
const areaBase = 16*23;
const areaTotal = areaLateral + 2*areaBase;
console.log("areaTotal", areaTotal + " cm2");


// Generalización
const base = 13;
const altura = 23;
const ancho = 16;

const volumen2 = base * altura * ancho;
console.log("volumen2", volumen2);

const area2 = base*altura + 2*altura*ancho;
console.log("area2", area2);