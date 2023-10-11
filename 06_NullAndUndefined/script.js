/* 

Data tyoer:

Null : Att symbolisera att någonting är inte någonting alls eller tomt
Undefined: Att någonting är inte definerad alls. Inte ens som null.

let user = null 

let user = undefined

*/

/* variable declared without a value is undefined */
let user

/* Variables declared as null or with brackets can also be an object */
let member = null
let name = {}

console.log(user)
console.log(member)
console.log(name)

/* Typeof is used to find out what type of datatype it is */
console.log(typeof(user))
console.log(typeof(member))
console.log(typeof(name))