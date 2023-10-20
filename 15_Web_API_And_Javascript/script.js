/* 

Javascript - Hantera data till/från Web API:er med Javascrip

*/


/* Note: This generates an error if used with multiple pages bcos its using the same
eventlistner..Its is used with IDs...
*/
/* document.querySelector("#regForm").addEventListener('submit',function(e){
   // e.preventDefault() stops the page from redirecting 
    e.preventDefault()
    console.log("Här gör vi något av förmularet")
}) */


/* event has information for the form Async and wait works together*/
async function handleForm(event){

    //Used or makes the page not redirect
    event.preventDefault()
    
    //A variable used and created to check for errors e.g if all form elements are filled or correct or validated
    let errors = []


    // Code same as below but this loops through all target required elements and makes sure its true
    // The pushes or add the value to the isElementValidArray
    for(let i=0; i<event.target.length; i++){

        if(event.target[i].required){
           let isValid = validate(event.target[i])  
           errors.push(isValid)

        } 
    }

    // if all form elements are filled and correct then ElementValidArray will be true. If and else is not required
    // We only need the one where there is no error as used below...
   /*  if(errors.includes(false)){
        console.log('Formularet innehåller felaktigheter')
    }else{
        console.log('Nu är formularet validerat och klart och allt är OK')
    } */

    /* Here it says is there is no error or if errors does not include false */
    if(!errors.includes(false)){
        console.log('Nu är formularet validerat och klart och allt är OK')

        const user = {
            firstName: event.target['firstName'].value,
            lastName: event.target['lastName'].value,
            email : event.target['email'].value,
            phone: event.target['phone'].value,
            password: event.target['password'].value,
          }

          // Convert the user javascript data into a JSON format....
          const json = JSON.stringify(user)

         /*  //Another way to converting user to JSON....Same as above
          const json = JSON.stringify({
          firstName: event.target['firstName'].value,
          lastName: event.target['lastName'].value,
          email : event.target['email'].value,
          phone: event.target['phone'].value,
          password: event.target['password'].value
          }) */

           console.log(json) 




          // A better way that is similar to fetch is when you use await see below code....Note aynsc was used above...
           // Fetch is used to send information to a url. API not working or stops working bcos of cors or bcos no database???
          const res = await fetch('http://localhost:5500/api/users', {
            method : 'post',
            // mode:"no-cors", 
            // This tells that the content type is a json format 
            headers : {
                "Content-Type": "application/json",
               // "Access-Control-Allow-Origin": "*",
               // "Access-Control-Allow-Credentials" : true 
            },
            // This is the content which is the json object we converted above 
            body :  json,
          }) // Then is used after fetch method if everything is okey.
            
            // Get a response or result back and stored as data if everything is ok

            let data
            if(res.status === 201 ){
                // Used to show an alert of success on the html if the code works    
                document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert"> User was created successfully! </div>`
                data = await res.json()
          }else {
                data = res.text()
                // Used to show an alert on the html if the code doesnt work  
            document.getElementById('status-messages').innerHTML = `<div class="alert alert-alert" role="alert"> ${data}! </div>`
            }





       /*    // Fetch is used to send information to a url. API not working or stops working bcos of cors or bcos no database???
          fetch('http://localhost:5500/api/users', {
            method : 'post',
            // mode:"no-cors", 
            // This tells that the content type is a json format 
            headers : {
                "Content-Type": "application/json",
               // "Access-Control-Allow-Origin": "*",
               // "Access-Control-Allow-Credentials" : true 
            },
            // This is the content which is the json object we converted above 
            body :  json,
          }) // Then is used after fetch method if everything is okey.
        .then(res => {
            if(res.status === 201 ){
            // Used to show an alert of success on the html if the code works    
            document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert"> User was created successfully! </div>`
            return res.json()
        } else {
            let message = res.text()
            document.getElementById('status-messages').innerHTML = `<div class="alert alert-alert" role="alert"> ${message}! </div>`
            }
        }) // This is a function that tell that i got a json back as (res) result
        .then(data => {
            console.log(data)
            // This save the user data temporary in the webbrowser session storge....
            //sessionStorage.setItem('user', JSON.stringify(data))
            // you can also use document.getElementById('') and print that the data was okey or printed....
        })   The res.json is stored as data and printed out. The new way as writing function is used */


    }

}


