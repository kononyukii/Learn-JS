let parent = document.querySelector('#parent');

document.querySelector('#elem').addEventListener('drag', function (event) {
	parent.style.border = 'dotted 1px red';
});

/* parent.addEventListener('dragenter', function (event) {
	this.innerHTML = '!';
}); */

/* parent.addEventListener('drop', function (event) {
	this.innerHTML = '';
}); */