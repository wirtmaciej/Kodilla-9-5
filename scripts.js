var buttons = document.getElementsByClassName('button');
var buttonsLength = buttons.length;

for (var i = 0; i < buttonsLength; i++) {
	buttons.innerText = 'Hello!';
	alert(buttons.innerText);
	console.log(buttons.innerText);
}