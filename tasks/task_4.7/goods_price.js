let money = parseInt(prompt('Сколько у вас с собой денег?'));
let apples = parseInt(prompt('Сколько вы купили яблок?'));
let bread = parseInt(prompt('Сколько вы купили батонов хлеба?'));
let apples_price = parseFloat(prompt('Сколько стоит одно яблоко?')) * apples;
let bread_price = parseFloat(prompt('Сколько стоит один батон хлеба?')) * bread;

function haveEnough(money, apples, bread, apples_price, bread_price) {
	return (money >= (apples_price + bread_price)) ? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}

console.log(haveEnough(money, apples, bread, apples_price, bread_price));

