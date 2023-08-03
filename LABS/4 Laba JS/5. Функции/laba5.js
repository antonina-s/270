// # Основы работы с пользовательскими функциями в JavaScript

// 1. Сделайте функцию, выводящую на экран ваше имя.
// function myTest() {
//   return "Станислав";
// }
// console.log(myTest());

// 2. Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
function myTest(arg1) {
  myArr = new Range(1, 10);
  return myArr;
  res = 0;
  for (let i = 1; i <= 100; i++) {
    res += i;
  }
  return res;
}
console.log(myTest());

// 3. Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
// function myTest(arg1) {
//   return arg1 ** 3;
// }
// console.log(myTest(5));

// 4. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
// function myTest(arg1) {
//   return arg1 >= 0 ? "+++" : "---";
// }
// console.log(myTest(-5));

// 5. Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
// function myTest(arg1, arg2, arg3) {
//   return arg1 + arg2 + arg3;
// }
// console.log(myTest(3, 2, 5));

// 6. Сделайте функцию func, которая параметром будет принимать 3 переменных и выводить на экран сумму их значений. Пусть даны 3 переменные с числами:
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function myTest(arg1, arg2, arg3) {
//   return arg1 + arg2 + arg3;
// }
// console.log(myTest(param1, param2, param3));

// 7. Дана функция:
// Эта функция вызывается следующим образом:
// Расскажите, каким будет результат каждого из вызовов функции.

// function func(num = 5) {
// alert(num * num);
// }

// func(2) -> 4;
// func(3) -> 9;
// func() -> 25;

// 8. Дана функция:
// Эта функция вызывается следующим образом:
// Расскажите, каким будет результат каждого из вызовов функции.

// function func(num1 = 0, num2 = 0) {
// alert(num1 + num2);
// }

// func(2, 3) -> 5;
// func(3) -> 3;
// func() -> 0;

// 9. Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
// function myTest(arg1) {
//   return arg1 ** 3;
// }
// let result = myTest(3);
// console.log(result);

// 10. Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
// function myTest(arg1) {
//   return arg1 ** 0.5;
// }
// console.log(myTest(3) + myTest(4));

// 11. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.
// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function round(num) {
//   return num.toFixed(3);
// }
// console.log(round(sqrt(2)));

// 12. Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// result = sum(sqrt(2), sqrt(3), sqrt(4));
// console.log(result);

// 13. Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.
// function round(num) {
//   return num.toFixed(3);
// }

// function sqrt(num) {
//   return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// result = (sqrt(2), sqrt(3), sqrt(4));
// console.log(result);

// result = (round(sqrt(2)), round(sqrt(3)), round(sqrt(4)));
// console.log(result);

// 14. Что выведется на экран в результате выполнения следующего кода:
// Объясните почему.
// !!! ответ !!! выйдет на экран значение num = 3, т.к. после срабатывания 1го num функция прекращает свою работу и num*num не будет использоваться

// function func(num) {
//   return num;

//   let result = num * num;
//   return result;
// }

// alert(func(3));

// 15. Что выведет каждый из алертов в результате выполнения следующего кода:
// Объясните почему.
// !!! ответ !!! в случае num = -5, сработает 1е ветвление и будет вычеслен квадратный корень из этого числа, в случае 10, сработает 2е ветвление и будет выполнена операция произведения 10*10

// function func(num) {
// if (num <= 0) {
// return Math.abs(num);
// } else {
// return num * num;
// }
// }

// alert( func(10) );
// alert( func(-5) );

// 16. Что выведет каждый из алертов в результате выполнения следующего кода:
// Объясните почему.
// !!! ответ !!! в случае num = -5, сработает 1е ветвление и будет вычеслен модуль числа = 5 и цикл прервертся на 1-м ретуне, в случае 10, ретурн от 1го ретурна не сработает (т.к. не выполнится условие) и прозойдет перемножение числа на само себя = 100

// function func(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   }

//   return num * num;
// }

// alert(func(10));
// alert(func(-5));

// 17. Что выведется на экран в результате выполнения следующего кода:
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.
// !!! ответ !!! Автор хочет вывести сумму всех чисел от 1 до числа n(включительно), но ошибся и закрыл цикл после return. Таким образом ретур срабатывает после 1й этерации, и функция прекращает свое действия, выводя значение 1го элемента. Код исправлен!

// function func(num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(func(5));

// 18*. Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
// function myTest(arg1) {
//   calc = 0;
//   while (arg1 >= 10) {
//     calc += 1;
//     arg1 /= 2;
//   }

//   return calc;
// }
// console.log(myTest(100));

// 19*. Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.
// function myTest(arr) {
//   for (num of arr) {
//     if (num % 2 === 1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(myTest([4, 2, 6, 8,]));

// 20*. Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.
// function myTest(number) {
//   arr = String(number).split();
//   for (num of arr) {
//     if (num % 2 === 1) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(myTest(2461));

// 21*. Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.
// function myTest(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] == arr[i + 1]) {
//       return "Есть задвоение";
//     }
//   }
//   return "Нет задвоения";
// }
// console.log(myTest([4, 3, 2, 6, 8, 2]));
