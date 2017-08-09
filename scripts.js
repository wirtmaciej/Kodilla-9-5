var buttons = document.getElementsByClassName('button');
var buttons__Length = buttons.length;
console.log(buttons__Length);
buttons.innerHTML = 'Hello!'

for (var i = 0; i < buttons__Length; i++) {
	alert(buttons.innerHTML);
	console.log(buttons.innerHTML);
}