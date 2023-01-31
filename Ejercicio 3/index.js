const data = ["hola", 2, 5, "adios"];

// Cuál de los dos números es mayor
var mayorQue = (data[1]<data[2]);
console.log(data[1]<data[2]);
console.log("Si el resultado es true el segundo es mayor que el primero. Si es false el primero es mayor que el segundo.");

// Operaciones numéricas con los dos números
//suma
var suma = data[1] + data[2];
console.log("La suma de 2 más 5 es " + suma);
//resta
var resta = data[2] - data[1];
console.log("El resultado de restar 5 menos 2 es " + resta);
//multiplicación
var multiplicacion = data[1] * data[2];
console.log("El resultado de multiplicar 2 por 5 es " + multiplicacion);
//división
var division = data[2] / data[1];
var resto = data[2]%data[1];
console.log("El resultado de dividir 5 entre 2 es " + division + " y el resto es " + resto);
