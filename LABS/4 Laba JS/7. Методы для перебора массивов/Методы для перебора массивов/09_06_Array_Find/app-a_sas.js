// # Array Find

let movies = ["The Fantastic Mr. Fox", "Mr. and Mrs. Smith", "Mrs. Doubtfire", "Mr. Deeds"];

// 1. Найдите первый фильм, содержащий в названии Mr.
let movieMr = movies.find(x => {
  return x.includes('Mr.')
});
console.log(`"${movieMr}"`);


// 2. Найдите первый фильм, начинающийся с Mr.
let movieFirstMr = movies.find(x => {
  return x.startsWith('Mr.')
});
console.log(`"${movieFirstMr}"`);


// 3. Найдите первую книгу с рейтингом больше 4.3.

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"], // Зачем [] ?
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

let ratingBig = books.find(r => {
  return r.rating >= 4.3 && r.rating < 4.4;
});
console.log(ratingBig);
//
// let ratingBooks = books.find(item => item.rating >= 4.3 && item.rating < 4.4);
// console.log(ratingBooks);


// 4. Найдитепервую книгу, у которой автор Neil Gaiman.
let authorsNT = books.find(function (name) {
  return name['authors'].includes('Neil Gaiman') // Один (первый) элемент.
});
console.log(authorsNT);
//
let booksAuthors = books.find(name => name.authors == 'Neil Gaiman');
console.log(booksAuthors);