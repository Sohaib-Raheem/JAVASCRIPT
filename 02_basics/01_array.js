//     ARRAY

const myArr = [0,1,2,3,4,5]
const myFootballers = ["NeymarJr","Messi","Ronaldo"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[5]);

// Array Methods

myArr.push(6) // method to add a new value in array
myArr.push(7)
myArr.pop()  // method to remove last element of array

myArr.unshift(4) // method to add new elements in the starting of array
myArr.shift()    // method to remove first element of array

console.log(myArr.includes(6));   // output=> false
console.log(myArr.includes(3));   // output=> true

console.log(myArr.indexOf(9)); // any value which is not in array so output => -1
console.log(myArr.indexOf(1)); // output => 1

const newArr = myArr.join() // it will convert all the values from an array to string, separated by coma

 console.log(myArr);  // output => [ 0, 1, 2, 3, 4, 5 ]
 console.log(newArr)  // output => 0,1,2,3,4,5

//  SLICE , SPLICE 

console.log ("A" , myArr);
const myn1 = myArr.slice(1,3)  // it will not include the last range

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3)  // it will include the last range and manipulate the original array
console.log(myn2);              // remove all elements which u splice





