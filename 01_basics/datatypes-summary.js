// Primitive Data Types

// Primitive data types are the most basic data types provided by JavaScript. 
// They are immutable, meaning their values cannot be changed once assigned.
// They are stored directly in the memory location that a variable accesses. 
// The primitive data types in JavaScript include:

// 7 types : string, Number, Boolean, null, Undefined, symbol, BigInt

const score =100
const scoreValue=100.3

const isLoggedIn = false
const temp= null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')
const bigNumber =212121212121212121212121n


// Non-Primitive Data Types

// Non-primitive data types, also known as reference types, are more complex data structures.
// They are mutable, meaning their values can be changed. They are stored as references in memory. 
// The main non-primitive data types in JavaScript are:

// Arrays, Objects, Functions 

const heros = ["shaktiman","naagraj", "doga"];

let myObj={
    name:"sohaib",
    age:20,
}

const myFunction= function(){
    console.log("hello world");
    
}

console.log(typeof myFunction);

/*
 Javascript is a dynamically typed language because datatype will automatically 
 assigned at the time of compilation or code execution
*/ 

/* 
 Return Type of Variables in JavaScript
 
 1) Primitive Datatypes
   Number => number
   string => string
   Boolean => boolean
   Null => object
   Undefined => undefined
   Symbol => symbol
   BigInt => bigint

 2) Non-Primitive Datatypes
    Arrays => Object
    Functions => function 
    PObject => object  
*/

/*************** MEMORY ALLOCATION ******************/
 // STACK ( primitive) , HEAP (non-primitive)

 let firstName="Sohaib"

 let secondName= firstName
 secondName = " raheem "

 console.log(firstName);
 console.log(secondName);
 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne 

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);


