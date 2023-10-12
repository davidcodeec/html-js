/* 

Functions: Fristånde funktion som utför någonting. e.g generateSecurePassword()

Methods: är en del av en klass och måste då instansieras först...
e.g 
cosnt user = new User()
user.generateSecurePassword()

Traditional ways to declare a function:

function (){            Anoymn function

}

function generateSecurePassword() {         Normal function

}


New ways of declaring a function ( ES6 2015 )

() => {}                                         Anonymous arrow function

const generateSecurePassword = () => {}          Normal arrow function


Parameter

function(parameter){
    console.log(parameter)
}

*/

function greet(name){
    console.log(`Hi and Welcome ${name} `)
}

greet("David")


const testGreet = (name) => {
    console.log(`Hi and Welcome ${name} `)
}   

testGreet("John")

/* Using a function without return */
function calculateVat( amount, rate=0.25){
    let vat = amount * rate
    console.log(vat)
}

calculateVat(100)

/* Declaring a functionw with return...This returns a value and is stored in vat */
function calculateVatAndReturn( amount, rate=0.25){
    return amount * rate
}

let vat = calculateVatAndReturn(100)
console.log(vat)


function validPasswordLength(passweord){
    if(passweord.length < 8){
        return true
    } else {
        return false
    }
}

/* When returning a value, always create a variable for the value. */
let isPasswordValid = validPasswordLength("BytMig12")
console.log(isPasswordValid)