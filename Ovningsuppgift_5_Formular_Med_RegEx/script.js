/* 

Validera formulär med Regex

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



    if (/^[A-Z][a-zA-Z'-]{1,}$/.test(value) && validateLength(value)) {
       
        return true
 }     
    return false

    
}


function validateLength(value,minLength=2) {

    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 

function validateEmail(value) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
       
            return true
     }     
        return false

    
} 

function validatePassword(element) {

    if(element.getAttribute('data-comparewith') !== null )
        return compareValues(element)

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,}$/.test(element.value)) {
           
            return true
        }

        return false

    
} 


function compareValues(element){
    let compareElement = document.getElementById(`${element.getAttribute('data-comparewith')}`)
    
    if(element.value === compareElement.value)
        return true

    return false
}