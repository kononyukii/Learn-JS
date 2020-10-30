'use strict';

let current;

let elems = document.querySelectorAll('.elem');
let parent = document.querySelector('#parent');



elems.forEach(function (elem) {
	elem.addEventListener('dragstart', function (event) {
		current = this;
	});
});



parent.addEventListener('drop', function(event) {
	this.appendChild(current);
});

parent.addEventListener('dragover', function (event) {
	event.preventDefault();
});
