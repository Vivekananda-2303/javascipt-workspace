//1.primitive

//7 types:String,number ,boolean,null,undefined,BigInt

const score=100
const scorevalue =100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
// const bigNumber=345347577744n


// reference(Non-primitive)


//array,Objects,functions
const heros=["naruto","itachi","sasuke"]//object type

let myobj={
    name :"vivek",
    age:22,
}

 const myfunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);//undefined
console.log(typeof outsideTemp);//object
console.log(typeof scorevalue);//number
console.log(typeof myfunction);//function
console.log(typeof heros);//object

