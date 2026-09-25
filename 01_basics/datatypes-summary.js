//1.primitive

//7 types:String,number ,boolean,null,undefined,BigInt
/*
1. Primitive Data Types (7 types)

Primitives are immutable values stored directly in the stack. Changes create new values rather than modifying the original.

┌───────────┬───────────────┬────────────────────────────────────┐
│   Type    │    Example    │               Notes                │
├───────────┼───────────────┼────────────────────────────────────┤
│ String    │ "hello"       │ Textual data                       │
├───────────┼───────────────┼─────────────────────────────────
│ Number    │ 100, 100.3    │ Both integers and floats           │
├───────────┼───────────────┼─────────────────────────────────
│ Boolean   │ true, false   │ Logical values                     │
├───────────┼───────────────┼─────────────────────────────────
│ null      │ null          │ Intentional absence of value       │
├───────────┼───────────────┼─────────────────────────────────
│ undefined │ let x;        │ Variable declared but not assigned │
├───────────┼───────────────┼─────────────────────────────────
│ BigInt    │ 345347577744n │ Integers larger than $2^{53} - 1$  │
├───────────┼───────────────┼─────────────────────────────────
│ Symbol    │ Symbol('123') │ Unique, immutable identifier       │
└───────────┴───────────────┴─────────────────────────────────

---

Symbol Uniqueness
*/
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId); // false
//- Even with identical descriptions ('123'), every Symbol() call creates a unique value.
//- Symbols are often used as unique object keys to avoid name c

---

//BigInt

const bigNumber ;
console.log(typeof bigNumber); // undefined (because it's not defined)
// The n suffix denotes a BigInt literal.




2. Reference Types (Non-Primitive)

Reference types store a pointer to memory (heap). Multiple variables can reference the same object.

Arrays

const heros = ["naruto", "itachi", "sasuke"];
console.log(typeof heros); // "object"
// - Arrays are technically objects in JavaScript.
// - To check if something is specifically an array: Array.isArray(heros) → true.


Objects

let myobj = {
    name: "vivek",
    age: 22,
}
console.log(typeof myobj); // "object"
// Standard key-value data structure.


//Functions

const myfunction = function() {
    console.log("hello world");
}
console.log(typeof myfunction); // "function"
// - Functions are technically objects, but typeof returns "function" for convenience.
/*

3. The typeof Operator — Quirks & Interview Traps

┌────────────────────┬─────────────┬────────────────────────────────────────────────────────┐
│     Expression     │   Result    │                           │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof 100.3       │ "number"    │ Both integers and floats  │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof null        │ "object"    │ ⚠️ Legacy bug — null is p │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof undefined   │ "undefined" │ Correct                   │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof myfunction  │ "function"  │ Functions are objects but │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof []          │ "object"    │ Arrays are objects; use A │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof Symbol('x') │ "symbol"    │ Correct                   │
├────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ typeof 123n        │ "bigint"    │ Correct                   │
└────────────────────┴─────────────┴────────────────────────────────────────────────────────┘

---
*/
// The Famous typeof null Bug

console.log(typeof null); //object

/*
Summary Table: Primitive vs Reference

┌───────────────┬──────────────────────────────────────────────────────────┬──────────────────────────┐
│    Aspect     │                        Primitive            ce         │
├───────────────┼──────────────────────────────────────────────────────────┼──────────────────────────┤
│ Storage       │ Stack (direct value)                        reference) │
├───────────────┼──────────────────────────────────────────────────────────┼──────────────────────────┤
│ Mutability    │ Immutable                                              │
├───────────────┼──────────────────────────────────────────────────────────┼──────────────────────────┤
│ Comparison    │ By value                                               │
├───────────────┼──────────────────────────────────────────────────────────┼──────────────────────────┤
│ Types         │ String, Number, Boolean, null, undefined, Sy Function  │
├───────────────┼──────────────────────────────────────────────────────────┼──────────────────────────┤
│ typeof result │ Matches type (except null → "object")       function") │
└───────────────┴──────────────────────────────────────────────────────────┴──────────────────────────┘

*/



// Primitives — compared by value
let a = 5;
let b = 5;
console.log(a === b); // true

// Reference types — compared by reference
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different references)

let arr3 = arr1;
console.log(arr1 === arr3); // true (same reference)

const score=100
const scorevalue =100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
// const bigNumber=345347577744n


// reference(Non-primitive)


//array,Objects,functions
const heros=["naruto","itachi","sasuke"]//object type

let myobj={
    name :"vivek",
    age:22,
}

 const myfunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);//undefined
console.log(typeof outsideTemp);//object
console.log(typeof scorevalue);//number
console.log(typeof myfunction);//function
console.log(typeof heros);//object

