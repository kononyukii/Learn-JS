"use strict";

//Дана строка:
let str = '12 34 56 78';
//Поменяйте местами цифры во всех двухзначных числах.

let res = str.replace(/([0-9])([0-9])/g, '$2$1');

console.log(res);


//Дана строка с датой:
str = '31.12.2025';
//Преобразуйте эту дату в '2025.12.31'.

res = str.replace(/(\d+)\.(\d+)\.(\d+)/g, '$3.$2.$1');

console.log(res);