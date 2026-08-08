let myDate= new Date();
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
let mylocal=new Date(2026,7,8,5,3);
console.log(mylocal.toLocaleString());
//another syntax
let myDate1= new Date("01-14-2003");
console.log(myDate1.toLocaleString());
let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// // convert date to minisec
// console.log(myCreatedDate.getTime());
// convert  a date into sec
console.log(Math.floor(Date.now()/1000))
let date= new Date();
console.log(date.getMonth()+1);
console.log(date.getDate());
//' ${date.getDay()} and the time '
const dayName = date.toLocaleString('default',{
    weekday :"long",
})
console.log(dayName);



