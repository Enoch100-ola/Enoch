/*
    with the following grades
    35-49 = E
    50-55 = c5
    55-59 = c6
    60-75 = c4

    write a condition to check which student passed the exam or failed

    create an array of numbers and check for the odd or even  numbers

    create a function that alerts hello world


    what is programming
    const a = true, b = false, c =true
    what is the result of  a && b || c
    create an array of even numbers less than 32
*/

// let scoreInput = 4000;
// let score = parseInt(scoreInput);

// if (score < 35) {
//   alert('sorry you failed');
// } else if (score === 35 || score <= 49) {
//   alert('you grade is E');
// } else if (score === 50 || score <= 55) {
//   alert('you grade is C5');
// } else if (score >= 55) {
//   alert('you grade is C6');
// } else {
//   alert('score is not valid');
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] % 2 === 0) {
//     console.log(`${numbers[index]} is an even number`);
//   } else {
//     console.log(`${numbers[index]} is an odd number`);
//   }
// }

// console.log('==========prime numbers ========');

// for (let index = 0; index < numbers.length; index++) {
//   if (numbers[index] / 1 == numbers[index]) {
//     console.log(`${numbers[index]} is a prime number`);
//   }
// }

// const a = true,
//   b = false,
//   c = true;

// console.log((a && b) || c);

// console.log(listMyarr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));

// function sayhello(name) {
//   return `hello ${name}`;
// }

// const addThreeNuber = (num1 = 13, num2, num3 = 35) => {
//   let result = num1 + numl2 + num3;
//   return result;
// };

// console.log(addThreeNuber(3, 5, 10));

// const add = (a) => {
//   for (let index = 0; index < a.length; index++) {
//     console.log(a[index]);
//   }
// };

// add(['David', 'Ty', 'Ay', 'Tomi', 'Erica', 'Bright', 'Smart', 'Samuel']);

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

// console.log(sayhello('favour'));
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// let arr = new Array(1, 2, 3, 5, 6);
// let userProfile = ['john doe', 23, 'ikeja', 'doe@email.com'];

// arr[4] = 12;

// let person = {
//   name: 'John Doe',
//   age: 23,
//   address: 'ikeja',
//   isMarried: true,
//   hasKids: null,
//   isBillionaire: undefined,
//   hobbies: ['travelling', 'cooking', 'dancing', 'eating'],
//   walk: function () {
//     alert('i am walking');
//   },
// };

// const student = {
//   name: 'Magdalene',
//   age: 25,
//   courses: ['Maths', 'English', 'Chemistry'],
//   carsCollection: {
//     suv: ['Hummer', 'Toyota', 'Escalade'],
//     coupe: ['audi', 'hyundai'],
//   },
//   wardRobe: {
//     designer: ['guuci', 'Channel'],
//     street: ['Louis Vuitton', 'off white', 'yeezy'],
//   },
// };

// student.email = 'pinkyberrybloom@email.com';
// student.name = 'Sophia Aisha';

// arr[0];
// arr['length'];
// console.log(arr['length']);

// console.log(student['name']);

// const {
//   name,
//   carsCollection,
//   wardRobe: { street, designer },
// } = student;

// const productTwo = {
//   name: 'Google pixel',
//   quantity: 10,
//   colours: ['black', 'green', 'white'],
//   date: 'wed May 19 2021 2:08pm',
// };

// let phoneList = [
//   {
//     name: 'Samsung A11',
//     quantity: 34,
//     colours: ['black', 'green', 'blue'],
//     date: 'wed May 19 2021 2:08pm',
//   },
//   {
//     name: 'Itel p33 pro',
//     quantity: 100,
//     colours: ['black', 'green', 'blue'],
//     date: 'wed May 20 2021 8:00am',
//   },
//   {
//     name: 'Iphone 12 S pro',
//     quantity: 13,
//     colours: ['black', 'red', 'silver gray'],
//     date: 'wed May 1 2021 8:00am',
//   },
//   { ...productTwo },
// ];

// // let z = ;

// console.log(phoneList);
// console.log(phoneList[0].quantity);
// productTwo.add = 'new value';

// function sayName(firstname, lastname) {
//   alert(`my name is ${firstname} ${lastname}`);
// }

// const myCallBack = (firstname, lastname) => {
//   sayName(firstname, lastname);
// };

// myCallBack('Anthony', 'Joshua');

let arr = new Array(1, 2, 3, 4, 5, 6);
let student = new Object({ name: 'jane', age: 34 });

console.log(arr);

class Book {
  constructor(title, page, yearOfPublish, author) {
    this.title = title;
    this.page = page;
    this.yearOfPublish = yearOfPublish;
    this.author = author;
  }

  getBookYear() {
    return `${this.title} was published in the year ${this.yearOfPublish}`;
  }

  getAuthor() {
    return `the author of ${this.title} is ${this.author}`;
  }

  description() {
    return `${this.title} has ${this.page} pages and was written by ${this.author} in ${this.yearOfPublish} `;
  }
}

const book1 = new Book('Sun Newspaper', 20, '2021 may 21', 'Favour');
console.log(book1.getBookYear());
console.log(book1.getAuthor());
console.log(book1.description());

const book2 = new Book(
  'How to cook Nigerian dishes',
  100,
  '2000 Jan 1',
  'Madam Cynthia'
);

class Magazine extends Book {
  constructor(title, page, author, yearOfPublish, category) {
    super(title, page, author, yearOfPublish);

    this.title = title;
    this.page = page;
    this.author = author;
    this.yearOfPublish = yearOfPublish;
    this.category = category;
  }

  getCategory() {
    return `this category of this magazine is ${this.category}`;
  }

  static definition() {
    return `A magazine is a kind of book that is published serially with various content`;
  }
}

let mag1 = new Magazine('Vogue', 100, 'vogue team', '2020 dec 1', 'Fashion');

console.log(Magazine.definition());

arr.length;
