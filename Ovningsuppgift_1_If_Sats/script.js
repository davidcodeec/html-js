/* 

Övningsuppgift : Grunder i JavaScript - Variabler, If-satser, och Loopar


Uppgift: Skriv en kodsnutt i JavaScript som gör följande:

Deklarera variabler för att lagra ditt namn, ålder, och om du är en student eller inte.
Använd en if-sats för att skriva ut en hälsning beroende på om du är en student eller inte.
Använd en for-loop för att skriva ut siffrorna från 1 till 10.


*/


const userInput = prompt("Please enter your name:");
const userAge = prompt("Please enter your name:");
const userStudentOrNot = prompt('Are you a student : "Type Yes or No" or not?:');

    if (userInput !== null && userStudentOrNot == 'Yes') {
        alert(`Hello, ${userInput}  ${userAge}!`);
    } else {
        alert("You are not a student!.");
    }


// For loop
for(let i=0; i<=10; i++){
    console.log(i)
}



// Deklarera variabler för namn, ålder och studentstatus
const name = "Ditt Namn";
const age = 25;
const isStudent = true; // Ändra till 'false' om du inte är student

// Skriv ut en hälsning beroende på studentstatus
if (isStudent) {
    console.log(`Hej ${name}! Du är en student och är ${age} år gammal.`);
} else {
    console.log(`Hej ${name}! Du är inte en student och är ${age} år gammal.`);
}

// Använd en for-loop för att skriva ut siffrorna från 1 till 10
console.log("Siffror från 1 till 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}




/* or Ternary Operator */

// Set age of user
let number = 20;

// Place result of ternary operation in a variable
const oldEnough = (number >= 21) ? "You may enter." : "You may not enter.";

// Print output
console.log(oldEnough);