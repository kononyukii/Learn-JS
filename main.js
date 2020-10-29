let elem = document.querySelector('#elem');

let offsetX;
let offsetY;

elem.addEventListener('dragstart', function (event) {
	offsetX = event.offsetX;
	offsetY = event.offsetY;
});

elem.addEventListener('dragend', function (event) {
	this.style.top = (event.pageY - offsetY) + 'px';
	this.style.left = (event.pageX - offsetX) + 'px';
});