const accountId=12343
let accountEmail="viveksp0011@gmail"
var accountPassword="jaipur"
accountCity="jaipur"
//accountId=2// not allowed

accountEmail="vsp0022@gmail"
accountPassword="2323231"
accountCity="bangalore"
let accountState ;

/*
prefer not to use var ,becoz of issue in block scope and functional scope

┌─────────┬──────────┬──────────────┬────────────────────┬──────────────────────────────────────┐
│ Keyword │  Scope   │ Reassignable │      Hoisted       │               Use Case               │
├─────────┼──────────┼──────────────┼────────────────────┼──────────────────────────────────────┤
│ const   │ Block    │ ❌ No        │ No                 │ Default choice (immutable bindings)  │
├─────────┼──────────┼──────────────┼────────────────────┼──────────────────────────────────────┤
│ let     │ Block    │ ✅ Yes       │ No                 │ When reassignment is needed          │
├─────────┼──────────┼──────────────┼────────────────────┼──────────────────────────────────────┤
│ var     │ Function │ ✅ Yes       │ Yes (as undefined) │ Avoid (legacy code only)             │
├─────────┼──────────┼──────────────┼────────────────────┼──────────────────────────────────────┤
│ (none)  │ Global   │ ✅ Yes       │ No                 │ Never use (creates implicit globals) │
└─────────┴──────────┴──────────────┴────────────────────┴──────────────────────────────────────┘
*/

console.table([accountEmail,accountId,accountPassword,accountCity])
