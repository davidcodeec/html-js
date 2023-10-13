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

To change the style of an HTML element, use this syntax: document.getElementById(id).style.property = new style


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


/* To change the style of an HTML element using javascript, use this syntax: */
const elementStyling = document.querySelector("#box-four")

elementStyling.style.backgroundColor = "blue"
elementStyling.style.padding = "25px"


/* To change the style of an HTML element using javascript querySelectorAll, use this syntax:
This case all styling will be applied to all div with box-2.
*/
const elementStylingAll = document.querySelectorAll(".box-2")

elementStylingAll.forEach(elementstyle =>{
    elementstyle.style.backgroundColor = "blue"
    elementstyle.style.padding = "15px"
    elementstyle.style.margin = "10px"
})

/* Adding Css class into Javascript */
const elementwithClassStyling1 = document.querySelector("#box-seven")
const elementwithClassStyling2 = document.querySelector("#box-eight")

elementwithClassStyling1.classList.add('active')
elementwithClassStyling2.classList.add('inactive')

/* Adding Css class into Javascript Function ..Same as above but using a function*/

function toggleActiveState(elementName, state){
    const elementwithClassStyling3 = document.querySelector(elementName)
    if(state){
        elementwithClassStyling3.classList.add('active')
        elementwithClassStyling3.classList.remove('inactive')
    }
         
    else {
         elementwithClassStyling3.classList.add('inactive')
         elementwithClassStyling3.classList.remove('active')   
    } 
}

toggleActiveState('#box-nine',false)
toggleActiveState('#box-ten',true)


/* Adding Css class into Javascript Function and state ..Same as above but using a function*/

function changeState(elementName, state){
    const elementwithClassStyling4 = document.querySelector(elementName)
    const status = elementwithClassStyling4.querySelector(".status")

    if(state){
        elementwithClassStyling4.classList.add('active')
        elementwithClassStyling4.classList.remove('inactive')
        status.innerText = "Aktiv"
    }
         
    else {
         elementwithClassStyling4.classList.add('inactive')
         elementwithClassStyling4.classList.remove('active') 
         status.innerText = "InAktiv"  
    } 
}

changeState('#box-eleven',true)
changeState('#box-twelve',false)


/*  Or Same as above but using class name*/

function changeState(elementName, state){
    const elementwithClassStyling4 = document.querySelector(elementName)
    const name = document.querySelector('.name')
    const status = elementwithClassStyling4.querySelector(".status")

    if(state){
        elementwithClassStyling4.classList.add('active')
        elementwithClassStyling4.classList.remove('inactive')
        status.innerText = `${name.innerText} is Aktiv`
    }
         
    else {
         elementwithClassStyling4.classList.add('inactive')
         elementwithClassStyling4.classList.remove('active') 
         status.innerText = `${name.innerText} is InAktiv` 
    } 
}

changeState('#box-eleven',true)
changeState('#box-twelve',false)



/* Using objects in Javascript to Print data on DOM or Screen*/

const section = document.querySelector('section')

const users = [
    {
        firstName :  "David",
        lastName :  "John",
        isActive :  false

    },

    {
        firstName :  "Tommy",
        lastName :  "John",
        isActive :  true

    },

    {
        firstName :  "Joakim",
        lastName :  "John",
        isActive :  true

    }

]


/* Using function with innerText to print to DOm working*/
/* for (let user of users){
    console.log(`${user.firstName} ${user.lastName}`)
    section.innerText += `${user.firstName} ${user.lastName}`
} */


/* Using function with innerHTML to print to DOm working*/
/* for (let user1 of users){

    section.innerHTML += 

    `<div>
        <p>${user1.firstName} ${user1.lastName}</p>
        <p>${user1.isActive}</p>
    </div>
    `
}
 */



/* Using function with if statment and innerHTML to print to DOm
You can also adjust the css for the div.
*/
/* for (let user of users){

    if (user.isActive){
        section.innerHTML += 

    `<div class="active">
        <p>${user.firstName} ${user.lastName}</p>
        <p>${user.isActive}</p>
    </div>
    `
    }else {

        section.innerHTML += 

    `<div class="inactive">
        <p>${user.firstName} ${user.lastName}</p>
        <p>${user.isActive}</p>
    </div>
    `
    }

}  
 */

 /* Another way to write if for the code above */

/*  for (let user of users){

    section.innerHTML += 

 `<div class="${user.isActive ? "active" : "inactive"}">
     <p>${user.firstName} ${user.lastName}</p>
     <p>${user.isActive}</p>
     
 </div>
 `

}   */


/* Using Javascript Event to collect data from users declared above */
 const button = document.querySelector("#addBtn")

 addBtn.addEventListener("click", (event) => {

    /* This emptys the page after every click instead of repeating the code */
    section.innerHTML = ""


    for (let user of users){

        section.innerHTML += 
    
     `<div class="${user.isActive ? "active" : "inactive"}">
         <p>${user.firstName} ${user.lastName}</p>
         <p>${user.isActive}</p>
         
     </div>
     `

    }    

 })


 const clearBtn = document.querySelector("#clearBtn")
 clearBtn.addEventListener("click", (event) => {
    
     /* This emptys the page after every click instead of repeating the code */
     section.innerHTML = ""

 })




 /* Using the onclick with a function two ways of writing..Same as above but using onclick*/

 const clearUsers = () => {
    section.innerHTML = ""
 }


 function showList(){

    /* Same as  section.innerHTML = "" */
    clearUsers()

    for (let user of users){

        section.innerHTML += 
    
     `<div class="${user.isActive ? "active" : "inactive"}">
         <p>${user.firstName} ${user.lastName}</p>
         <p>${user.isActive}</p>
         
     </div>
     `

    }    
 }
 
 
 



