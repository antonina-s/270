
// # Переменные в JavaScript. 
let num = 123;
window.alert(num);

let a = 10;
window.alert(a);
window.alert(`Сложение = ${a + 10}`);



// # Числа и операции над ними в JavaScript.
let a2;
a2 = 1 + 2 + 3;
window.alert(`Значение a2 ${a2}`);
window.alert(`Сумма чисел = ${1 + 2 + 3}`);


let a3 = 10;
let b = 2;
window.alert(`${a3 + b}, ${a3 - b}, ${a3 * b}, ${a3 / b}`);


let c = 10;
let d = 5;
let result; // Вводим новую переменную.
result = c + d;
window.alert(`Сумма c + d = ${result}`);


let a4 = 1;
let b2 = 2;
let c2 = 3;
window.alert(a4 + b2 + c2);


let a5 = 10;
let b3 = 5;
let c3;
c3 = a5 - b3;
let d2 = 7;
let result2;
result2 = c3 + d2;
window.alert(`Значение c + d = ${result2}`);


let a6 = 1.5;
let b4 = 0.75;
let result3;
result3 = a6 + b4;
window.alert(result3);


let a7 = 10;
let b5 = 3;
window.alert(a7 % b5);


window.alert(`2 в степени 10 = ${Math.pow(2, 10)}`);

window.alert(2 ** 10);



// # Строки в JavaScript.
let str = '!!!';
window.alert(str);


let strJava = 'java';
let strScript = 'script';
window.alert(strJava + strScript);


let strHello = "Hello,";
let strWorld = "World!";
window.alert(strHello + " " + strWorld);
window.alert(`${strHello} ${strWorld}`);


let myStr = '1234567890';
window.alert(myStr.length);


let strABC = "a\nb\nc"; // Перенос строки через \n.
window.alert(strABC);



// # Специальные значения в JavaScript.
let myVariable;
window.alert(myVariable); // undefined


let myNull = null;
window.alert(myNull);


let myBoolean = true;
window.alert(myBoolean);


let myStr1 = 'one';
let myStr2 = 'two';
window.alert(myStr1 * myStr2); // NaN


window.alert(10 / 0); // Infinity


window.alert(-10 / 0); // -Infinity



// # Константы в JavaScript.
const pi = 3.14159; // π
let radius = 5;
window.alert(2 * pi * radius); // l = 2 * π * R

let circleRadius = 5;
window.alert(2 * Math.PI * circleRadius); // 31.41592653589793



// # Принудительное преобразование типов данных. *
let a10 = +'10'; // Превратить строку в число – поставить +
let b10 = +'20';
window.alert(a10 + b10);
// или через Number.
window.alert(Number(a10) + Number(b10));


let a11 = '5px'; // 0 = false, то есть всё, что после цифры, отбрасывается.
let b11 = '6px';
window.alert(`${Number(a11[0]) + Number(b11[0])}px`);

let a12 = 5;
let b12 = 6;
window.alert(`Значение в ${a12 + b12}px`);


let a13 = '5.5px';
let b13 = '6.25px';
let aa13 = Number(a13.slice(0, -2)); // Отрезаем px.
let bb13 = Number(b13.slice(0, -2));
window.alert(`${aa13 + bb13}px`); // Добавляем px.
// Или
window.alert(String(aa13 + bb13) + "px.");


let a14 = 1; // Наоборот: вместо Числа указывается Строка.
let b14 = 2;
window.alert(String(a14) + " " + String(b14));


let a15 = 12345; // Переделываем числа в текст и считаем знаки.
window.alert(String(a15).length);


let a16 = 12345;
let b16 = 678;
window.alert(`${String(a16).length + String(b16).length} знаков.`);



// # Получение символов строки на JavaScript. *
let myStr10 = 'abcde';
window.alert(myStr10[0]);
window.alert(myStr10[2]);
window.alert(myStr10[4]);

//window.alert(myStr10[0], myStr10[c], myStr10[e]);


let myStr11 = 'abcde';
let result11;
result11 = myStr11.split("").reverse().join("");
window.alert(result11);


let myStr12 = 'abcde';
let myNum12 = 3; // d
window.alert(myStr12[3]);
window.alert(myStr12[myNum12]);


let myStr13 = 'Solo per vendetta';
window.alert(`${myStr13[myStr13.length - 1]}, ${myStr13[myStr13.length - 2]}, ${myStr13.split(" ")[0]}`);


let myStr14 = '12345';
let n1 = Number(myStr14[0]);
let n2 = Number(myStr14[1]);
let n3 = Number(myStr14[2]);
let n4 = Number(myStr14[3]);
let n5 = Number(myStr14[4]);
window.alert(n1 + n2 + n3 + n4 + n5);


let myInt = 12345;
let myStr15 = String(myInt); // Переводим в строку.
let nu1 = Number(myStr15[0]);
let nu2 = Number(myStr15[1]);
let nu3 = Number(myStr15[2]);
let nu4 = Number(myStr15[3]);
let nu5 = Number(myStr15[4]);
window.alert(nu1 + nu2 + nu3 + nu4 + nu5);


let myInt2 = 12345;
let myStr16 = String(myInt2); // Переводим в строку.
let num1 = Number(myStr15[0]);
let num2 = Number(myStr15[1]);
let num3 = Number(myStr15[2]);
let num4 = Number(myStr15[3]);
let num5 = Number(myStr15[4]);
window.alert(num1 * num2 * num3 * num4 * num5);


let myInt3 = 12345;
let myStr17 = String(myInt3); // Переводим в строку.
let temp = myStr17.split("").reverse().join("");
let result12 = Number(temp);
window.alert(result12);