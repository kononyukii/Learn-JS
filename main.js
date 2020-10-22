"use strict";

//Дана строка:
let str = 'a1b2c3';
//Напишите регулярку, которая рядом с каждой цифрой напишет такую же.
let res = str.replace(/(\d)/g, '$&$&');

console.log(res);


//Дана строка:
str = 'sss site.ru zzz site.com kkk';
//Замените домены на ссылки вида '<a href="http://site.ru">site.ru</a>'.
res = str.replace(/[a-z]+\.[a-z]{2,3}/g, '<a href="http://$&">$&</a>');

console.log(res);