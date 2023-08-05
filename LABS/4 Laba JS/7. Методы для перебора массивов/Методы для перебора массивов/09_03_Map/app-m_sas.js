// # Map

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

// 1. Получите на основе массива numbers массив с удвоенными значениями.
const numTwo = numbers.map(function (n) {
    return n * 2;
});
console.log(numTwo);


// 2. Получите на основе массива numbers массив только с четными числами.
const numPlus = numbers.map(function (p) {
    if (p % 2 !== 0) {
        return false;
    }
    else {
        return true;
    }
});
console.log(numPlus);


// 3*. Получите на основе массива words массив с аббревиатурами ["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"].
const wordsBig = words.map(function (b) {
    return b.toUpperCase(); // .split('')
});
// console.log(wordsBig[0] + ', ' + wordsBig[1] + ', ' + wordsBig[2] + ', ' + wordsBig[3]);
console.log(wordsBig); // .join(', ')

// Короче:
let newWords = words.map(words => words.toUpperCase());
console.log(newWords.join(', ')); // .join(', ')


// let wordsStr = words.join(', ');
// let matW = wordsStr.match(/\b(\w)/g);
// let abbrevW = matW.join('.');
// console.log(abbrevW.toUpperCase());


// 4. Получите на основе массива books массив с title ["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"].

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

const booksTitle = books.map(function (t) {
    return `${t.title} – ${t.rating}`;
});
console.log(booksTitle);


const booksBig = books.map(function (tb) {
  return `<h2>"${tb.title}"</h2>
  <h1>${tb.rating}</h1>`;
});
document.write(booksBig.join(''));

// Короче:
let booksTit = books.map(x => x.title);
console.log(booksTit.join(', ')); // .join(', ')