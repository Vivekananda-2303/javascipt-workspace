//Immediately Invoked Function expressions(iife)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
    
}());
 //explicitly  end with semicolom

(  (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})("vivek")
//()()An IIFE is a function that runs immediately after it is defined.
//reason =  Avoid polluting global scope(),Prevents variables from leaking into global scope,
/*2.  Data Encapsulation (Private Variables)
Variables inside IIFE are private
Useful for hiding sensitive logic */
 //while writing 2 iife together    mention semicolon between them