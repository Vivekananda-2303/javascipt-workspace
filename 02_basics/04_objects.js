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

const course={
    course:"js in hindi",
    price :"999",
    courseInstuctor: "hitesh"
}
///destructuring of Object;
course.courseInstuctor
const {courseInstuctor:Instructor} = course
const{price:amount }=course
//console.log(courseInstuctor);
//console.log(price);
console.log(Instructor);
console.log(amount )
//pratice
// const user={
//     name:"alien",age:30,role:"admin"
// }
//const name= user.name
//const age =user.age
//const role =user.admin
// const{name,age,role}=user;console.log(name);console.log(age);console.log(role);

// const user1={
//     name :"alex",address:{
//         city:"seattle",
//         zipCode:"54848"
//     }
// }
// const {address : {city,zipCode}}= user;
// console.log(city)
const user={name :"alex",age:30,role :"admin",active:true}
const{name,...otherDetails}=user;
console.log(name);
console.log(otherDetails)

//API
//json
// {
//     "name":"vivek",
//     "course" :"javaScript Workspapce"
//     "price":"free"
// }
[
    {},

    {},
    {}
]
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}