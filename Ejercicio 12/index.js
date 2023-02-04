const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const topicsUpper = topics.map(
    function(palabras) {
        return palabras.toUpperCase();
    }
);
const topicsReversed = topicsUpper.reverse();

console.log(topicsReversed);