/* Access the element using target using validateFormField target instead of if statement as seen above*/
function validate(element){

    // You can create errorMessages variable for the errors or get it directly from the event but getting it 
    // fromt he event and using it is much difficult...
    const errorMessages = {
        firstName_required : 'You must enter a first name',
        firstName_invalid : 'You must enter a valid first name',
        lastName_required : 'You must enter a last name',
        lastName_invalid : 'You must enter a valid last name',
        email_required : 'You must enter a e-postaddress',
        email_invalid : 'You must enter a valid e-postaddress',
        password_required : 'You must enter a password',
        password_invalid : 'You must enter a valid and a strong password',
        comfirmPassword_required : 'You must comfirm password',
        comfirmPassword_invalid : 'Password doesnt match'
    }

    // If the lenght of the value is 1 or less than 1
    if(!validateLength(element.value, 1)) {
        document.getElementById(`${element.id}`).classList.add('error')
        document.getElementById(`${element.id}-error`).innerHTML= errorMessages[element.id + '_required']
        return false
    }else{

        let result = false

        /* Used to valid the email using regex along with the validFormField...code same as below but much better*/
        switch(element.type){
            case 'text' :
                result = validateName(element.value)  
                break;
            /* Validation for both email and password not working...??? */    
            case 'email' :
                result = validateEmail(element.value)
                break;
            case 'password' :
                result = validatePassword(element)
                break;    

        }


        if(!result){
            // If the valuse is not correct or is invalid or result is false
            document.getElementById(`${element.id}`).classList.add('error')
            document.getElementById(`${element.id}-error`).innerHTML= errorMessages[element.id + '_invalid']
            return false
        } else {
            // If result is true and the value is valid or written correctly
            document.getElementById(`${element.id}`).classList.remove('error')
            document.getElementById(`${element.id}-error`).innerHTML=''
            return true
        }

    }


} 




// Easier way to write the code instead of creating 2 or more functions....
// Another and new way of writing a function
const validateName = (value) => {

    // This regular expression validates the text i.e type firstName, lastNmme
    // Note: this regular expression ensure you use uppercase for the first letter
    // for the firstName and lastName...

    if (/^[A-Z][a-zA-Z'-]{1,}$/.test(value) && validateLength(value)) {
       
        return true
 }     
    return false

    
}



function validateLength(value,minLength=2) {
    // This ensures that the lenght of the value to be at least 2
    if (value !== "" && value.length >= minLength) 
            return true

        return false

    
} 

function validateEmail(value) {
    // This regular expression validates the type email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
       
            return true
     }     
        return false

    
} 

function validatePassword(element) {
    // This regular expression validates the password
    if(element.getAttribute('data-comparewith') !== null )
        return compareValues(element)

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(element.value)) {
           
            return true
        }

        return false

    
} 


/* This is used to compare both the password and the comfirmPassword values */
function compareValues(element){
    let compareElement = document.getElementById(`${element.getAttribute('data-comparewith')}`)
    
    if(element.value === compareElement.value)
        return true

    return false
}



/*

// Difference btw Javascript and Json...
// Javascript object can have another function while json cannot
// Json consist of a "" for the properties while javascript does not...

const js = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  // To comvert a Javascript object into JSON you use JSON.stringify(objectname)


 // Declare a json using only {} not const....also no semi-colon at the end....
  {
    "firstName" : "John",
    "lastName" : "Doe",
    // for json no need for "" in numbers or boolean values....
     "id" : 5566,
    // Json cannot have another function inside it so below is wrong....
    //fullName : function() {
    //  return this.firstName + " " + this.lastName;
    // }
  }
  
  
  */