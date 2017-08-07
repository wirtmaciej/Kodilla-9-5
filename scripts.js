var button = document.getElementsByClassName('button');
var button__length = button.length;
console.log(button__length);
button.innerText = 'Hello!'


for (var i = 0; i < button__length; i++) {
	alert(button.innerText);
}