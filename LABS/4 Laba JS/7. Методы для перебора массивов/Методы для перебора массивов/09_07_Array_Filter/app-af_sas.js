// # Array Filter

const nums = [34, 35, 67, 54, 109, 102, 32, 9]; // 34, 54, 102, 32

// 1. На основе массива nums получите массив только с четными числами.
let numsEven = nums.filter(num => num > 0 && num % 2 === 0);
console.log(`Чётные числа: ${numsEven.join(', ')}.`);
//
// const evenOnly = nums.filter(function (n) {
//   const res = n % 2;
//   return res === 0
// })
// console.log(evenOnly);


// 2. На основе массива nums получите массив только с нечетными числами.
let numsOdd = nums.filter(num => num > 0 && num % 2 !== 0);
console.log(`Нечётные числа: ${numsOdd.join(', ')}.`);
//
// const oddsOnly = nums.filter(function (n) {
//   return n % 2 !== 0
// })
// console.log(oddsOnly);


// 3. На основе массива nums получите массив только с числами, которые больше 50.
let numsFifty = nums.filter(nums => nums >= 50);
console.log(`Числа больше 50: ${(numsFifty.sort()).join(', ')}.`);

function sortNumsFifty(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1
}
numsFifty.sort(sortNumsFifty);
console.log(`Сортировка чисел больше 50: ${numsFifty.join(', ')}.`);


// 4. Получите все книги с рейтингом больше 4.3.

const books = [
  { title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"], },
  { title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"], },
  { title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"], },
  { title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"], },
  { title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"], },
  { title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"], },
  { title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"], },
  { title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"], },
  { title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"], },
];

let booksRatingFour = books.filter(r => r.rating >= 4.3 && r.rating <= 5);
console.log(booksRatingFour);


// 5. Получите все книги с жанром fantasy.
// let booksFantasy = books.filter(f => f.genres == "fantasy");
// console.log(booksFantasy);
//
let booksGenresF = books.filter(function (item) {
  return item['genres'].includes("fantasy")
});
console.log(booksGenresF);


// 6. Получите все книги с жанром short stories или essays.
let booksGenresSSE = books.filter(g => {
  return g['genres'].includes("short stories") || g['genres'].includes("essays")
});
console.log(booksGenresSSE);