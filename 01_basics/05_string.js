const name= "vivek"
const repocount=50
console.log(name+repocount +"value");
//not recommeded
console.log('hello my name is ${name} and my repo count is ${repoCount}');
const gamename=new String('vivekpujari')
console.log(gamename[0]);        // "v" — access character by index
console.log(gamename.__proto__); // {} — the String prototype object
console.log(gamename.length);    // 11 — number of characters
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
/*
String Methods Cheat Sheet

┌──────────────────┬──────────────────────────────────────────────┬──────────────────────────┐
│      Method      │                   Purpose                    │         Returns          │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ charAt(i)        │ Character at index                           │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ indexOf(str)     │ First position of substring                  │ number (-1 if not found) │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ toUpperCase()    │ Convert to uppercase                         │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ toLowerCase()    │ Convert to lowercase                         │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ substring(s, e)  │ Extract between indices (no negatives)       │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ slice(s, e)      │ Extract between indices (supports negatives) │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ trim()           │ Remove leading/trailing whitespace           │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ replace(a, b)    │ Replace first match                          │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ replaceAll(a, b) │ Replace all matches                          │ string                   │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ includes(str)    │ Check if contains substring                  │ boolean                  │
├──────────────────┼──────────────────────────────────────────────┼──────────────────────────┤
│ split(sep)       │ Split into array                             │ array                    │
└──────────────────┴──────────────────────────────────────────────┴──────────────────────────┘

*/





