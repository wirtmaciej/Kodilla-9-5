var buttons = document.getElementsByClassName('button');
var buttonsLength = buttons.length;

for (var i = 0; i < buttonsLength; i++) {
	buttons[i].innerText = 'Hello!';
	alert(buttons[i].innerText);
	console.log(buttons[i].innerText);
}

