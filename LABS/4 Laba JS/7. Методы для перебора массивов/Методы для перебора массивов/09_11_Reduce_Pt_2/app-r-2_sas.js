// # Reduce Pt. 2

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// 1. Найдите максимальное значение среди элементов массива.
let maxNum = grades.reduce((max, num) => {
    if (num > max) return num;
    return max;
});
console.log(maxNum); // 99

// Короче:
let maxNb = grades.reduce(function (max, cV) {
    return cV > max ? cV : max
})
console.log(maxNb);
//
// const maxNumber = grades.reduce((maxN, nN) => (
//     Math.max(maxN, nN)
// ));
// console.log(maxNumber);


// 2. Найдите минимальное значение среди элементов массива.
let minNum = grades.reduce((min, num) => {
    if (num < min) return num;
    return min;
});
console.log(minNum); // 64


// 3. Найдите среднее значение. 
function meanNum(acc, item, index, arr) {
    const sum = acc + item;
    if (index === arr.length - 1) {
        return (sum / arr.length) // 733 / 9 = 81
    }
    return sum
}
const mean = grades.reduce(meanNum, 0);
console.log(mean.toFixed(1)); // Math.floor((mean * 100) / 100)