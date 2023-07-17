
// # Конструкция if-else в JavaScript.
let test = 11;
if (test > 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}


let test2 = 9;
if (test2 < 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}


let test3 = 10;
if (test3 >= 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}


let test4 = 10;
if (test4 <= 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}


let test5 = 10;
if (test5 == 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}


let test6 = 9;
if (test6 != 10) {
    window.alert(`Верно`);
}
else {
    window.alert(`Неверно`);
}



let test1_7 = 3;
let test2_7 = 3;
if (test2_7 > test1_7) {
    window.alert(test2_7);
}
else if (test2_7 < test1_7) {
    window.alert(test1_7);
}
else {
    window.alert("Числа равны между собой.");
}


let num = -1;
if (num > 0 && num < 5) {
    window.alert("Верно");
}
else {
    window.alert("Неверно");
}


let num2 = 11;
if (num2 >= 10 && num2 <= 20) {
    window.alert("Верно");
}
else {
    window.alert("Неверно");
}


let num1_10 = 11;
let num2_10 = 4;
if (num1_10 <= 1 && num2_10 >= 3) {
    window.alert("Верно");
}
else {
    window.alert("Неверно");
}


let day = 31;
if (day < 10) {
    window.alert("Первая декада");
}
if (day >= 10 && day < 20) {
    window.alert("Вторая декада");
}
if (day >= 20 && day < 30) {
    window.alert("Третья декада");
}
else if (day >= 30) {
    window.alert("Последний день месяца");
}



let num12 = 65;
let num12Sum;
num12Sum = Number(String(num12)[0]) + Number(String(num12)[1]);
if (num12 > 10 && num12 < 99) {
    if (num12Sum <= 9) {
        window.alert("Сумма цифр однозначна.");
    }
    else {
        window.alert("Сумма цифр двузначна.");
    }
} 
else {
    window.alert("Вне заданного диапазона.");
} 


let num13 = 10;
num13_last_digit = num13 % 10;
if (num13_last_digit === 0) {
    window.alert("Последняя цифра = 0.");
}
else {
    window.alert("Последняя цифра ≠ 0.");
} 



let num14 = 7;
if (num14 % 2 !== 0) {
    window.alert("Число не четное.");
}
else {
    window.alert("Число четное.");
} 


let num15 = 12;
if (num15 % 2 !== 0) {
    window.alert("Число не четное.");
}
else {
    window.alert("Число четное.");
} 


let num16 = 12;
if (num16 % 3 !== 0) {
    window.alert("Число не делится на 3.");
}
else {
    window.alert("Число делится на 3.");
} 



let num17_2 = 9;
if (num17_2 in [12, 1, 2]) {
    window.alert("Зима");
}
else if (num17_2 in [3, 4, 5]) {
    window.alert("Весна");
}
else if (num17_2 in [6, 7, 8]) {
    window.alert("Лето");
}
else if (num17_2 in [9, 10, 11]) {
    window.alert("Осень");
}

switch(num17_2) {
    case 12:
        window.alert("Зима");
        break;
    case 1:
        window.alert("Зима");
        break;
    case 2:
        window.alert("Зима");
        break;
    case 3:
        window.alert("Весна");
        break;
    case 4:
        window.alert("Весна");
        break;
    case 5:
        window.alert("Весна");
        break;
    case 6:
        window.alert("Лето");
        break;
    case 7:
        window.alert("Лето");
        break;
    case 8:
        window.alert("Лето");
        break;
    case 9:
        window.alert("Осень");
        break;
    case 10:
        window.alert("Осень");
        break;
    case 11:
        window.alert("Осень");
        break;
} 



let myStr = 'Arcadia';
if (myStr[0] === 'A') {
    window.alert("Yes");
}
else {
    window.alert("No");
}


let num19 = 12345;
let firstDigit;
firstDigit = Number(String(num19)[0]);
if (firstDigit === 1 || firstDigit === 2 || firstDigit === 3) {
    window.alert("Да");
}
else {
    window.alert("Нет");
} 


let myInt = 123;
let myStr20 = String(myInt);
let num1_20 = Number(myStr20[0]);
let num2_20 = Number(myStr20[1]);
let num3_20 = Number(myStr20[2]);
window.alert(num1_20 + num2_20 + num3_20);


let myInt21 = 123321;
let myStr21 = String(myInt21);
let num1_21 = Number(myStr21[0]);
let num2_21 = Number(myStr21[1]);
let num3_21 = Number(myStr21[2]);
let num4_21 = Number(myStr21[3]);
let num5_21 = Number(myStr21[4]);
let num6_21 = Number(myStr21[5]);

if (num1_21 + num2_21 + num3_21 === num4_21 + num5_21 + num6_21) {
    window.alert('Yes');
}
else {
    window.alert('No');
} 



// # Тернарный оператор в JavaScript. /var ? (true)if: (false)else/
let num22 = -5;
let result22;
num22 >= 0 ? (result22 = 1): (result22 = -1)
window.alert(result22);



// # Логические операции в JavaScript.
let a23 = 2 * (3 - 1); // 4
let b23 = 6 - 2; // 4
a23 == b23 ? window.alert("Равны."): window.alert("Не равны.") 


let a24 = 5 * (7 - 4); // 15
let b24 = 1 + 2 + 7; // 10
//    if (a24 > b24) {
//        window.alert("Больше");
//    }
//    else {
//        window.alert("Не больше");
//    } 
a24 > b24 ? window.alert("Больше."): window.alert("Не больше.")


let a25 = 2 ** 4; // 16
let b25 = 4 ** 2; // 16
//a25 == b25 ? window.alert("Равны"): window.alert("Не равны")
a25 != b25 ? window.alert("Не равны"): window.alert("Равны")


let age = 19;
age >= 18 ? window.alert("Внимание, данная страница может содержать контектс для взрослых!"): window.alert("Доступ запрещен.")