const marvel_heros = [ "thor", "ironman" ,"spiderman"]
const dc_heros = [ "superman" , "flash" , "batman"]

 marvel_heros.push(dc_heros)  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 console.log(marvel_heros); // it took second array as an element

 const allHeros = marvel_heros.concat(dc_heros) // it combines arrays and give u a new array
 console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros] // it also combine arrays like concat
console.log(all_new_heros);     // but their is no limitation . u can combine more than 2 arrays

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5] ] ]

const real_another_array = another_array.flat(Infinity) // output=>[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));  // output => false
console.log(Array.from("Hitesh"));     // output => [ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:"sohaib"})); // it will give u empty array if it could'nt cahnge

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output => [ 100, 200, 300 ]



