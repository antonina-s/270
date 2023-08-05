// # Some & Every

const words = ["dog", "dig", "log", "bag", "wag"];

// 1. Проверьте, все ли слова в массиве длиной 3 символа.
const wordThree = words.every(word => {
  return word.length === 3
});
console.log(wordThree);


// 2. Проверьте, все ли слова в массиве заканчиваются на 'g'.
const wordLastG = words.every(w => {
  let lastLetter = w[w.length - 1];
  return lastLetter === 'g'
});
console.log(wordLastG);


// 3. Проверьте, есть ли слова в массиве начинающиеся на 'd'.
const wordFirstD = words.some(w => w[0] === 'd');
console.log(wordFirstD);


// 4. Проверьте, все ли слова в массиве начинаются на 'd'.
const wordFirstED = words.every(w => w[0] === 'd');
console.log(wordFirstED);


// 5. Проверьте, все ли книги в массиве с рейтингом больше 3.5.

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

const booksRatingThree = books.every(r => r.rating >= 3.5);
console.log(booksRatingThree);


// 6. Проверьте, есть ли книги в массиве у которых два автора.
// const booksAuthorsTwo = books.some(as => as.authors === 2);
// console.log(booksAuthorsTwo);

// const booksAuthorsTwo = books.some(as => {
//   return as['authors'].includes([" ", " "]) 
// });
// console.log(booksAuthorsTwo);

// const booksAuthorsTwo2 = books.some(as => as.authors == [" ", " "]); // [" ", " "]
// console.log(booksAuthorsTwo2);

// const booksAuthorsTwo3 = books.some(as => {
//   if (as.authors >= 2) {
//     return true;
//   }
//   else {
//     return false;
//   }
// });
// console.log(booksAuthorsTwo3);

