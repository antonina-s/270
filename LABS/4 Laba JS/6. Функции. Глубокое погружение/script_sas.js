
// 1. Function Scope

// These variables are SCOPED to the function:
function lol() {
    let person = 'Tom';
    const age = 45;
    let color = 'teal'; // var лучше не использовать
    console.log(person);
    console.log(`Возраст: ${age}`);
    console.log(`Цвет: ${color}`);
}
// These variables are SCOPED to changeColor():
function changeColor() {
    const color = 'purple';
    const age = 19;
    console.log(`Смена цвета на ${color}`);
    console.log(`Смена возраста на ${age}`);
}
lol();
changeColor();
// person; // NOT DEFINED
// age; // NOT DEFINED
// color; // NOT DEFINED
/* 
Нельзя вывести переменные, находящиеся внутри функци, потому что их область видимости только внутри функция. Их можно получить в функции через return.
*/

let bird = 'foenix';
function birdWatch() {
    // This bird is scoped to birdWatch():
    let bird = 'golden duck';
    console.log(bird); // golden duck
}
birdWatch();
console.log(bird); // foenix



// 2. Block Scope

// let & const are BLOCK SCOPED:
if (true) {
    const animal = 'cat';
    console.log(animal); // cat
}
// console.log(animal); // NOT DEFINED 
/* Внешняя переменная не определена. Существует только переменная внутри блока if. */

// VAR IS NOT BLOCK SCOPED:
if (true) {
    var animal = 'dog';
    console.log(animal); // dog
}
console.log(animal); // dog !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* Переменная определена через var – для var не существует блочной области видимости. */

// let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
// var i = 10;
// for (var i = 0; i < animals.length; i ++) {
//     console.log(i, animals[i]);
// }
// console.log(i);
/* Из-за того, что var игнорирует всё и позволяет повторное объявление переменной, мы и получили переопредение переменной i. */

let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
let i = 10;
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
console.log(i);
/* Через let переменная i остаётся локальной. */

function doubleArr(arr) {
    const result = []; // Объявлено внутри функции.
    for (let num of arr) {
        let double = num * 2; // Ограничено данным циклом.
        result.push(double);
    }
    return result;
}
console.log(doubleArr([1, 1, 2, 3, 5, 8, 13]));



// 3. Lexical Scope

function outer() {
    let movie = 'Amadeus'; // Объявлено внутри родительской функци.
    function inner() {
        // let movie = "The Shining";
        function extraInner() {
            // Переменная movie не определена в данной функции. Но у неё есть доступ к переменной в родительской функци.
            console.log(movie.toUpperCase());
        }
        extraInner();
    }
    inner();
}
outer(); // AMADEUS



// 4. Function Expression

// Function Statement:
function add(x, y) {
    return x + y;
}
console.log(add(5, 5));

// Function Expression (Anonymous):
const sum = function (x, y) {
    return x + y;
}
console.log(sum(10, 20));

// Function Expression (Named):
const product = function multiply(x, y) {
    return x * y;
}
console.log(product(10, 20));



// 5. Function as Values

function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

// Переводим в строку:
const operations = [add, subtract, multiply, divide];
// Создаём цикл:
for (let func of operations) {
    let result = func(30, 5); // x, y
    console.log(result);
}
// Можно складывать функции в объект:
const thing = {
    doSomething: multiply
}
thing.doSomething(4, 5);
console.log(thing.doSomething(4, 5));



// 6. Functions as Arguments

// This function accepts another function as an argument:
function callThreeTimes(f) {
    f();
    f();
    f(); // Вызываем три раза.
}

function cry() {
    console.log("BOO HOO I'M SO SAD!");
}

function rage() {
    console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i ++) {
        action();
    }
}
repeatNTimes(cry, 5); // Вызываем cry пять раз.
repeatNTimes(rage, 2);

// Из двух функций делаем аргументы:
function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } 
    else {
        f2();
    }
}
pickOne(cry, rage); // Произвольно вызываем одну из двух функций.



// 7. Functioins as return values

// Функция возвращает функцию:
function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}
const res = multiplyBy(100);
console.log(res(10));


// Triple holds a function:
const triple = multiplyBy(3);
// We can call it:
triple(4); // 12
triple(10); // 30

const double = multiplyBy(2);
double(3); // 6
double(9); // 18

const halve = multiplyBy(0.5);
halve(5); // 2.5
halve(100); // 50

// This function also acts as a "function factory":
function makeBetweenFunc(x, y) {
    return function (num) {
        return num >= x && num <= y;
    };
}
const ages = makeBetweenFunc(18, 99);
console.log(ages(23));

// Функция проверяет, что значение между 0 и 18:
const isPersonAge = makeBetweenFunc(0, 18);
isPersonAge(10); // true
isPersonAge(56); // false

const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(1994); // true
isInNineties(1987); // false

const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(68); // true
isNiceWeather(98); // false



// 8. Callbacks

function grumpus() {
    window.alert("GAHHH GO AWAY!");
}

// setTimeout(callback, delay)
setTimeout(function () { // Передаём функцию обратного вызова.
    window.alert("Welcome!")
}, 1000); // миллисекунды
/* Теперь приветствие появится через 1 секунду после загрузки страницы. */

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    window.alert("WHY DID YOU CLICK ME!!??") // Кнопка.
})



// 9. Hoisting (Поднятие)

// Variables declared with var are hoisted:
// console.log(animal9); // Переменная animal не объявлена.

var animal = 'Tapir';
console.log(animal); // Tapir


// Variables declared with let & const are not hoisted:
const shrimp = 'Harlequin Shrimp';
console.log(shrimp);

// Function statements are hoisted:
howl();
/* Функция работает из-за контекстного выполнения. */
function howl() {
    console.log("AWOOOOOOO");
}

var hoot = function () {
    console.log("HOOOO, HOOOOO");
}
hoot();
/* Функция сработает, так как вызвана после объявления. */