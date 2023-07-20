
// # Цикл for в JavaScript.
for (let num1 = 1; num1 <= 100; num1 ++) { // Не забывать ++.
    console.log(num1);
}



for (let num2 = 11; num2 <= 33; num2 ++) {
    console.log(num2);
}



for (let num3 = 0; num3 <= 100; num3 ++) {
    if (num3 % 2 === 0) { // Деление по модулю.
        console.log(num3);
    }
}



// # Цикл while в JavaScript.
let i4 = 10;
while (i4 >= 1) {
    console.log(i4);
    i4 --; 
}



let i5 = 10;
while (i5 >= 1) {
    console.log(i5);
    i5 --; // Если от большего к меньшему, то --.
}



let i6 = 10;
while (i6 >= 1) {
    console.log(i6);
    i6 --;
}



let i7 = 10;
while (i7 >= 1) {
    console.log(i7);
    i7 --;
}



// # Накопление результата в цикле JavaScript.
let res8 = 0;
for (let num8 = 10; num8 <= 50; num8 ++) {
    res8 += num8;
}
console.log(res8);



let res9 = 1;
for (let num9 = 1; num9 <= 20; num9 ++) {
    res9 *= num9; // Всё перемножается между собой.
}
console.log(res9);



let res10 = 0;
for (let num10 = 2; num10 <= 100; num10 ++) {
    if (num10 % 2 === 0) {
        res10 += num10;
    }
}
console.log(res10);



let res11 = 0;
for (num11 = 1; num11 <= 99; num11 ++) {
    if (num11 % 2 === 1) {
        res11 += num11;
    }
}
console.log(res11);



// # Цикл for для массивов в JavaScript.
let mass12 = ['a', 'b', 'c', 'd', 'e'];
for (i12 of mass12) {
//    console.log(i12);
    console.log(`${i12}`);
}



let arr13 = [1, 2, 3, 4, 5];
for (let i13 = 0; i13 < arr13.length; i13 ++) { // Убрать =, иначе добавляется лишний элемент массива.
    console.log(arr13[i13]);
}



let mass14 = [1, 2, 3, 4, 5];
for (i14 = 0; i14 < mass14.length; i14 ++) {
    if (mass14[i14] % 2 === 1) {
        console.log(mass14[i14]);
    }
}



let res15 = 0;
let mass15 = [1, 2, 3, 4, 5];
for (let i15 = 0; i15 < mass15.length; i15 ++) {
    res15 += mass15[i15];
}
console.log(res15);



let res16 = 1; // На 0 нельзя умножать.
let mass16 = [1, 2, 3, 4, 5];
for (let i16 = 0; i16 < mass16.length; i16 ++) {
    res16 *= mass16[i16];
}
console.log(res16);



// # Перебор массива циклом for-of в JavaScript.
let mass17 = ['a', 'b', 'c', 'd', 'e'];
for (let i17 of mass17) {
    console.log(i17);
}



let res18 = 0;
let mass18 = [1, 2, 3, 4, 5];
for (let i18 of mass18) {
    res18 += i18;
}
console.log(res18);