console.log('Here is an object!', {});

const str = 'Here is a string it is kinda long!';
console.log(str.length);

var age;
const not = false;

if (age) {
  console.log('have a 🍺');
} else {
  console.log('have a 🧃');
}

// Challenge
// write a function that takes in an expense object
// if the price (in pennies) is greater than 1500
// add a key of approved with a value of false
// otherwise add a key of approved with a value of true
// return the expense object

// Object Time
const ticket = {
  id: 1,
  location: 'Baja Burrito',
  date: '11/11/20',
  price: 1324,
  purpose: 'Lunch back when that was a thing',
  code: '100AB',
}

const priceChecker = (expense) => {
  if (expense.price > 1500) {
    expense.approved = false;
  } else {
    expense.approved = true;
  }
  return expense;
}


console.log(priceChecker(ticket));


// expense.employeeNumber = 1001;

// console.log(expense.dollarAmount);
// const keyIWantToUse = 'dollarAmount'
// console.log(expense[keyIWantToUse]);

const newObj = {
  id: 1,
};


const newerObj = {
  id: 1,
};

console.log(newObj === newerObj);


// const addChassis = () => {
//   return { chassis: 'minivan'}
// }

// const addWheels = (car) => {
//   car.wheels = 4;
//   return car;
// }

// addWheels(addChassis())
