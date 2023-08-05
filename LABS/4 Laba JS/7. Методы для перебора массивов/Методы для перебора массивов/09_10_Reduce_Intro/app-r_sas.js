// # Reduce Intro

const nums = [3, 4, 5, 6, 7]; // 25

// 1. Получите сумму элементо массива.
const sum = nums.reduce((s, n) => {
    return s + n;
})
console.log(`Сумма = ${sum}`);