
// # Основы работы с пользовательскими функциями в JavaScript
function nameFL() {
  console.log('Antonina S.');
}
nameFL();

let fName = 'Antonina';
let lName = 'S.';
function myName() {
  console.log(`${fName} ${lName}`);
}
myName();

function firstName(person) {
  console.log(`Меня зовут ${person}.`);
}
firstName('Антонина');



function sumNumbers() {
  let sum2 = 0; // Цикл.
  for (let i = 1; i <= 100; i ++) {
    sum2 += i; // 5.050
  }
  return sum2;
}
console.log(sumNumbers());



function kub3(arg3) {
  return arg3 ** 3; // 125
}
console.log(kub3(5));



function num4(arg4) {
  return (arg4 >= 0 ? '+++' : '---');
}
console.log(num4(-3));



function sum5(x, y, z) {
  return x + y + z;
}
console.log(sum5(3, 6, 10));



let param1 = 1;
let param2 = 2;
let param3 = 3;
function sum6(x, y, z) {
  return x + y + z;
}
console.log(sum6(param1, param2, param3));



function func(num = 5) {
  alert(num * num);
}
func(2); // 4
func(3); // 9
func(); // 25



function func(num1 = 0, num2 = 0) {
  alert(num1 + num2); // 0
}
func(2, 3); // 5
func(3); // 3
func(); // 0



function cube9(arg9) {
  return arg9 ** 3;
}
let result9 = cube9(3);
console.log(result9);

console.log(cube9(3)); // 27



function sum10(arg10) {
  return arg10 ** 0.5;
}
console.log(sum10(3) + sum10(4)); // 1.73 + 2 = 3.73



function sqrt(num11) {
  return Math.sqrt(num11); // 1.414213562
}
 
function round(num11) {
  return num11.toFixed(3);
}
console.log(round(sqrt(2)));



function sqrt(num12) {
  return Math.sqrt(num12);
}
  
function sum12(num1, num2, num3) {
  return num1 + num2 + num3;
}
let result12 = sum12(sqrt(2), sqrt(3), sqrt(4)); // 1.414 + 1.732 + 2 = 5.146
console.log(result12);



function sqrt(num13) {
  return Math.sqrt(num13);
}

function round(num13) {
  return num13.toFixed(3);
}

function sum12(num1, num2, num3) {
  return num1 + num2 + num3;
}
let result13 = (sqrt(2), sqrt(3), sqrt(4));
console.log(result13);

result13 = (round(sqrt(2)), round(sqrt(3)), round(sqrt(4))); // 5.146
console.log(result13);



function func(num14) {
  return num14;
  let result14 = num14 * num14; // 9
  return result14;
}
window.alert(func(3)); // 3 // После return функция прекращает свою работу. Поэтому будет 3, а не 9.

function func14_2(num14_2) {
  let result14_2 = num14_2 * num14_2; // 9
  return result14_2;
}
window.alert(func14_2(3));



function func15(num) {
  if (num <= 0) {
    return Math.abs(num);
  } 
  else {
    return num * num;
  }
}
alert(func15(10)); // 100 – второе правило.
alert(func15(-5)); // 5 – первое правило – модуль числа.



function func16(num) {
  if (num <= 0) {
    return Math.abs(num);
  }
  return num * num;
}
alert(func16(10)); // 100 – второе правило, первый return не срабатывает.
alert(func16(-5)); // 5 – первое правило: модуль числа, первый return срабатывает. 



function func17(num) {
  let sum17 = 0;
  for (let i = 1; i <= num; i++) {
    sum17 += i;
  }
  return sum17;
}
alert(func17(5)); // Автор хотел вывести сумму всех чисел от 1 до num17 [5]. При этом автор остановил выполнение функции после return, то есть функция сработает один раз [1] и остановится. Надо перенести return после выполнения всего for. Тогда будет правильно [15].



function division(num18) {
  number0 = 0;
  while (num18 >= 10) {
    number0 += 1;
    num18 /= 2;
  }
  return number0;
}
console.log(division(550));
console.log(number0);



function mass19(arg19) {
  for (num19 of arg19) {
    if (num19 % 2 === 1) {
      return false;
    }
  }
  return true;
}
console.log(mass19([1, 8, 31, 152]));
console.log(mass19([1]));
console.log(mass19([8]));
console.log(mass19([31]));
console.log(mass19([152]));



function num20(arg20) {
  arrow20 = String(arg20).split();
  for (num20 of arrow20) {
    if (num20 % 2 === 1) {
      return false;
    }
  }
  return true;
}
console.log(num20(1988));



function mass21(arg21) {
  for (let i = 0; i < arg21.length - 1; i ++) {
    if (arg21[i] === arg21[i + 1]) {
      return 'Два одинаковых числа подряд.';
    }
  }
  return 'Нет одинаковых чисел подряд.';
}
console.log(mass21([4, 3, 2, 6, 8, 2]));