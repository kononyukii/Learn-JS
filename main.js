"use strict";

//Дана строка:
let str = 'aaa [2] bbb [3] ccc [12] ddd';
/* Найдите числа, стоящие в скобках и увеличьте их в два раза. 
То есть из нашей строки должна получится следующая: 'aaa [4] bbb [6] ccc [24] ddd' */
let res = str.replace(/(\d+)/g, function(math){
    return math * 2;
});

console.log(res);


//Дана строка:
str = '123 456 789';
/* Найдите все числа и переверните их цифры в обратном порядке. 
То есть из нашей строки должна получится следующая: '321 654 987' */

res = str.replace(/(\d)(\d)(\d)/g, function(math, math1, math2, math3){
    return math3 + math2 + math1;
});

console.log(res);


//Дана строка с датами:
str = '31.12.2025 30.11.2024 29.10.2023';
/* Найдите все даты и преобразуйте их в другой формат так, 
чтобы получилась следующая строка: '2025-12-31 2024-11-30 2023-10-29' */

res = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, function(math, math1, math2, math3){
    return `${math3}-${math2}-${math1}`;
});

console.log(res);