// Bucle for

const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let sumaNotas = 0;
for (let i=0; i < 9; i++) {
    sumaNotas += notas[i];
}
console.log("La suma total de notas es " + sumaNotas);

// Bucle for of

const notas2 = [6, 7, 2, 9, 3, 4, 5, 8, 2];
let sumaNotas2 = 0;
for (let nota of notas2) {
  sumaNotas2 += nota;
}
console.log("La suma total de notas es " + sumaNotas2);
