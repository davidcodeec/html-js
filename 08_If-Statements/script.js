/* 

If Satsar

Används för att kontrollera om ett tillstånd är sant eller falskt om tillstånd är sant så gör 

gör man en vis sak annars gör man en annan sak. Eller strunter i det.....Examples on how to use if statement....


if(statement){
    true
}




if(statement){
    true
}else{
    false
}



if(statement){
    true
}else if(statment){
    true
}else{
    false
}


or 

Ternary Operator 

(condition) ? expression on true : expression on false

(condition) ? true : false

*/



/* Example */

let firstName = "David"

let age = 39

/* Note === mean Equal to and same datatype */
if(age === "39") {
    console.log("True Age")
}else {
    console.log("Wrong Age")
}

/* or Ternary Operator */

// Set age of user
let number = 20;

// Place result of ternary operation in a variable
const oldEnough = (number >= 21) ? "You may enter." : "You may not enter.";

// Print output
console.log(oldEnough);