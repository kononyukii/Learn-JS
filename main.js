/* document.querySelector('#elem').addEventListener('drag', function (event) {
	console.log('!')
}); */

let parent = document.querySelector('#parent');

parent.addEventListener('dragenter', function (event) {
	this.innerHTML = '!';
});

parent.addEventListener('dragleave', function (event) {
	this.innerHTML = '';
});