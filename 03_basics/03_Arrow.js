const user={
    username:"hitesh",price:999,

 welcomeMessage:function(){
    console.log(`${this.username},welcome to website`);
    console.log(this);
    
}
}
// user.welcomeMessage
// user.username="sam"
// user.welcomeMessage()
console.log(this)
/*
In a browser, console.log(this) → window object
In Node.js (VS Code), console.log(this) → {} (module.exports)
👉 Reason:
Browser global scope = window
Node wraps code in a module, so this refers to module.exports */
//2


// function chai(){
//     let username="vivek"
//     console.log(this.username);
//     // cant use this in function ,only in Object
    
// }
// chai()


//arrow function
// const  chai=function(){
//     let username="vivek"
//     console.log(this.username);
    
// }
// chai()
const chai =()=>{
    let username="hitesh"
    console.log(this);
}
// chai()

// explicitly return type
// const  addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// implicitly return  type 
// const  addTwo=(num1,num2)=> num1+num2;


// this one for object return 
// const  addTwo=(num1,num2)=>( num1+num2)

// const  addTwo=(num1,num2)=>({username :"vivek"} 

// console.log(addTwo(3,6));
