//for each
const coding=["html","css","javascript","react","nodejs"];
// coding.forEach  (function name(item){
//     console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding .forEach(printMe)
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const mycoding =[
    {
        language:"javaScript",
        framework:"react"
    },
    {
        language:"java",
        framework:"spring"
    },
    {
        language:"python",
        framework:"django"
    }

]
mycoding.forEach((item)=>{
    console.log(item.language, "->",item.framework)
})