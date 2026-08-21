// object literals`
// Question= create a new symbol and add 
const mySym=Symbol("key1")
const jsuser = {
    name: "vivek pujari",
    //to use symbol use square backets,
    [mySym]:"myKey1",
    age: 23,
    location: "bangalore",
    lastLogged: ["monday", "tuesday"]
};
console.log(jsuser.location);
// FIXED: Added quotes around "name" to make it a string
console.log(jsuser["name"]); 
console.log(jsuser["location"]);
console.log(jsuser[mySym]);
jsuser.location ="kalburgi"
console.log(jsuser["location"]);
//freeze the object  values
//Object.freeze(jsuser);
jsuser.location ="Mysore"
console.log(jsuser);
//functions
jsuser.greeting=function(){
    console.log("Hello js user")
}
jsuser.greeting=function(){
    console.log(`Hello js user,${this.name}`)
}
console.log(jsuser.greeting )// op = undefined
console.log(jsuser.greeting ())


