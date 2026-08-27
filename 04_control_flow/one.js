//if
//=== ,!==
const isUserLoggedIn=true;

// if(2==="2"){
//     console.log("executed")
// }

// if(2=="2"){
//     console.log("executed")
// }

//power is not defined
// const score=200;
// if(score >100){
//     const power="fly";
//     console.log(`user power :${power}`);
// }
// console.log(`user power: ${power}`)
// const balance=1000;
// if(balance >500) console.log("test"),console.log("test2");

const userLoogedIn=true;
const debitCart=true;
const loggesInFromGoogle=true;
const loggedInFromEnmail=true;
if(userLoogedIn && debitCart){
    console.log("allow  to buy course");
}
if(loggedInFromEnmail ||loggesInFromGoogle){
    console.log("user logged in");
}
