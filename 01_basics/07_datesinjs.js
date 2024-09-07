// dates

let myDate = new Date();
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);*/

//let myCreateDate = new Date(2004,4,16)
//console.log(myCreateDate.toDateString());  // output=> sun may 16 2004

let myCreateDate = new Date(2004,4,16,6,27)  // output => 5/16/2004  6:27:AM
// let myCreateDate = new Date("2004-5-16")   // output => 5/16/2004  12:00:00
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default' ,{
    weekday: "long"
}))






