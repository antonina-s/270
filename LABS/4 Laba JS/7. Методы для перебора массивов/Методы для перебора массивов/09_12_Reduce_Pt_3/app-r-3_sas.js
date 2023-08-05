// # Reduce Pt. 3

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"]; // 13

// 1**. На основе массива votes получите объект с двумя свойствами, в которых должно быть посчитано сколько y и сколько n: {y: 25, n: 44}.
let resYN = votes.reduce(function(acc, n) {
  acc[n] = (acc[n] || 0) + 1;
  return acc;
}, {});
console.log(resYN);
//
// const res = votes.reduce((acc, rec, index) => {
//   return (typeof acc[rec] !== 'undefined') 
//     ? { ...acc, [rec]: acc[rec] + 1 } 
//     : { ...acc, [rec]: 1 }
// }, {});
// console.log(res);


// 2***. Получите объект с массивами, в которых сгруппируйте книги по рейтингу. Массивы должны быть для рейтинга от 0 до 1, от 1 до 2, от 2 до 3, от 3 до 4 и от 4 до 5 и в каждом массиве должны находиться книги с рейтингом, который входит в диапазон. Например, если у книги рейтинг 3.5, он попадает в массив с рейтингами от 3 до 4.
/*
To group books by rating:
2:[{…}]
3:[{…}, {…}]
4:[{…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/

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
  { title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"], },
  { title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"], },
  { title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"], },
];

// Диапазон книг с оценкой больше 4.5 и до 5.
let booksRatingFourFiveFive = books.filter(r => r.rating >= 4.5 && r.rating <= 5);
console.log(booksRatingFourFiveFive);

// Диапазон книг с оценкой больше 4 и до 4.5.
let booksRatingFourFive = books.filter(r => r.rating >= 4 && r.rating < 4.5);
console.log(booksRatingFourFive);

// Диапазон книг с оценкой больше 3 и до 4.
let booksRatingThreeFour = books.filter(r => r.rating >= 3 && r.rating < 4);
console.log(booksRatingThreeFour);

// Диапазон книг с оценкой больше 2 и до 3.
let booksRatingTwoThree = books.filter(r => r.rating >= 2 && r.rating < 3);
console.log(booksRatingTwoThree);


