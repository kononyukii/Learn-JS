"use strict";

//Дана строка:
let str = '1 23 456 789';
//Найдите позицию первого числа, состоящего из трех цифр.
let res = str.search(/\d{3}/)

console.log(res);