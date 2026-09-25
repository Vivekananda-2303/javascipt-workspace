
const arr=[1,2,3,4,5];//array literal
console.log(typeof arr);
const arr1=["pedri","yamal","rodri"];//string array
const arr2= new Array(2,3,4,5,56);//array constructor

arr.push(55);
arr.push(46);
arr.push(87);
arr.pop();
console.log(arr.includes(5));
console.log(arr.indexOf(3));
//join()-- convert array to String 
 const arr3= arr.join('-');
 console.log(arr2);
  
 let arr4=[10,20,30,40,50];
 let result=arr4.slice(1,4);
 console.log(result);
 console.log(arr4);
 let  arr5=[20,30,40,50,60];
 //delete
 arr5.splice(1,2);
 console.log(arr5)
 //adding
 arr5.splice(1,0,30,40);
 console.log(arr5);
 arr5.splice(1,2,99,100);
 console.log(arr5);
 /*
▎ "slice() returns a shallow copy without modifying the original array. splice() modifies the array in place by removing, adding, or replacing elements, and returns the removed items."
┌───────────────────┬───────────────────────────────┬──────────────────────────────────────────────┐
│      Feature      │       slice(start, end)       │     splice(start, deleteCount, ...items)     │
├───────────────────┼───────────────────────────────┼──────────────────────────────────────────────┤
│ Mutates original? │ ❌ No                         │ ✅ Yes                                       │
├───────────────────┼───────────────────────────────┼──────────────────────────────────────────────┤
│ Purpose           │ Extract a copy                │ Add/remove/replace elements                  │
├───────────────────┼───────────────────────────────┼──────────────────────────────────────────────┤
│ Returns           │ New array (copy)              │ Array of removed elements                    │
├───────────────────┼───────────────────────────────┼──────────────────────────────────────────────┤
│ Parameters        │ start, end (end not included) │ start, deleteCount, optional items to insert │
├───────────────────┼───────────────────────────────┼──────────────────────────────────────────────┤
│ Use case          │ Safe copying/subsetting       │ In-place array modification                  │
└───────────────────┴───────────────────────────────┴──────────────────────────────────────────────┘

*/





