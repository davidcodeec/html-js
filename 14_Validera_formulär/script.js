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

    /* console.log(user.firstName) */
    console.log(user)


    /* Using target to access the element */
    validateFormField(event.target[0])
    validateFormField(event.target[1])
    validateFormField(event.target[2])

    /* let result_fn = validateFirstName(user.firstName, 5) // 5 is the length of firstName
    let result_ln = validateLastName(user.lastName, 5)
    console.log(result_fn)
    console.log(result_ln)
     */

    let result_fn = validateLength(user.firstName)
    let result_ln = validateLength(user.lastName)
    console.log(result_fn)
    console.log(result_ln)


    /* Using a Css class with javascript form */
    /* if(validateLength(user.firstName)=== false) Same as below */
    if(!validateLength(user.firstName)) {
        /* error class and firstName-error was added to firstName if validateLength is false */
        document.querySelector('#firstName').classList.add('error')
        document.querySelector('#firstName-error').innerHTML='Du måste ange ett giltig förnamn'

    }

    else {
        document.querySelector('#firstName').classList.remove('error')
        document.querySelector('#firstName-error').innerHTML=''
    }


    if(!validateLength(user.lastName)) {
        
        document.querySelector('#lastName').classList.add('error')
        document.querySelector('#lastName-error').innerHTML='Du måste ange ett giltig efternamn'

    }

    else {
        document.querySelector('#lastName').classList.remove('error')
        document.querySelector('#lastName-error').innerHTML=''
    }

    if(!validateLength(user.email)) {
        
        document.querySelector('#email').classList.add('error')
        document.querySelector('#email-error').innerHTML='Du måste ange en giltig e-postaddress'

    }

    else {
        document.querySelector('#email').classList.remove('error')
        document.querySelector('#email-error').innerHTML=''
    }

    if(!validateLength(user.password)) {
        
        document.querySelector('#password').classList.add('error')
        document.querySelector('#password-error').innerHTML='Du måste ange ett giltig lösenord'

    }

    else {
        document.querySelector('#password').classList.remove('error')
        document.querySelector('#password-error').innerHTML=''
    }

    if(!validateLength(user.comfirmPassword)) {

        document.querySelector('#comfirmPassword').classList.add('error')
        document.querySelector('#comfirmPassword-error').innerHTML='Du måste bekräfte löseordet'

    }

    else {
        document.querySelector('#comfirmPassword').classList.remove('error')
        document.querySelector('#comfirmPassword-error').innerHTML=''
    }
}


/* Access the element using target */
function validateFormField(targetElement){
    console.log(targetElement)
    const id = targetElement.id
    const value = targetElement.value
    console.log(id)
    console.log(value)


    const errorMessages = {
        firstName_1 : 'Du måste ange ett förnamn',
        firstName_2 : 'Du måste ange ett giltig förnamn',
        lastName : 'Du måste ange ettefternamn',
        email : 'Du måste ange ett e-postaddress',
        password : 'Du måste ange ett lösenord',
        comfirmPassword : 'Du måste bekräfta lösenord'
    }

     /* If targetElement.value minimum lenght is 1 */
    if(!validateLength(targetElement.value, 1)) {
        /* targetElement here can be used for debugging code where we can get the IDs */
       /* Also a simplier way for writing the error messages */
        document.querySelector(`#${targetElement.id}`).classList.add('error')
        document.querySelector(`#${targetElement.id}-error`).innerHTML= errorMessages[targetElement.id + '_1']

    }

    /* If targetElement.value is less than 1 or empty */ 
    else if(!validateLength(targetElement.value)) {
       
        document.querySelector(`#${targetElement.id}`).classList.add('error')
        document.querySelector(`#${targetElement.id}-error`).innerHTML= errorMessages[targetElement.id + '_2']

    }

    else {
        document.querySelector(`#${targetElement.id}`).classList.remove('error')
        document.querySelector(`#${targetElement.id}-error`).innerHTML=''
    }

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






/* // Not working with user data

function validateFirstName(value,minLength=2) {

    if (value === "") {
        console.log("Du måste ange ett förnamn.")
    }

    else{
        if(value.lenght<minLength) {
        console.log("Du måste ange ett giltigt förnamn")
     }

    }
}  */



/*

// Another way to write the above code but for both firstName and lastName: works

function validateFirstName(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 

function validateLastName(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 

*/


// Easier way to write the code instead of creating 2 or more functions....

function validateLength(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 