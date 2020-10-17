"use strict";

//Дана строка:
let str = 'aba aea aca aza axa a.a a+a a*a';
/* Напишите регулярку, которая найдет строки 
'a.a', 'a+a', 'a*a', не затронув остальных. */

let res = str.replace(/a[.+*]a/g, '!');

console.log(res);


//Дана строка:
str = 'xaz x.z x3z x@z x$z xrz';
/* Напишите регулярку, которая найдет строки по шаблону: 
буква 'x', затем НЕ точка, НЕ собака, и НЕ доллар, а потом буква 'z'. */

res = str.replace(/x[^.@$]z/g, '!');

console.log(res);
