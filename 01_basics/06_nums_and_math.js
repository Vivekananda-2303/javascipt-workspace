
const score =400
// exclusively define  the number type 
const balance= new Number(100);
console.log(balance);
// converting number to String length 
console.log(balance.toString().length);
// adding decimal zeros, like 100.00
console.log(balance.toFixed(2));
const otherNumber =123.888
//precision
console.log(otherNumber.toPrecision(3));
const hundred=1000000;
//american number system
console.log(hundred.toLocaleString());
//Indian Standard
console.log(hundred.toLocaleString('en-IN'));
//+++++++++++++++++MATH++++++++++++++
console.log(Math.abs(-4));
console.log(Math.round(3.3844));
// ceiling = choosing top value 
console.log(Math.ceil(4.2));
//floor
console.log(Math.floor(4.9));

//Math.max and Math.min
console.log(Math.min(3,5,8,3,76,2,7));
//MAth.random()= range from n0 to 9
console.log(Math.random());
console.log((Math.random()*10)+1);

 // formula for printing random value in given range
const min=10;
const max=20
console.log(Math.floor((Math.random()*(max -min +1) + min)))




