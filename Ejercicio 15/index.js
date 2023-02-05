const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
];

const premium = users.filter(function(usuarios){
    if (usuarios.premium === true) {
        console.log (usuarios.username +" es un usuario premium");
    }
});

const nopremium = users.filter(function(usuarios2){
    if (usuarios2.premium === false) {
        console.log (usuarios2.username +" no es un usuario premium");
    }
});