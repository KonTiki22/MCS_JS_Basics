
var form = document.forms[0];
var cityname = document.querySelector('.cityname');
var insert = document.querySelector('.temp');
var wind = document.querySelector('.wind');

form.onsubmit = function(city) {
	city.preventDefault();
	city = form.elements.city.value
	const APIKey = '099715979800997fed902c8c415868c1';
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, false);
	xhr.send();
	if(xhr.status != 200) {
		console.log(xhr.status + ' '+ xhr.statusText);
	} else {
		var data = JSON.parse(xhr.responseText);
		console.log(data);
		cityname.innerHTML = 'in ' + city;
		insert.innerHTML = Math.round(data.main.temp - 273)+' &deg;С';
		wind.innerHTML = data.wind.speed+' m/s';
	}
}
