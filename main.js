/* document.querySelector('#elem').addEventListener('drag', function (event) {
	console.log('!')
}); */

let parent = document.querySelector('#parent');

parent.addEventListener('dragover', function (event) {
	this.style.borderStyle = 'dotted';
});