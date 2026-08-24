if(true){
    let a=10;
    const b=20;
var c=30;
}
//console.log(a);
// console.log(b);
// console.log(c);

//nested scope
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website);//error
    // two()
}
// one()
//2nd example using if 
if(true){
    const username="vivek"
    if(username=== "vivek"){
        const website="youtube";
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);
 //////////////////////
console.log(addOne(3));

// by declaring this type  function we can access before initialization(housting)
 function addOne(num){
    return num+1;
 }

//  addOne(5)
addTwo(4)
//ReferenceError: Cannot access 'addTwo' before initialization
 const addTwo=function(num){
    return num+2;
 }



