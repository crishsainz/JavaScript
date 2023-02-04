const numbers = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const numerosPares = numbers.filter(function(numbero) {
    return numbero % 2 === 0;
});
console.log(numerosPares);

const numerosImpares = numbers.filter(function(numbero) {
    return numbero % 2 !== 0;
});
console.log(numerosImpares);
