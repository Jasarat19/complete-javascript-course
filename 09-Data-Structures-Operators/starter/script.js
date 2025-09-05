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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    // destructure kore felsi
    //to call this function here and passing in an object of options
    // order match kora lagbena
    console.log(
      `Order receives! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
  // default set korle ja hobe
  // orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {// destructure kore felsi
  //to call this function here and passing in an object of options
  // order match kora lagbena
  //console.log(
  //  `Order receives! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
  //);

  //},
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    //first argument was stored into this main argument here
    //and then all the remaining arguments that were passed
    //in were simply stored into this array
    console.log(mainIngredient);
    console.log(otherIngredients);
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
/*
///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');*/

///////////////////////////////////////
// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);
/*
////////////

//Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// OR assignment operator assigns a variable to a variable if that variable is currently falsy.
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
//AND last ta nibe as first ts true
// rest1.owner = rest1.owner && '<ANONYMOUS>';// owner undefined ashe
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>'; //owner asheina
// assignment operator assign a value to a variable if first value is currently truthy.
//So in case of falsy because it didn't exist so nothing happened
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
/* so nullish coalescing operator ?? it works almost the same way as the OR operator, 
really almost the same, but it will fix or error here.*/
// for the nullish coalescing operator, it is as if the zero and the empty string were not falsy
// values and were instead truthy values as well.
// so only if this was null or undefined, only then the second operand here would be executed and returned.

console.log(guestCorrect);

///////////////////////////////////////
// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
//short circuiting means that if the first value is a truthy value,
// it will immediately return that first value.
//second ta dekhbeona
console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //jonas bc this '' here is a falsy value the second
// operand will be evaluated

console.log(true || 0); //true
console.log(undefined || null); //null - as you already know, undefined is a falsy value,
// and so we then go to the second operand, that happens even though null is also a falsy value.
/*in the OR operation the result is true,
if at least one operand is true,So if the first operand is already true then JavaScript doesn't even have to look
at the other values because the result of the expression will already be true anyway.*/

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello
//turnery operator replace kore

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// mane hocche resturant.guess exsist korle niba naile 10 nao.
console.log(guests1); // answer 10 bc restaurant.numGuests nei kichu so undefined

restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

restaurant.numGuests = 0; // bug as amra chai j guest number 0 ashuk
// but falsy dekhe ashena so pore solve korbe lecturer
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

console.log('---- AND ----');
/*the AND operator short circuits, when the first value is falsy.
And then immediately returns that falsy value without even evaluating the second operand.*/
//So when it is truthy, it means that the evaluation continues and then simply the last value is returned.

console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //jonas

console.log('Hello' && 23 && null && 'jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); //if restaurant.order pizza
//does not exist, so it's undefined, it will then short circuit the evaluation and nothing else will happen.
//if it does exist. So if it's a truthy value, then the second part here will be evaluated.
/*So the OR operator will return the first truthy value of all the operands,
or simply the last value if all of them are falsy.
On the other hand,the AND operator will return the first falsy value or the last value if all of them are truthy.
//As for practical applications, we can use the OR operator to set default values,
and we can use the AND operator
to execute code in the second operand if the first one is true.*/

// Rest Pattern and Parameters

//The rest pattern uses the exact same syntax however, to collect multiple elements
// and condense them into an array
//spread-unpack, rest - pack

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]; //so it's called rest because it will take the rest of the elements.
// So the remaining elements of the array & then put them into a new array
// so 3,4 ,5 hocche ekhnn new array , OTHERS er part.
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //so it does not include any skipped element

// print korle Pizza Risotto ashe er por ekta new array banay dey
//the rest pattern always must be the last in the destructuring assignment
// because otherwise how will JavaScript know until when it should collect the rest of the array,
//here can only ever be one rest in any destructuring assignment

// Objects
//the remaining elements will be collected into a new object and not into a new array.
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  //... number ta rest pattern add er shob array ekshthe niye answer diye dey ekbare
  //5
  // 17
  //25
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); //eita spread

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); //the remaining arguments here will simply be put in an
//  empty array because of course there are none
//So the spread operator is used where we would otherwise write values, separated by a comma.
//On the other hand the rest pattern is basically used where we would
// otherwise write variable names separated by commas.

////////////
// The Spread Operator (...)
// we can use the spread operator to basically expand an array into all its elements.
//difference between spread operator and destructuring
//- the big difference is that the spread operator takes all the elements from the array
// and it also doesn't create new variables.

//we used the spread operator to build new arrays
// and to pass multiple values into a function.

//normal way
//const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

//whenever we need the elements of an array individually, then we can use the spread operator.
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

//we will create a complete new  array with one more food item in the main menu array.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// the spread operator works on all iterables.

// Iterables: arrays, strings, maps, sets. NOT objects
//So expand the string here- J, o, n ...
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);
// we can't do is to use this to build a string using a template literal.

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects

//since ES 2018, the spread operator
// actually also works on objects,
// even though objects are not iterables.

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/*
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
/*the reason for that is that when we start a line with a curly brace like this,
then JavaScript expects a code block, all right?
And since we cannot assign anything to a code block,
like we did here with the equal sign,
then we get this error,
unexpected token with the equal there.
So to solve this here,
the trick is to wrap all of this into a parenthesis.
*/
/*
console.log(a, b);

// // Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});



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
