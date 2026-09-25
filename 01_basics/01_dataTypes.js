"use strict";//treat all js code as neweer version

//alert(3+3); we are using nodejs ,not browser 
//2. Runtime Environment: Node.js vs Browser

// alert(3 + 3);
//- alert() is part of the Web API provided by browsers (window.alert).
//- In Node.js, window does not exist, so calling alert() will throw a ReferenceError: alert is not defined. Instead, we use console.log().

/*
3. JavaScript Data Types Summary

┌───────────┬────────────────────────────────────────────────────────────┬───────────────────────┐ 
│   Type    │                        Description                         │        Example        │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ number    │ Numeric values (integers & floats up to $2^{53} - 1$)      │ 23, 3.14              │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ bigint    │ For integers larger than $2^{53} - 1$                      │ 12345678901234567890n │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ string    │ Textual data                                               │ "vivek", 'hello'      │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ boolean   │ Logical true/false                                         │ true, false           │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ null      │ Intentional absence of any object value (standalone value) │ let state = null;     │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ undefined │ Variable has been declared but not yet assigned a value    │ let x;                │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ symbol    │ Unique and immutable identifier                            │ Symbol("id")          │
├───────────┼────────────────────────────────────────────────────────────┼───────────────────────┤
│ object    │ Complex data structure (arrays, functions, objects)        │ { key: "value" }      │

*/

console.log(3+3)
 console.log("vivek")
 let name ="vivek"
 let age=23
 let isloggedIn=false

 // number =>2 to power 53
 //bigint
 //String =>""
//boolean=> false, true 
//null=> standalone value 
// undefined =>
//symbol=> unique


//object=
//4. The typeof Results & The Famous null Quirk

console.log(typeof age);        // "number"
console.log(typeof "vivek");    // "string"
console.log(typeof undefined);  // "undefined"


/*
⚠️ Crucial Interview Point:
console.log(typeof null); // "object"
- Even though null is a primitive data type, typeof null returns "object".
- This is a well-known legacy bug in JavaScript from its first implementation in 1995 (where type tags for objects were 000 and null was represented as a null pointer with 0x00 address). It was kept to avoid breaking existing web code.
*/


