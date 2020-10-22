"use strict";

//Дана строка:
let str = 'aaa bbb ccc xyz';
//Найдите все подстроки, в которых есть три одинаковые буквы подряд.
let res = str.replace(/([a-z])\1\1/g, '!');

console.log(res);


//Дана строка:
str = 'a aa aaa aaaa aaaaa';
/* Найдите все подстроки, 
в которых есть две и более одинаковые буквы подряд. */

res = str.replace(/([a-z])\1+/g, '!');

console.log(res);


//Дана строка:
str = 'aaa aaa bbb bbb ccc ddd';
//Найдите все подстроки, в которых есть два одинаковых слова подряд.

res = str.replace(/([a-z]+) \1/g, '!');

console.log(res);