//for

// for(let i=0;i<10;i++){
// const element =i;
// if(element%5==5){
//     // console.log(" 5 is the best number")
// }
// // console.log(element)
// }
//table print 
// for(let i=1;i<=10;i++){
//     console.log(`Outer loop value : ${i}`);
//     for(let j=1;j<=10;j++){
// // backits
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let myArray=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}
//break and continue;
for(let i=1;i<=20;i++){
    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i:${i}`);

}