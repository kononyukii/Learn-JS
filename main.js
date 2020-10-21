"use strict";

let str = 'https://www.ua-football.com/';

//Определите, начинается ли переданная строка с http://.
let res = /^http:\/\/\./.test(str);

console.log(res);

//Определите, начинается ли переданная строка с http:// или с https://.
res = /^https:\/\/|^http:\/\/\./.test(str);

console.log(res);


//Определите, заканчивается ли переданная строка расширением txt, html или php.
str = 'https://www.ua-football.php';

res = /html$|txt$|php$/.test(str);

console.log(res);


//Определите, заканчивается ли переданная строка расширением jpg или jpeg.
str = 'https://www.ua-football.com/';

res = /jpg$|jpeg$/.test(str);

console.log(res);


//Определите, заканчивается ли переданная строка расширением jpg, jpeg или png.
str = 'https://www.ua-football.com.png/';

res = /jpg$|jpeg$|png$/.test(str);

console.log(res);


//Определите, является ли строка числом, длиной от 1 до 12 цифр.
str = '1234567890';

res = /^\d{1,12}$/.test(str);

console.log(res);


//Определите, является ли переданная строка датой в формате год-месяц-день.
str = '2021-01-25';

res = /^\d{4}-\d{2}-\d{2}$/.test(str);

console.log(res);


//Определите, является ли переданная строка датой в формате день.месяц.год.
str = '2021.01.25';

res = /^\d{4}\.\d{2}\.\d{2}$/.test(str);

console.log(res);


//Определите, является ли переданная строка временем в формате часы:минуты:секунды.
str = '04:24:31';

res = /^([0-1][0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])$/.test(str);

console.log(res);


//Определите, является ли переданная строка корректным емэйлом.
str = 'kononyukii@gmail.com';

res = /^[a-zA-z]+@[a-z]+\.[a-z]+$/.test(str);

console.log(res);


//Определите, является ли переданная строка доменным именем.
str = 'http://site.com';

res = /^[a-z:\/\/\.-]+\.[a-z]{2,3}$/.test(str);

console.log(res);

