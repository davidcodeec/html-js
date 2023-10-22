/* 

Validera formulär utan Regex

*/




function register(event){

  
    event.preventDefault()
    

    let isElementValidArray = []


    for(let i=0; i<event.target.length; i++){

        if(event.target[i].required){
           let isValid = validate(event.target[i])  
           isElementValidArray.push(isValid)

        } 
    }


    if(isElementValidArray.includes(false)){
        console.log('Formularet innehåller felaktigheter')
    }else{
        console.log('Nu är formularet validerat och klart och allt är OK')
    }

}



function validate(element){


    const errorMessages = {
        firstName_required : 'Du måste ange ett förnamn',
        firstName_invalid : 'Du måste ange ett giltig förnamn',
        lastName_required : 'Du måste ange ettefternamn',
        lastName_invalid : 'Du måste ange ett giltig ettefternamn',
        email_required : 'Du måste ange en e-postaddress',
        email_invalid : 'Du måste ange en giltig e-postaddress',
        password_required : 'Du måste ange ett lösenord',
        password_invalid : 'Du måste ange ett giltigt och stakt lösenord',
        comfirmPassword_required : 'Du måste bekräfta lösenord',
        comfirmPassword_invalid : 'lösenord matchar inte'
    }


    if(!validateLength(element.value, 1)) {
        document.getElementById(`${element.id}`).classList.add('error')
        document.getElementById(`${element.id}-error`).innerHTML= errorMessages[element.id + '_required']
        return false
    }else{

        let result = false

    
        switch(element.type){
            case 'text' :
                result = validateName(element.value)  
                break;
            case 'email' :
                result = validateEmail(element.value)
                break;
            case 'password' :
                result = validatePassword(element)
                break;    

        }


        if(!result){
            document.getElementById(`${element.id}`).classList.add('error')
            document.getElementById(`${element.id}-error`).innerHTML= errorMessages[element.id + '_invalid']
            return false
        } else {
            document.getElementById(`${element.id}`).classList.remove('error')
            document.getElementById(`${element.id}-error`).innerHTML=''
            return true
        }

    }




} 





function validateName(value) {

    if (value.trim() === "") {
        return false; // Empty name is invalid
    }
    if (value.length < validateLength(value) || value.length > 10) {
        return false; // Name length should be between 2 and 10 characters
    }
    // You can add more checks if needed (e.g., disallowing special characters)
    return true;
    
}



function validateLength(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 

function validateEmail(value) {

     // Check if the email contains the "@" symbol
     if (value.indexOf('@') !== -1) {
        return true; // Valid email
    } else {
        return false; // Invalid email
    }

    
} 

function validatePassword(element) {

    if(element.getAttribute('data-comparewith') !== null )
        return compareValues(element)

            if (element.value.length < 8) {
                return false; // Password should be at least 8 characters long
            }
        
            // Check if the password contains at least one uppercase letter
            let hasUpperCase = false;
            for (let char of element.value) {
                if (char >= 'A' && char <= 'Z') {
                    hasUpperCase = true;
                    break;
                }
            }
            if (!hasUpperCase) {
                return false; // Password should contain at least one uppercase letter
            }
        
            // Check if the password contains at least one lowercase letter
            let hasLowerCase = false;
            for (let char of element.value) {
                if (char >= 'a' && char <= 'z') {
                    hasLowerCase = true;
                    break;
                }
            }
            if (!hasLowerCase) {
                return false; // Password should contain at least one lowercase letter
            }
        
            // Check if the password contains at least one digit
            let hasDigit = false;
            for (let char of element.value) {
                if (char >= '0' && char <= '9') {
                    hasDigit = true;
                    break;
                }
            }
            if (!hasDigit) {
                return false; // Password should contain at least one digit
            }
        
            return true; // Password is valid
        
        
    
} 



function compareValues(element){
    let compareElement = document.getElementById(`${element.getAttribute('data-comparewith')}`)
    
    if(element.value === compareElement.value)
        return true

    return false
}