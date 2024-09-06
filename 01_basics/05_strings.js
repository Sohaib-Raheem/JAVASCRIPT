const name =" sohaib"
const repoCount = 50
console.log(name + repoCount + "javascript");

console.log(` hello myself ${name} and my repo count is ${repoCount}`);

const gameName = new String('sohaib-FC-jr');

 console.log(gameName[0]); // access to key value of string
 console.log(gameName.__proto__); // access to prototype

 console.log(gameName.length); // find length of string
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('b'));

 const newString = gameName.substring(0,5)
 console.log(newString);

 const anotherString = gameName.slice(0,5)
 console.log(anotherString);

const newStringOne = "    sohaib     "
 console.log(newStringOne)
 console.log(newStringOne.trim());


const url ="https://sohaib.com/sohaib%20raheem"
console.log(url.replace('%20','_'));

console.log(url.includes('sohaib'));
console.log(url.includes('shani'));

console.log(gameName.split('-'));
