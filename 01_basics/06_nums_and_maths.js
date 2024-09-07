/******************** NUMBERS **************/

const score = 400
console.log(score);   // output => 400

const balance = new Number(100);
console.log(balance);   // output =>[Number : 100]

console.log(balance.toString().length)   // output => 3
console.log(balance.toFixed(2));   // output => 100.00

const otherNumber = 123.67549
console.log(otherNumber.toPrecision(4));  // output => 123.7

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // output => 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // output => 10,00,000

/***************** MATHS ****************/

console.log(Math);
console.log(Math.abs(-4));  // output => 4
console.log(Math.round(4.6));  // output => 5
console.log(Math.ceil(4.2));    // output => 5
console.log(Math.floor(4.9));   // output => 4
console.log(Math.min(3,4,6,8));   // output => 3
console.log(Math.max(3,6,8,4));   // output => 8

console.log(Math.random());     // ouput => 0.2898756850428219
console.log( (Math.random()*10) +1);     // ouput =>7.189897141168538
console.log(Math.floor (Math.random()*10)+1);     // ouput => 8

const min =10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min); // output => random values => 10

// Math.random always give value B/W 0 and 1 , and values can be 0.1 , 0.2 , 0.3

// line 31 => we multiply Math.random in order to shift values and Math.floor 
// will give a single number could be zero . we do +1 to get a number greater trhan zero