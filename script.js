'use strict';

// new RegExp('pattern', 'flags'); - стандартный синтаксис. Не используется
// /patern/f - синтаксис, который используют в 90% случаях

/* const ans = prompt('Введите ваше имя');

const reg = /n/ig;
console.log(reg.test(ans)); */

/* const ans = prompt('Введите ваше число');

const reg = /\d/g;
console.log(ans.match(reg)); */

const string = 'My name is R2D2';

console.log(string.match(/\w\d\w\d/i));




//Классы
// \d - поиск всех чисел
// \w - поиск всех букв
// \s - поиск всех пробелов

// 'D - поиск всех не чисел
// 'W - поиск всех не букв

/* //Флаги:
i - если мы хотим найти что либо вне зависимости от регистра
g - (global) если мы хотим найти несколько вхождений
m - включает многострочный режим */

// console.log(ans.search(reg));
// console.log(ans.match(reg)); // match() - выводит массив

/* const pass = prompt('Password');

console.log(pass.replace(/\./g, "*")); */

// console.log('12-55-10'.replace(/-/g, ':'));
