"use strict";
//Дана строка:
let str = 'ahb acb aeb aeeb adcb axeb';
/*Напишите регулярку, которая найдет строки 'ahb', 'acb', 'aeb' 
по шаблону: буква 'a', любой символ, буква 'b'.*/

let newStr = str.replace(/a.b/g, '!');

//Дана строка:
str = 'aba aca aea abba adca abea';
/*Напишите регулярку, которая найдет строки 'abba', 'adca', 'abea' 
по шаблону: буква 'a', 2 любых символа, буква 'a'.*/

newStr = str.replace(/a..a/g, '!');

//Дана строка:
str = 'aba aca aea abba adca abea';
/*Напишите регулярку, 
которая найдет строки 'abba' и 'abea', не захватив 'adca'.*/

newStr = str.replace(/ab.a/g, '!')

console.log(newStr);