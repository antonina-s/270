// ЗАЧЕТ. Задание. Базовое использование языка JavaScript.

let arr = [1, 2, 3, 6, 8, 3, 1, 'a'];
let fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
let pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];



// 1. Напишите функцию, которая принимает на вход любой одномерный массив, и выводит в консоль все его элементы.

// Просто массив:
function mass0() {
    console.log(arr);
}
mass0(arr);

// Содержимое массива:
function mass1(pets) {
    console.log(`Pets: ${pets}.`);
}
mass1(pets);

// Переводим в строки и добавляем пробелы через join: 
function mass2(fruits) {
    const fruitsj = fruits.join(', ').toLowerCase();
    console.log(`Список фруктов: ${fruitsj}.`);
    window.alert(`Список фруктов: ${fruitsj}.`);
}
mass2(fruits);


/*
// Вывод массива по месту элемента:
let fruits2 = ['Киви', 'Ананас', 'Кокос', 'Апельсин', 'Банан', 'Яблоко'];
console.log(`Список фруктов: ${fruits2[0]}, ${fruits2[1]}, ${fruits2[2]}, ${fruits2[3]}, ${fruits2[4]}, ${fruits2[5]}.`);

// Один из самых старых способов перебора элементов массива:
let fruits3 = ['Киви', 'Ананас', 'Кокос', 'Апельсин', 'Банан', 'Яблоко'];
for (let i = 0; i < fruits3.length; i ++) {
    console.log(fruits3[i]);
};
// Цикл for..of короче:
let fruits4 = ['Киви', 'Ананас', 'Кокос', 'Апельсин', 'Банан', 'Яблоко'];
for (let fruit4 of fruits4) {
    console.log(fruit4);
};
*/



// 2. Напишите функцию, которая принимает на вход любой одномерный массив, и считает сумму, если в массиве числа; и складывает массив в строку, если в элементах массива строки. Функция должна возвращать результат. Если не все элементы числа или строки в массиве, то возвращать сообщение об ошибке.

function numArr(arr) {
    let checkNum = arr.every(function(element) {
        if (element >= 0) {
            return true;
        } 
        else if (element <= 0) {
            return true;
        }
        else {
            return false;
        }
        }
    );
    console.log(checkNum);

    if (checkNum === true) {
        let sum = 0;
        for (let s of arr) {
            sum += s;
        }
        console.log(`Сумма чисел = ${sum}.`);
        window.alert(`Сумма чисел = ${sum}.`);
    }
    else {
        const arrStr = arr.join(', ');
        console.log(`Ошибка – не все числа: ${arrStr}.`);
        window.alert(`Ошибка – не все числа: ${arrStr}.`);
    }
}
numArr(arr);



/*
// Три варианта сложения чисел в массиве с числами: // 24
let sum1 = 0;
for (let i = 0; i < arr.length; i ++) {
    sum1 += arr[i];
}
console.log(sum1);

//
let sum2 = 0;
arr.forEach(num => {
  sum2 += num;
});
console.log(sum2);

//
let sum3 = arr.reduce((accum, curValue) => {
    return accum + curValue}, 0);
console.log(sum3);

// Через reduce складываем числа:
let res = arr.reduce(function(sum, elem) {
	return sum + elem; }, 0);
console.log(res);
*/