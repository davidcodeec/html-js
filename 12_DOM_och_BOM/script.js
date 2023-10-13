/* Manipulera av DOM och BOM 

Different ways av declaring varibles:
camelCase e.g userName  used in Js, C, C++, (C#)
PascalCase e.g BoxOne used in C#, Pascal, VB(Visual Basic)
snake_case e.g box_one used in Python, C, C++
kebab-case e.g box-one CSS

The getElementById() method returns an element with a specified value.

The getElementsByClassName() method returns a collection of elements
with a specified class name(s).

The getElementsByName() method returns a collection of elements with a specified name.

The getElementsByTagName() method returns a collection of all elements 
with a specified tag name.

The querySelector() method returns the first element that matches a CSS selector.

The querySelectorAll() method returns all elements that matches a CSS selector(s).


*/

let boxOne = document.getElementById("box-one")
let boxTwo = document.getElementById("box-two")
let elementById = document.getElementById("box-three")



/* Writes as a plain text */
boxOne.innerText = "<h1>John<h1>"


/* Writes as a html text */
boxOne.innerHTML += "<h1>David<h1>"


/* Writes as a html text */
boxTwo.innerHTML = "<h1>Adam<h1>"

elementById.innerHTML = "<h1>John<h1>"



/* Get elements by ClassName */

let elementsByClassName = document.getElementsByClassName("box-1")

elementsByClassName[0].innerText = "David"
elementsByClassName[1].innerText = "John"


/* Get elements by Name */
let elementsByName = document.getElementsByName("info")

elementsByName[0].innerText = "David"
elementsByName[1].innerText = "John"


/* Get elements by TagName(ElementName) Note: This does for all section on the page*/
 let elementsByTagName = document.getElementsByTagName("section") 

elementsByTagName[0].innerText = "David"
/* elementsByTagName[1].innerText = "Joe" */


/* Looping through elements using for Lopp */
for(let element of elementsByTagName){
    element.innerText = "John"
}
 
/*  Get elements by querySelector() It works for all examples listed above */
let element = document.querySelector("p")

element.innerText = "Test"

/*  Get elements by querySelectorAll(), gets all elements of that name It works for all examples listed above */
let elements = document.querySelectorAll("p")

elements.innerText = "Test"