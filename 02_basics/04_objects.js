       //singleton,constructor
       const tinderUser= new Object()///this is sinigleton object
       const tinderu={}//non singleton object
       tinderUser.id="123abc";
       tinderUser.name="sam";
       tinderUser.isLoggedIn=false
       //console.log(tinderUser)
       const regularUser={
        email:"sam@gmail.com",
        fullname:{
            firstname:"hitesh",
            lastname:"choudary"
        }
       }
       //console.log(regularUser.fullname.firstname);
       //console.log(regularUser.fullname.lastname);
//combining the   objects
 const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}
const obj4={7:"g",8:"h"}
//const obj3={obj1,obj2}
//const obj5=Object.assign({},obj1,obj2,obj3,obj4)
//joining by spread
const obj5={...obj1,...obj2,...obj3,...obj4}
//console.log(obj5)
//Object.assign(target, ...sources) copies all properties from the source objects into the target object.
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// boolean output

