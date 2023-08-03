// # Revisiting Array Sort

const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];

// 1. Отсортируйте массив по возрастанию значений.
console.log(prices.sort((a, b) => (a - b)));


// 2. Отсортируйте массив по убыванию значений.
console.log(prices.sort((a, b) => (b - a)));


// 3. Отсортируйте массив по уменьшению рейтинга.

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

// books.sort(function (a, b) {
//   if (a.rating < b.rating) {
//     return 1;
//   }
//   else if (a.rating > b.rating) {
//     return -1;
//   }
//   else { // else if (a.rating = b.rating) 
//     return 0;
//   }
// });
// console.log(books);
//
let ratingSort = books.sort(function(a, b) {
  return (b.rating - a.rating);
});
console.log(ratingSort);