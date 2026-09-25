 /* let score ="vivek"
console.log(typeof score);
console.log(typeof(score));

let valueInNumber =Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33=> 33
//"33abc"=> NaN(not a Number )
//true=>1,false =0;
let isloggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
*/
//operation
1. Basic Arithmetic & Exponentiation

let value = 3;
let negValue = -value;
console.log(negValue); // -3 (negation)
console.log(2 ** 3);   // 8  (2 to the power of 3)

---

//2. String Concatenation & Type Coercion

let str1 = "hello";
let str2 = "vivek";
let str3 = str1 + str2;
console.log(str3); // "hellovivek"

let str3 = str1 + str2;
console.log(str3); // "hellovivek"

//JavaScript evaluates expressions from left to right with the + operator:
console.log("1" + 2);     // "12"  -> string + number = string
console.log(1 + "2");     // "12"  -> number + string = string
console.log("1" + 2 + 2); // "122" -> ("1" + 2) = "12", then ("12" + 2) = "122"
console.log(1 + 2 + "2"); // "32"  -> (1 + 2) = 3, then (3 + "2") = "32"

---

//3. Unary Plus Operator (Type Conversion)

The unary + attempts to convert its operand into a number:
console.log(+true); // 1 (true converts to 1)
console.log(+"");   // 0 (empty string converts to 0)

---

//4. Chained Assignment

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // All variables are assigned the value 4

---

//5. Postfix vs Prefix Increment

//- Postfix (x++): Evaluates/returns the value first, then increments the variable.
let x = 3;
const y = x++; // y gets 3, then x becomes 4
console.log(x); // 4
console.log(y); // 3

//- Prefix (++a): Increments the variable first, then evaluates/returns the new value.
let a = 3;
const b = ++a; // a becomes 4, then b gets 4
console.log(a); // 4
console.log(b); // 4
//link to  study https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment








