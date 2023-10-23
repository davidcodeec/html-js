/* 

Javascript - Hantera data till/från Web API:er med Javascript med POST Method...

*/




async function userRegistration(event){

    
    event.preventDefault()
    
    
    let errors = []


   
    for(let i=0; i<event.target.length; i++){

        if(event.target[i].required){
           let isValid = validate(event.target[i])  
           errors.push(isValid)

        } 
    }



   
    if(!errors.includes(false)){
        console.log('Nu är formularet validerat och klart och allt är OK')

        const user = {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            email : event.target['email'].value,
            password: event.target['password'].value,
            confirmPassword: event.target['confirmPassword'].value,
            streetName: event.target['streetName'].value,
            postalCode: event.target['postalCode'].value,
            city: event.target['city'].value,
          }

          
          const json = JSON.stringify(user)


         /* console.log(json)  */



        try {

                const result = await fetch('https://win23.azurewebsites.net/api/users', {
                method : 'post',
                // This tells that the content type is a json format 
                headers : {
                    "Content-Type": "application/json",
                },
                
                body :  json
            }) 

                if (result.status === 201) {
                    document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert">User was created successfully!</div>`;
                    const data = await result.json();
                    //This saves to data to the browser using sessionStorage
                    //sessionStorage.setItem('user', JSON.stringify(data)) 
                } else {
                    // You can use data to print the error message on the browser
                    //const data = await result.text();
                    //  document.getElementById('status-messages').innerHTML = `<div class="alert alert-danger" role="alert">${data}.!</div>`;
                    document.getElementById('status-messages').innerHTML = `<div class="alert alert-danger" role="alert">User not created successfully.!</div>`;
                }
            
            
        } catch (error) {
                // Handle network errors and fetch-related errors here.
            //document.getElementById('status-messages').innerHTML = `<div class="alert alert-danger" role="alert">${error.message}!</div>`; 
           //console.log(error)
        }
         
          

/* 



           

            
            if(result.status === 201 ){
                 
                document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert"> User was created successfully! </div>`
                const data = await result.json()
          }else {
                const data = result.text()
                
            document.getElementById('status-messages').innerHTML = `<div class="alert alert-alert" role="alert"> ${data}! </div>`
            }

 */
    }

}



function validate(element){
   
    const errorMessages = {
        firstName_required : 'You must enter a first name',
        firstName_invalid : 'You must enter a valid first name',
        lastName_required : 'You must enter a last name',
        lastName_invalid : 'You must enter a valid last name',
        email_required : 'You must enter a e-postaddress',
        email_invalid : 'You must enter a valid e-postaddress',
        password_required : 'You must enter a password',
        password_invalid : 'You must enter a valid and a strong password',
        confirmPassword_required : 'You must comfirm password',
        confirmPassword_invalid : 'Password doesnt match'
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





const validateName = (value) => {

    const regexName = /^[a-zA-Z\s\-]+$/;

    if (regexName.test(value) && validateLength(value)) {
       
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

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
    if (regexEmail.test(value)) {
       
            return true
     }     
        return false

    
} 

function validatePassword(element) {
   
    if(element.getAttribute('data-comparewith') !== null )
        return compareValues(element)

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/

     if (regexPassword.test(element.value)) {
           
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


function validateStreetName(value) {

    const regexStreetName = /^[A-Za-z0-9\s\-]+$/;
 
    if (regexStreetName.test(value)) {
       
            return true
     }     
        return false

    
} 


function validatePostalCode(value) {

    const regexPostalCode = /^\d{3} \d{2}$/;
 
    if (regexPostalCode.test(value)) {
       
            return true
     }     
        return false

    
} 


function validateCity(value) {

    const regexCity = /^[A-Za-z\s]+$/;
 
    if (regexCity.test(value)) {
       
            return true
     }     
        return false

    
} 