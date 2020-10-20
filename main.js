"use strict";

//Дана строка:
let str = 'abc def xyz';
//Напишите регулярку, которая найдет первую подстроку из букв.

let res = str.replace(/^.../g, '!');

console.log(res);


//Дана строка:
str = 'abc def xyz';
//Напишите регулярку, которая найдет последнюю подстроку из букв.

res = str.replace(/...$/g, '!');

console.log(res);