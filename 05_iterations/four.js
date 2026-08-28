//for in loop
const myobj={
    js:'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple" 
}
for(const key in myobj){
console.log( `${key} shortcut is for ${myobj[key]}`);

}
const programming=["js",'rb','cpp','swift'];
for(const key in programming){
    console.log(programming[key]);
}