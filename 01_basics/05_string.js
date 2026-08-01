const name= "vivek"
const repocount=50
console.log(name+repocount +"value");
//not recommeded
console.log('hello my name is ${name} and my repo count is ${repoCount}');
const gamename=new String('vivekpujari')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
//upperCasee
console.log(gamename.toUpperCase());
//cahrAt
console.log(gamename.charAt(3));
//IndeOF
console.log(gamename.indexOf('p'));
//subString
const newString=gamename.substring(0,4)
// last value is not included.............
console.log(newString);
//slice
const anotherString=gamename.slice(-8,4)
console.log(anotherString);
const newString1="  vivek   "
console.log(newString1);
console.log(newString.trim());
const url ="https://vivekpujari.com/tamoto%20pujari"
console.log(url.replace('%20','-'))
console.log(url.includes("vivek"));





