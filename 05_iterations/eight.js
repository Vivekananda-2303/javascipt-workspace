const mynums=[1,2,3,4,5,6,7,8,9,10];
// mytotal= mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`);
//     return acc+currval;
// },0)
// console.log(mytotal)
// console.log(mytotal)
// const myTotal=mynums.reduce((acc,currval)=>acc+currval,0);
// console.log(myTotal);
const shoppingCart=[
    {
        itemName:"laptop",
        price:50000
    
    },
    {   
        itemName:"mobile",
        price:20000
       
    },
    {
        itemName:"headphones",
        price:2000
       
    }
]
  const priceTotal=shoppingCart.reduce((acc,item)=>acc+item.price,0);
  console.log(priceTotal)
