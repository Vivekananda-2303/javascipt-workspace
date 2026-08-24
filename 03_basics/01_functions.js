function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("v");
    console.log("e");
    console.log("k");

}
function addTwoNumber(num1, num2){
    console.log(num1+num2);
}
function addTwoNumber(num1, num2){
//   let result=num1+num2;
//   return result;
return num1+num2;
}
function loginUserMessage(username="sam")
{
    if( ! username){
        console.log("Please enter ur name ");
        return;
    }
        return `${username} just logged in`
}
// addTwoNumber(3,"a")
// addTwoNumber(3,null);
// const result=addTwoNumber(3,5);
// console.log("Result :",result)
// console.log(loginUserMessage("Vivek"));
// console.log(loginUserMessage());
  
//shoping cart problem solution
//it is solved by Rest operator or spread operator (...num) return as array[]
function calculateCarPrice(...num1){
    return num1;
}
function calculateCarPrice(val1,val2, ...num1){
    return num1;
}
console.log(calculateCarPrice(200,300,400,500,600,700,800,900))
// console.log(calculateCarPrice(200,300,400,500,600,700,800,900))// output =[
//   200, 300, 400,
//   500, 600, 700,
//   800, 900
// ]

 //passing Object into  function parameter
const user={
    username:"vivek",age:23, gender:'M'
}
function handleObject(anyobbject){
    console.log(`username is ${anyobbject.username} and age ${anyobbject.age}`);
    
}
// handleObject(user);
handleObject({
    username:"sam",age :23
})
const myNewArray=[200,400,500,600];
function returnValue(getArray){
    return getArray[1];
}
console.log(returnValue(myNewArray));
