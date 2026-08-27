const userEmail = [];

// if(userEmail){
//     console.log("Got user Email");
// } else {
//     console.log("don't have user email");
// }

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}
//falsy values;
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy value
// "0",'false'," ",[],{},function(){}(empty function)