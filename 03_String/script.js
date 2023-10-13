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

slice(start, end)
substring(start, end)
substr(start, length)
concat() joins two or more strings:


toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
The shift() method removes the first array element and "shifts" all other elements to a lower index.
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
The concat() method creates a new array by merging (concatenating) existing arrays:
The sort() method sorts an array alphabetically:


Differences between the apostrophe and how to use it e.g:

var sentence = "Hi, i am David och I live in... I am even the best in the world"

Below are examples....

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

let category = "computers"

let version = "v1"

var url = 'https://domain.com/api/products?id=1'
var url = 'https://domain.com/api/products?id' + id
var url = `https://domain.com/api/products?id=${id}`

console.log(url)


var urlcat = 'https://domain.com/api/products?id=1&category=computers'
var urlcat = 'https://domain.com/api/products?id' + id + '&category' + category
var urlcat = `https://domain.com/api/products?id=${id}&${category}`

console.log(urlcat)


var urlver = 'https://domain.com/api/v1/products?id=1&category=computers'
var urlver = 'https://domain.com/api/'+ version +'/products?id' + id + '&category' + category
var urlver = `https://domain.com/api/${version}/products?id=${id}&${category}`

console.log(urlver)


/* Note declared firstname without let because it was already declared earlier*/

firstName = "David"
let LastName = "John"
var email = `${firstName}.${LastName}@domain.com`

/* Converts to Uppercase */
email = email.toLocaleUpperCase()
/* Converts to Lowercase */
email = email.toLocaleLowerCase()

/* .trim() removes spacing only from the beginning and the end */
email.trim()

/* .lenght counts the number of text */
let length = email.length;

console.log(length)

console.log(email)


/* .split() is used to separate text into different arrays, We can specify where to stop the split e.g ;*/
/* This can also be used in spliting Connextion string for example.... You can split a word from a sentence and 
later split it again
*/

var data =  "David;John;David.John@domain.com;Address"
const user = data.split(";")

console.log(user)

var greeting = `Welcome... ${user[0]} ${user[1]}`

console.log(greeting)

/* Spliting more than one at the same time */
const userEmailspl = data.split(";")[2].split("@")[0].split(".")[0].toLocaleLowerCase()

console.log(userEmailspl)

