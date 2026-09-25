
console.log("2" > 1);   // true  → "2" is converted to number 2, and 2 > 1
console.log("02" > 1);  // true  → "02" is converted to number 2, and 2 > 1
// When comparing a string with a number using >, <, >=, <=, JavaScript converts the string to a number first.
console.log(null > 0);   // false  → null converts to 0, and 0 > 0 is false
console.log(null == 0);  // false  → special rule: null == only null or undefined
console.log(null >= 0);  // true   → null converts to 0, and 0 >= 0 is true

/*
┌──────────────┬─────────────────────────────────────────────────────────────────────┐
│   Operator   │                         How null is treated                         │
├──────────────┼─────────────────────────────────────────────────────────────────────┤
│ >, <, >=, <= │ null is converted to the number 0                                   │
├──────────────┼─────────────────────────────────────────────────────────────────────┤
│ ==           │ null is only equal to null and undefined — it is NOT converted to 0 │
└──────────────┴─────────────────────────────────────────────────────────────────────┘

*/
// the reason is that an equality check== and camparisions ><>=<= work differently
// camparisions convert null to a number , treating it as 0.
//thats why null>=0 is true , null>0 is false

console.log(undefined == 0);  // false → undefined == only null or undefined
console.log(undefined >= 0);  // false → undefined converts to NaN, NaN >= 0 is false
console.log(undefined > 0);   // false → undefined converts to NaN, NaN > 0 is false
//=== campare datatypes also......
console.log("2"===2);//false
//=== checks both value AND type



