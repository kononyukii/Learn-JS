"use strict";

//Дана строка:
let str = 'xaz xBz xcz x-z x@z';
/* Найдите все строки по следующему шаблону: 
буква 'x', большая или маленькая буква или дефис, буква 'z'. */

let res = str.replace(/x[a-z-]z/g, '!');

console.log(res);


//Дана строка:
str = 'xaz x$z x-z xcz x+z x%z x*z';
/* Найдите все строки по следующему шаблону: 
буква 'x', затем или доллар, или дефис или плюс, потом буква 'z'. */

res = str.replace(/x[$+-]z/g, '!');

console.log(res);