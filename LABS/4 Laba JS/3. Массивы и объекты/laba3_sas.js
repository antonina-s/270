
// # Массивы в JavaScript.
let mass1 = ["a", "b", "c"];
window.alert(mass1);
console.log(mass1);



let mass2 = ["a", "b", "c"];
window.alert(`${mass2[0]}, ${mass2[1]}, ${mass2[2]}`);



let mass3 = ['a', 'b', 'c', 'd'];
window.alert(`${mass3[0]} + ${mass3[1]} + ${mass3[2]} + ${mass3[3]}`);



let mass4 = [1, 2, 3];
let result4 = mass4[0] + mass4[1] + mass4[2];
window.alert(result4);



let mass5 = [2, 5, 3, 9];
let result5 = (mass5[0] * mass5[1]) + (mass5[2] * mass5[3]);
window.alert(result5);



let mass6 = [2, 5, 3, 9];
window.alert(mass6.length);



let mass7 = [2, 5, 3, 9];
window.alert(mass7.reverse()[0]);



let mass8 = ['a', 'b', 'c'];
mass8[0] = 1;
mass8[1] = 2;
mass8[2] = 3;
window.alert(mass8);



let mass9 = [1, 2, 3];
mass9[0] += 3;
mass9[1] += 3;
mass9[2] += 3;
window.alert(mass9);



let mass10 = [1, 2, 3];
mass10[0] ++;
mass10[1] ++;
mass10[2] ++;
window.alert(mass10);
 


let arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;
window.alert(arr);



let arr12 = [];
arr12[3] = 'a';
arr12[8] = 'b'; // 9
window.alert(arr12.length); 



// # Объекты в JavaScript.
let obj13 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
window.alert(`${obj13[1]}, ${obj13[2]}, ${obj13[3]}.`); // Backtick



let obj14 = {
    a : 1,
    b : 2,
    c : 3
}
window.alert(obj14.a + obj14.b + obj14.c);



let obj15 = {
    '1a' : 1,
    '2b' : 2,
    'c-c' : 3
}
window.alert(obj15['1a'] + obj15['2b'] + obj15['c-c']);



let user = {
    name : "Nina",
    surname : "A.",
    patronymic : "Ivanovna",
    age : 18
}
window.alert(user.name + " " + user.surname + " " + user.patronymic + " " + user.age);



let date = {
    year : "2023",
    month : "07",
    day : "18"
}
window.alert([date.year, date.month, date.day].join("-") + ".");



let obj18 = {key1: 1, key2: 2, key3: 3};
window.alert(obj18.key1 + obj18.key2 + obj18.key3);



let obj19 = {'1a': 1, 'b2': 2, 'eee-': 3, 'd4': 4};
window.alert(obj19['1a']);
window.alert(obj19.b2);
window.alert(obj19['eee-']);
window.alert(obj19.d4);

