/* 

Uppgift: Skriv en HTML och JavaScript-kod som gör följande:

Skapa en knapp som när man klickar på den, ändrar texten i en paragraf (<p>).
Lägg till en lista i HTML och en knapp som, när man klickar på den, lägger till ett nytt objekt i listan.


*/



/*  Get elements by querySelector() It works for all examples listed above */
let element = document.querySelector("p")

// Clears the list by setting its innerHTML to an empty string
const clearElement = () => {
    element.innerHTML = ""
 }

function changeText(){

        clearElement()

        element.innerHTML += 
    
     `<div>
         <p>Javascript Exercise 1</p>
     </div>
     `

    
 }


 
// Adding uses to the list....
 const list = document.querySelector('#list'); // Use #list to select an element with the id 'list'

 const clearText = () => {
    list.innerHTML = ""
 }
 
 
 const users = [
     {
         firstName: "David",
         lastName: "John",
     },
     {
         firstName: "Tommy",
         lastName: "John",
     },
     {
         firstName: "Joakim",
         lastName: "John",
     }
 ]
 
 function showList() {
 
     for (let user of users) {
         const userElement = document.createElement('div'); // Create a new div element
         userElement.innerHTML = `<p>${user.firstName} ${user.lastName}</p>`;
         list.appendChild(userElement); // Append the new div to the list
     }
 }
 
 
 console.log(list);
 



// Another way to write it....

const listtext = document.querySelector('#listtext')

const clearUsers= () => {
    listtext.innerHTML = ""
 }



function showListtext(){

    clearUsers();

    for (let user of users){

        listtext.innerHTML += 
    
     `<div>
         <p>${user.firstName} ${user.lastName}</p>
     </div>
     `

    }    
 }


// Button to clear all Text and Users...Calling a function in a function
 const clearAllUsersAndText= () => {
    clearElement()
    clearText();
    clearUsers();
 }

