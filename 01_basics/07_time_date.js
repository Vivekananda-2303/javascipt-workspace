
let myDate = new Date();
console.log(typeof myDate); // "object"
- Date instances in JavaScript are always objects

//A. Passing Numbers (year, monthIndex, date, ...)

let myCreatedDate = new Date(2023, 0, 23); // Month 0 = January!
console.log(myCreatedDate.toDateString()); // "Mon Jan 23 2023"


let mylocal = new Date(2026, 7, 8, 5, 3); // Month 7 = August! (Hours: 5, Minutes: 3)
//- Months start at 0: 0 = Jan, 1 = Feb, ..., 11 = Dec.

//B. Passing a String ("YYYY-MM-DD" or "MM-DD-YYYY")

let myDate1 = new Date("01-14-2003"); // "01" = January!
console.log(myDate1.toLocaleString()); // "1/14/2003, 12:00:00 AM"
//- In string formats, months start at 01 (January is 01).
//4. Timestamps & Milliseconds to Seconds

let myTimeStamp = Date.now(); // Current timestamp in milliseconds (since Jan 1, 1970)
console.log(myCreatedDate.getTime()); // Specific date's timestamp in milliseconds

// Converting Milliseconds to Seconds (Common Interview Question):
 console.log(Math.floor(Date.now() / 1000));
// - Date.now() gives milliseconds.
// - Dividing by 1000 gives seconds with decimals.
// - Math.floor() removes the decimal part to get exact whole seconds.
/*

Date Methods Quick Reference

┌────────────────────┬──────────────────────────┬───────────────────────────────────┐
│       Method       │       Return Value       │               Notes               │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ Date.now()         │ Milliseconds (number)    │ Current Unix epoch time           │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getTime()     │ Milliseconds (number)    │ Epoch time for that date instance │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getFullYear() │ 4-digit Year (e.g. 2026) │ Avoid deprecated getYear()        │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getMonth()    │ 0 to 11                  │ Always add +1 for human display   │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getDate()     │ 1 to 31                  │ Day of the month                  │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getDay()      │ 0 to 6                   │ 0 = Sunday, 6 = Saturday          │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getHours()    │ 0 to 23                  │ Hour of the day                   │
├────────────────────┼──────────────────────────┼───────────────────────────────────┤
│ date.getMinutes()  │ 0 to 59                  │ Minutes                           │
└────────────────────┴──────────────────────────┴───────────────────────────────────┘

*/




    
