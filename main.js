"use strict";

//Дана строка:
let str = 'ab abab abab abababab abea';
/*Напишите регулярку, которая найдет строки по шаблону: 
строка 'ab' повторяется 1 или более раз.*/

let res = str.replace(/(ab)+/g, '!');
console.log(res);