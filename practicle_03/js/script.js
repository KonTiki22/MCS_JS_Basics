console.log('You are at ' + window.location);

document.body.style.backgroundColor = prompt('Какой будет фон у страницы?');

let page = document.querySelector('.page');
page.style.color = prompt('Какой будет цвет текста на странице?');

let name = document.querySelector('span.name');
name.innerHTML = prompt('Как зовут человека, который вас вдохновляет?');

let image = document.querySelector('img');
image.setAttribute('src', prompt('Введите адрес картинки'));

let shortBio = document.querySelector('p.shortBio');
shortBio.innerHTML = prompt('Введите текст страницы');

shortBio.className += ' animated';


