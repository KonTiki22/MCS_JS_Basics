const form = document.forms[0];
const insert = document.querySelector('.sin');

form.onsubmit = function(angel) {
	angel.preventDefault();
	insert.innerHTML = Math.sin(form.elements.angel.value);
}