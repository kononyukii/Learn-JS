"use strict";

//Дана строка:
let str = 'aa aba abba abbba abca abea';
/*Напишите регулярку, которая найдет строки 'aba', 'abba', 'abbba' 
по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/

let res = str.replace(/ab+a/g, '!');


//Дана строка:
str = 'aa aba abba abbba abca abea';
/*Напишите регулярку, которая найдет строки 'aa', 'aba', 'abba', 'abbba' 
по шаблону: буква 'a', буква 'b' любое количество раз 
(в том числе ниодного раза), буква 'a'.*/

res = str.replace(/ab*a/g, '!')


//Дана строка:
str = 'aa aba abba abbba abca abea';
/*Напишите регулярку, которая найдет строки 'aa', 'aba' 
по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'.*/

res = str.replace(/ab?a/g, '!');


//Дана строка:
str = 'aa aba abba abbba abca abea';
/*Напишите регулярку, которая найдет строки 
'aa', 'aba', 'abba', 'abbba', не захватив 'abca' и 'abea'.*/

res = str.replace(/ab*a/g, '!');
console.log(res);