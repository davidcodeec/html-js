/* 

Data tyoer:

String : För texter


*/

/* 
Variable Deklaration änvands av camelCase:
Which means first word starts with a lowercase while second word starts with a uppercase:
E.g: firstName, LastName, phoneNumber.


To declare a variable locally you use let e.g Recommended to you.
We can declare string variable in three ways:

let firstName = "David"

let firstName = 'David'

let firstName = `David`  (Shift + ´)

Differences between the apostrophe and how to use it e.g:

var sentence = "Hi, i am David och I live in... I am even the best in the world"

*/


var sentence = "Hi, i am David och I live in... I am even the \"best in the world\"."
var sentence = "Hi, i am David och I live in... I am even the 'best in the world\'."
var sentence = 'Hi, i am David och I live in... I am even the "best in the world".'


let firstName = "David"
let streetName = ".."
let text = '"I am even the "best in the world".'

var sentence = 'Hi, i am '+ firstName +' and I live in'+streetName+' '+text+''

/* Another way to write it using placeholders `` */

var sentence = `Hi, i am ${firstName} och I live in ${streetName} ${text}`

console.log(sentence)


/* Example 2 */

let id = 1

var url = 'https://domain.com/api/products?id=1'
var url = 'https://domain.com/api/products?id' + id
var url = `https://domain.com/api/products?id=${id}`

console.log(url)