const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const longMeses = meses.filter(function(mes){
    return mes.length>7
});
const mayMeses=longMeses.map (function(may){
    return may.toUpperCase();
});
console.log (mayMeses);