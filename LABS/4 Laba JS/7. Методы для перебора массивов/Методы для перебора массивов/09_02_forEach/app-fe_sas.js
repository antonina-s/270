// # forEach

// 1. Выведите квадрат каждого элемента массива numbers в консоль.
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (n) {
    console.log(n * n)
});


// 2. Сделайте то же самое, только передайте написанную заранее функцию как аргумент.
function numOne() {
  for (let n of numbers) {
    // return n ** 2;
    console.log(n ** 2)
  }
}

function numTwo(func) {
  func();
}
numTwo(numOne);


// 3. Выведите в консоль произведение значения элемента массива и его индекса.
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
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.forEach(function (iv) {
  // console.log(iv.title);
  // console.log(iv.authors);
  // console.log(iv.rating);
  console.log(`Title: "${iv.title}". Authors: ${iv.authors.join(', ')}. Rating: ${iv.rating}/5.`);
});


// 4. Выведите в консоль title каждой книги в верхнем регистре.
books.forEach(function (b) {
  console.log((b.title).toUpperCase());
});


// 5. Выполните предыдущее задание используя for..of.
for (let bfo of books) {
  console.log((bfo.title).toUpperCase()); 
}


// 6. Выполните предыдущее задание используя for.
for (let bfr = 0; bfr < books.length; bfr ++) {
  console.log(bfr, books[bfr]);
}