let colors = ['red', 'lightblue', 'cyan', 'green', 'orange']

let crypto = [
  {
    name : "Bitcoin",
    price: 1388.37
  },
  {
    name : "Ethereum",
    price: 716
  },
  {
    name : "Litecoin",
    price: 140
  }
]

for (i in crypto) {
    document.body.innerHTML += '<h1>' + crypto[i]['name'] + '<h1>';
    document.body.innerHTML += '<p>' + crypto[i]['price'] + '<p>';
    document.body.innerHTML += '<div></div>';
    let divs = document.querySelectorAll('div');
    console.log(Math.floor(crypto[i]['price'])+'px')
    divs[i].style.backgroundColor = colors[i];
    divs[i].style.width = Math.floor(crypto[i]['price'])+'px';
  } 