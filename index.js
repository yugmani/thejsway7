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

let sum = 0;
//1. using for loop
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

console.log(sum); //42;

//

let total = 0;
values.forEach((value) => (total += value));

console.log(total); //42;

//*************************************** */
