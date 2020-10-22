"use strict";

//Дана строка, содержащая имена функций:
let str = 'func1() func2() func3()';
//Получите массив имен функций из строки.
let res = str.match(/[a-z0-9A-Z]+(?=\(\))/g);

console.log(res);


//Дана строка с тегом:
str = '<a href="" class="eee" id="zzz">';
//Получите массив имен атрибутов этого тега.

res = str.match(/[a-z]+(?=="[a-z]*")/g);

console.log(res);