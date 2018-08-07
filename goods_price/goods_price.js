let money = parseInt(prompt('Сколько у вас с собой денег?'));
let apples = parseInt(prompt('Сколько вы купили яблок?'));
let bread = parseInt(prompt('Сколько вы купили батонов хлеба?'));
let apples_price = parseFloat(prompt('Сколько стоит одно яблоко?')) * apples;
let bread_price = parseFloat(prompt('Сколько стоит один батон хлеба?')) * bread;
let result = money >= (apples_price + bread_price);
console.log(result);

