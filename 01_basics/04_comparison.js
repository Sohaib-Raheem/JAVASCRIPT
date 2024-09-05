// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1); Output => true
// console.log("02" > 1); Output => true

// console.log( null > 0); Output => false
// console.log( null == 0); Output => false
// console.log( null >= 0); Output => true

// the reason is that an equality check == and comparisons > < >= <= work differently
//Comparisons convert null to a number, treating it as 0.
// thats why (3) null >=0 is true and (1) null > 0 is false;

// console.log( undefined == 0);
// console.log( undefined > 0);
// console.log( undefined < 0);
// console.log( undefined <= 0);
// console.log( undefined >= 0);

// output of all above comparisons is FALSE

// strict check ===
console.log("2"=== 2); //output false


