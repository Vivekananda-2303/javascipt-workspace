const marvel=["thor","Ironman","spiderman"];
const dc=["superman", "flash","batman"]
// marvel.push(dc);
//1.concat
//  const all=marvel.concat(dc);
// console.log(marvel);
// console.log(all);

//.2 spread
const all=[...dc, ...marvel]
console.log(all);
// op=[ 'superman', 'flash', 'batman', 'thor', 'Ironman', 'spiderman' ]
//3.flat

const a=[1,2,3,[3,6,7,[8,4,1],7]];
console.log(a.flat(Infinity));
// op=[
//   1, 2, 3, 3, 6,
//   7, 8, 4, 1, 7
// ]
console.log(Array.isArray("vivek"))
console.log(Array.from("vivek"))
console.log(Array.from({name :"hitesh"}))//interesting
let s1=100
let s2=200
let s3=300
let s4=400
console.log(Array.of(s1,s2,s3,s4));

//Array.from() is used to create a brand-new, real Array out of an array-like object



