console.log('Arrays!!!');

const coolArray = ["Luke", "Matt", "Michael", "Jim", "Greg"];
console.log('before join:', coolArray);
console.log(coolArray.join(' | '));
console.log('after join: ', coolArray);
const popped = coolArray.pop();
console.log('Removed element:', popped);
console.log('after pop: ', coolArray);
const shifted = coolArray.shift();
console.log(shifted);
console.log('after shift: ', coolArray);
coolArray.push('Whatever');
console.log('after push: ', coolArray);
coolArray.unshift('Beginning');

// Challenge 1
// write a function that takes an array and an index and prints out the value of that index
// i.e. for array ["cool", "dude"] and index 0, I would get "cool"
const valueFinder = (arr, idx) => {
  return arr[idx];
}

console.log(valueFinder(coolArray, 2));
console.log(valueFinder([1,2,3,4,5], 0));

// Challenge 2
// write a function that takes and array of something and tells you if the name "Luna" is in that array
const isLuna = (arr) => {
  if(arr.indexOf('Luna') === -1) {
    return false
  }

  return true
}

console.log(isLuna(['one', 2, 'Luna', 'four']));
console.log(isLuna(coolArray));
