// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// MUSKETEERS
//*************************************** */

// 1.
const musketeers = ['Athos', 'Porthos', 'Aramis'];

// 2.
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

///Athos, Porthos, Aramis

//3.
musketeers.push("D'Artagnan");

console.log(musketeers[musketeers.length - 1]); //D'Artagnan

//4.
const forEachArray = musketeers.forEach((musket) => console.log(musket));

console.log(forEachArray); //Athos Porthos Aramis D'Artagnan

//5.
let poorAramis = musketeers.splice(2, 1);

console.log(poorAramis); // ["Aramis"]

//6.
for (const musket of musketeers) {
  console.log(musket);
}

// Athos Porthos D'Artagnan

// SUM OF VALUES
// *************************************** */
const values = [3, 11, 7, 2, 9, 10];

//1. using for loop
let sum = 0;

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

console.log('Sum: ', sum); //42;

//2. using forEach loop

let total = 0;
values.forEach((value) => (total += value));

console.log('Total: ', total); //42;

//3 using for...of loop
let whole = 0;

for (const value of values) {
  whole += value;
}

console.log('Whole: ', whole); //42

//4 using array.reduce() method
let cumulated = values.reduce((accu, current) => accu + current);

console.log('Cumulated = ', cumulated); //42

// ARRAY MAXIMUM
//*************************************** */

const valuesNew = [3, 11, 7, 2, 9, 10];

// using Math.max() method
let max = Math.max(...valuesNew);
console.log('Max Value: ', max); //11

//using array.reduce() method
let maximum = valuesNew.reduce((prev, current, index, array) => {
  return prev > current ? prev : current;
});

console.log('Maximum: ', maximum); //11

let highest;
//using for loop
for (let i = 0; i < valuesNew.length; i++) {
  highest = highest > valuesNew[i] ? highest : valuesNew[i];
}

console.log('Highest Value: ', highest);
