"use strict";

/* Напишите регулярку, которая найдет строки по шаблону: 
цифра '1', затем символ не 'e' и не 'x', цифра '2'.
 */
str.replace(/1[^ex]2/g, '!');

/* Напишите регулярку, которая найдет строки по шаблону: 
буква 'x', затем НЕ цифра от 2 до 7, буква 'z'.
 */
str.replace(/x[^2-7]z/g, '!');

/* Напишите регулярку, которая найдет строки по шаблону: 
буква 'x', затем НЕ большая латинская буква от 1 и более раз, буква 'z'. */
str.replace(/x[^A-Z]+z/g, '!');

/* Напишите регулярку, которая найдет строки по шаблону: 
буква 'x', затем НЕ большая маленькая латинская буква 
и не цифра от 1 до 5 от 1 и более раз, буква 'z'.
 */
str.replace(/x[^A-Za-z1-5]+z/g, '!');
