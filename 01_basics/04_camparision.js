
console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// the reason is that an equality check== and camparisions ><>=<= work differently
// camparisions convert null to a number , treating it as 0.
//thats why null>=0 is true , null>0 is false

console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined>0)
//=== campare datatypes also......
console.log("2"===2);//false




