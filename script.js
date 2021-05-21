// // 'My name is favour';
// // 1000000;
// // true | false;
// // undefined;
// // null;

// // const companyName = 'Alabian Solutions';
// // const companyNameTwo = 'Alabian Solutions';
// // console.log(companyName);
// // console.log(companyNameTwo);
// // console.log('Alabian solution"s Ex students are the best');
// // console.log("Alabian solution 's Ex students are the best");
// // console.log("Alabian solution's Ex students are the best");

// // let name = 'John Doe';
// // let age = 40;
// let jobDescription = 'IT Personel';
// jobDescription = 'dancer';

// // let salary = 9000;
// // console.log(
// //   name +
// //     ' is ' +
// //     age +
// //     ' years old ' +
// //     ' and he is an ' +
// //     jobDescription +
// //     'and he earns ' +
// //     salary +
// //     ' dollars monthly'
// // );
// // console.log(
// //   `${name} is ${age} years old and he is an ${jobDescription} and he earns ${salary} dollars monthly`
// // // );

// // console.log('/////////////ARITHMETIC OPERATION///////////////');
// // let numberOne = 10,
// //   numberTwo = 25,
// //   numberThree = 50,
// //   numberFour = '3';

// // // console.log(numberFour > numberOne);
// // // console.log(numberFour < numberOne);
// // // console.log('3' == 3);
// // // console.log('3' === 3);
// // // console.log(10 != '10');
// // // console.log(10 !== '10');

// // /*

// // console.log(numberOne + numberTwo + numberThree);

// // console.log(numberThree - numberOne);

// // console.log(numberThree / numberTwo);
// // console.log(numberThree * numberTwo);
// // console.log(numberFour ** 3);

// // console.log(numberOne % numberFour);

// // console.log(numberFour++);
// // console.log(numberFour);

// // var x = 2,
// //   y = '8';

// // let convertedString = y * 1;
// // console.log(x + convertedString);
// // */

// // // let isDeveloper = true;
// // // let isAccountant = false;
// // // let knowHTML = true;
// // // let knowValuation = false;
// // // let knowEverything;
// // // console.log(isDeveloper && isAccountant);
// // // console.log(isAccountant && knowHTML);
// // // console.log(isDeveloper && knowHTML);

// // // console.log(typeof knowHTML);
// // // console.log(typeof knowEverything);

// // let arr = ['string', null, undefined, true, 10];
// // console.log(arr);

// // const hobbies = ['coding', 'documentaries', 'music', 'animes', 'eating'];
// // console.log(hobbies);
// // hobbies[3] = 'travelling';

// // hobbies[5] = 'Swimming';
// // console.log(hobbies.length);

// // let cars = [];
// // cars[0] = 'Rolls Royce';
// // cars[1] = 'Mecedes Benz';
// // cars[2] = 'Bentley';
// // cars[3] = 'Innoson Motors';
// // cars[3] = 'Chevrolet';

// // console.log(cars);

// // const description = [
// //   'John',
// //   'Doe',
// //   34,
// //   'I am married',
// //   'I have five kids',
// //   ...cars,
// // ];

// // const [firstame, lastname, age, status, bio] = description;
// // console.log(description);

// // const owe = [50_000, 100_000];

// // const money = [1_000, 30_000, 10_000, ...owe];
// // money.pop();
// // money.push(900_000);
// // console.log(money);
// // cars.shift();
// // cars.unshift('Toyota');
// // console.log(cars);

// const carsCollection = [
//   ['Rolls Royce', 'Mecerdes Benz', 'Masserati', 'Bentley'],
//   ['Toyota', 'Volks wagen', 'Honda', 'Innoson Vehicles'],
//   ['McLaren', 'Ferrari', 'Koenisegg', 'Aston Matin', 'Bugatti'],
// ];

// // console.log(carsCollection);

// // console.log(carsCollection[0]);

// const [luxuryCars, regularCars, superCars] = carsCollection;
// console.log(luxuryCars);
// console.log(regularCars);
// console.log(superCars);

// // const username = prompt('Enter username');

// // if (username.toLowerCase() == 'mark zucky') {
// //   alert('You are Welcome🤪');
// // } else {
// //   alert('you not welcome');
// // }

// const age = prompt('enter you correct age ');
// const validage = age.trim();

// if (validage < 1) {
//   alert('age is not correct');
// } else if (validage <= 17) {
//   alert('you are not eligible to take beer');
// } else if (validage > 17) {
//   alert('what kind of beer do you want');
// } else {
//   alert('age not valid');
// }

// var x = prompt('what is you name');

// x === 'Favour'
//   ? console.log('Welcome 😊 \n \\ you have 10 notification')
//   : console.log('you are not authorized');

// // if (name) {
// //   console.log('name exist');
// // } else {
// //   console.log('name is empty');
// // }

// console.log();

// let count = 1;

// while (count <= 10) {
//   console.log(count);

//   // count = count + 1;
//   // count += 1;
//   count++;
// }

for (let index = 0; index <= 10; index++) {
  console.log(index);
}

// for (let favour = 10; favour >= 0; favour--) {
//   console.log(favour);
// }

let students = [
  'David',
  'Ty',
  'Ay',
  'Tomi',
  'Erica',
  'Bright',
  'Smart',
  'Samuel',
];

for (let index = 0; index < students.length; index++) {
  console.log(students[index], index);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index]);
  }
}
