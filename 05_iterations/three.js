//for of
// ["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5];
for(const num of arr){
    console.log(num);
}
const greeting = "Hello World";
for(const greet of greeting ){
    console.log(`Each char is ${greet}`);
}
//Maps
const map= new Map();
map.set("karnataka","Bangalore");
map.set("Maharashtra","Mumbai");
map.set("Tamil Nadu","Chennai");    
// console.log(map);
for(const[key,value] of map){
    console.log(key,'->',value)
}
const myObj={
    'game':'football',
    'game2':'cricket',
    'game3':'hockey'
}

for(const[key,value] of myObj){
    console.log(key,'->',value)
}
//TypeError: myObj is not iterable