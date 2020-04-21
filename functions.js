// const chicken = 'chicken';
// console.log(`pricessed ${chicken}`);

// const cow = 'cow';
// console.log(`pracessed ${cow}`);

// const pig = 'pig';
// console.log(`precessed ${pig}`);

// const tuna = 'tuna';
// console.log(`processed ${tuna}`);

const nuggatizer = (animal) => {
  return `function processed ${animal}`;
}

console.log(nuggatizer('chicken'));
console.log(nuggatizer('cow'));
console.log(nuggatizer('pig'));
console.log(nuggatizer('tuna'));

const dogBreed = (breed) => {
  return `My favorite dog breed is ${breed.toUpperCase()}`;
}

console.log(dogBreed('lab'));
console.log(dogBreed('🐶'));

// Challenge 1
// write a function that takes any number and returns that number plus 42
const added = (number) => {
  return number + 42;
}

console.log(added(12));
console.log(added(33));
console.log(added(10000000));


// Challenge 2
// Write a function that takes the year you were born and figures out how old you will be in 2099
const futureAge = (birthYear) => {
  return 2099 - birthYear;
}

console.log(futureAge(1987));
console.log(futureAge(1900));
console.log(futureAge(100));
