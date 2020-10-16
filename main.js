"use strict";

//Дана строка:
let str = 'aa aba abba abbba abbbba abbbbba';
/*Напишите регулярку, которая найдет строки 
'abba', 'abbba', 'abbbba' и только их.*/

let res = str.replace(/ab{2,4}a/g, '!');


//Дана строка:
str = 'aa aba abba abbba abbbba abbbbba';
/*Напишите регулярку, которая найдет строки вида 'aba', в которых 'b' 
встречается менее 3-х раз (включительно).*/

res = str.replace(/ab{0,3}a/g, '!');


//Дана строка:
str = 'aa aba abba abbba abbbba abbbbba';
/*Напишите регулярку, которая найдет строки вида 'aba', 
в которых 'b' встречается более 4-х раз (включительно).*/

res = str.replace(/ab{4,}a/g, '!');

console.log(res);