// ! let and const
// if a variable is never going to change once assigned a value, use const!
// const name = "Max";
// ! this throws TypeError: Assignment to constant variable.
// name = 6
// let age = 22;
// let hasHobbies = true;
// let lovesDevelopment = hasHobbies ? false : true;


// ! functions
function summarizeUser(userName, userAge, userHasHobbies, userLovesDevelopment) {
  return `Name is ${userName}, age is ${userAge}, user has hobbies: ${userHasHobbies}, user loves development: ${userLovesDevelopment}`;
}
// console.log(summarizeUser(name, age, hasHobbies, lovesDevelopment));


// ! objects, properties, methods, and arrow functions
const person = {
  name: 'Louie',
  age: 22,
  hasHobbies: true,
  lovesDevelopment: this.hasHobbies ? false : true,

  // ! using an arrow function, this.name = undefined
  // * arrow functions don't bind their own scope, but inherit it from the parent one, which in this case is the global object.
  // since the name variable is not defined on the global object, js just returns undefined!
  greetArrowFunc: () => { console.log(`Hi, my name is ${this.name}`); },

  // * using a regular anonymous function, this.name = Louie
  // * 'this' is binded by the greet method to be the object that called it!
  // unfortunately this syntax is a pain in the ass to write sometimes
  // greet: function() { console.log(`Hi, my name is ${this.name}`); },

  // * this is the most common and modern way to define methods in a js class/object
  // * it follows the behavior of old school js functions: eg, 'this' is binded to the object that called the function
  greet() { console.log(`Hi, my name is ${this.name}`); }

};
// person.greet();
// person.greetArrowFunc();

// ! basic built in array methods: .map() and .forEach()
let hobbies = ['Jiu Jitsu', 'Production', 'Math'];

// * .map() maps the array on to a *new copy of the array*, leaving the array that 
// * called on it intact - with no option to modify the array that called on it
newHobbies = hobbies.map(hobby => `newHobbyName: ${hobby} is really fun!`);
console.log(hobbies);
console.log(newHobbies);

// * forEach actually allows to modify the array it was called on
hobbies.forEach((item, index, arr) => { index === 0 ? arr[index] = index : console.log(arr[index] = `${item}... again!`); });
console.log(hobbies);

// ! rest and spread operators
// ! old way of copying arrays - not very consistent with the rest of js
let copiedArrayUsingOldSyntax = hobbies.slice();

// * SPREAD SYNTAX!
let copiedArray = [...hobbies];
let copiedPerson = {...person};
console.log(copiedArray);
console.log(copiedPerson);

// * REST SYNTAX!
// ! if you call this with more than three arguments it will only put the first three in the array!
const oldItemsToArray = (arg1, arg2, arg3) => {
  return [arg1, arg2, arg3];
};
console.log(oldItemsToArray(1, 2, 3, 4, 5));

// ! this function will work with as many arguments as you can throw at it!
const itemsToArray = (...arguments) => {
  // * to js, arguments is already an array so no need to spread again!
  return arguments;
};
console.log(itemsToArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10000, 12468563413502324, {key: 'value'}, "string here", [1, 2, 3]));

// * DESTRUCTURING
// pulls name and age property off of the person object and assigns them to the variables 'name' and 'age'
let { name, age } = person;
console.log(`${name}, ${age}`);

// pulls items out of array and assigns them to the variables in order
let [index0, index1] = hobbies;
console.log(index0, index1);

// ! ASYNC AND PROMISES


// async example
const fetchData = callback => {
  setTimeout(() => {
    console.log({username: "louie", token: "1qweo2o34tgeqrv-149t2350h346h45g234g245g35.346u647i568i.45676j647jn468"});
    callback();
  }, 4000);
};

// set timeout takes in a function to execute, and a time to wait until executing the function in ms. (1000ms is 1 seconds)
setTimeout(() => { 
  console.log('Timer is done!');
  fetchData(() => console.log("This is the callback function!"));
 }, 1000);
console.log("This will print before the timer is done!");
console.log("This will also print before the timer is done!");



