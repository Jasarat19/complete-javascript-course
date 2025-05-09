'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivert: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//////////////////////////////////////
// Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// // Default values
//let's say that we're trying to retrieve the starterMenu.so this one, but we then want to give it another namelike upper.

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//we get the default value, which is the empty array.And here we get the starter menu.
//without this, we would then get undefined

// Mutating variables

// when we start a line with a curly brace like this,then JavaScript expects a code block.
//And since we cannot assign anything to a code block,like we did here with the equal sign(=obj likhsi),
//then we get this error,unexpected token with the equal there.
//So to solve this here,the trick is to wrap all of this into a parenthesis.
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/*
///////////////////////////////////////
// Destructuring Arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);

//let [first, second] = restaurant.categories;- //eikhane first ta hocche first hobe and second mane 2nd elements
//let [first, , second] = restaurant.categories; //eikhane first ta hocche first hobe and second mane 3rd elements
//because , ,  diye second element ta khali rakhsi mane amra second ta chacchina.

//console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//if we were to like to switch these two variables, then without destructuring
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);,6

//switching variables w destruturing
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive two return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

///////////nested destruction//
const nested = [2, 4, [5, 6]];
//destructuring inside of destructuring
//const [i, , j] = nested;

//console.log(i, j);
//we get the number two and then the array five and six.
//we need to do destructuring inside of destructuring shown below
const [i, , [j, k]] = nested;
console.log(i, j, k);

/////////// we can also set default values the variables when we are extracting them./////////////
//const [p, q] = [8, 9];
//console.log(p, q, r); //we actually don't know the array alright.
// And so we might try to take three elements out of the array using again destructuring
//  r is not defined ashe
// we can set default values. So that's simply set them all to one
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
