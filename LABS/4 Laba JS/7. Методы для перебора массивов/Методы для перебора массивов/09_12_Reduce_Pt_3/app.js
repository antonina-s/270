const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

// ** 1. На основе массива votes получите объект в двумя свойствами, в которых должно быть посчитано
// сколько y и сколько n: {y: 25, n:44}

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

// 2. *** Получите объект с массивами, в которых сгруппируйте книги по рейтингу.
// Массивы должны быть для рейтинга от 0 до 1, от 1 до 2, от 2 до 3, от 3 до 4 и от 4 до 5
// и в каждом массиве долдны находиться книги с рейтингом, который входит в диапазон.
// Например, если у книги рейтинг 3.5, он попадает в массив с рейтингами от 3 до 4
// To group books by rating:

/*
2:[{…}]
3:[{…}, {…}]
4:[{…}, {…}, {…}, {…}, {…}, {…}, {…}]
*/
