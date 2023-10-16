/* 

Validera formulär

*/


/* Note: This generates an error if used with multiple pages bcos its using the same
eventlistner..Its is used with IDs...
*/
/* document.querySelector("#regForm").addEventListener('submit',function(e){
   // e.preventDefault() stops the page from redirecting 
    e.preventDefault()
    console.log("Här gör vi något av förmularet")
}) */


/* event has information for the form */
function register(event){
    event.preventDefault()

    const user = {
        firstName: event.target[0].value,
        lastName: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
        comfirmPassword: event.target[4].value
    }

    console.log(user.firstName)
    console.log(user)

    let result = validateFirstName(user.firstName, 5)
    console.log(result)
    
}



/* Check presence of a value on different data types */
/* function validateFirstName(value) {

    if(value == null) {
        console.log("Värdet är null")
    }

    else if(value == undefined) {
        console.log("Värdet är undefined")
    }

    else if(value === "") {
        console.log('Värdet är "" ')
    }

    else  {
        console.log("Värdet är något annat")
    }

} */




/* 

// Not working with user data

function validateFirstName(value,minLength=2) {

    if (value === "") {
        console.log("Du måste ange ett förnamn.")
    }

    else{
        if(value.lenght<minLength) {
        console.log("Du måste ange ett giltigt förnamn")
     }

    }
} 

*/


function validateFirstName(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 