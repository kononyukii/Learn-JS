"use strict";

//Дана строка:
let str = 'a1a a2a a3a a4a a5a aba aca';
/*Напишите регулярку, которая найдет строки, в которых по краям 
стоят буквы 'a', а между ними одна цифра.*/

let res = str.replace(/a\da/g, '!');


//Дана строка:
str = 'a1a a22a a333a a4444a a55555a aba aca';
/*Напишите регулярку, которая найдет строки, в которых по краям стоят
буквы 'a', а между ними любое количество цифр.*/

res = str.replace(/a\d+a/g, '!');


//Дана строка:
str = 'aa a1a a22a a333a a4444a a55555a aba aca';
/*Напишите регулярку, которая найдет строки, 
в которых по краям стоят буквы 'a', а между ними 
любое количество цифр (в том числе и ноль цифр, то есть строка 'aa').*/

res = str.replace(/a\d*a/g, '!');


//Дана строка:
str = 'avb a1b a2b a3b a4b a5b abb acb';
/*Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a' и 'b', а между ними - не число.*/

res = str.replace(/a\Db/g, '!');


//Дана строка:
str = 'ave a#b a2b a$b a4b a5b a-b acb';
/*Напишите регулярку, которая найдет строки следующего вида: 
по краям стоят буквы 'a' и 'b', а между ними - не буква и не цифра.*/

res = str.replace(/a\Wb/g, '!');


//Дана строка:
str = 'ave a#a a2a a$a a4a a5a a-a aca';
//Напишите регулярку, которая заменит все пробелы на '!'.

res = str.replace(/\s/g, '!');

console.log(res);