"use strict";

//Дана строка:
let str = 'site.ru sss site.com zzz site.net';
//Получите массив доменных имен из этой строки.
let res = str.match(/[a-z]+\.[a-z]{2,3}/g);

console.log(res);


//Дана строка:
str = 'a1b c34d x567z';
//Найдите сумму всех чисел этой строки.

res = str.match(/\d+/g);

let sum = 0;
for (let num of res) {
    sum += Number(num);
}

console.log(sum);
