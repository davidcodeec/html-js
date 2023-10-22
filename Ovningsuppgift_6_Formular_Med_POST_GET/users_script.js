/* 

Javascript - Hantera data till/från Web API:er med Javascript med GET method....

*/




/* 
// The older way to declare a function...Same as below but below the new way of writing functions
async function getData(event){

    //Used or makes the page not redirect
    event.preventDefault()
    
    try {
        const result = await fetch('http://localhost:5500/api/users')
        const users = await result.json()
        console.log(users)
    
        for(let user of users){
    
            document.getElementById('result').innerHTML +=
        
            `
            <a href="profile.html?id=${user.id}" class="list-group-item list-group-item-action py-3">
                <div><strong>${user.firstName}  ${user.lastName} </strong> </div>
                <div><small> ${user.email} </small> </div>
            </a>
            
            `
    
        }
    }
    
      catch(error){
          console.log(error)
      }

} 

*/


// Another way of writing the async function using the arrow function
const getUsers = async () => {
    try {
      const result = await fetch('http://localhost:5500/api/users')
      const users = await result.json()
      console.log(users)
  
      return users
  
  }
  
    catch(error){
        console.log(error)
    }
  
  } 
  
  
  
  const getUser = async (id) => {
  
    
  
      try {
        
          const result = await fetch(`http://localhost:5500/api/users/user?id=${id}`)
          const user = await result.json()
          console.log(user)
  
          return user
    
    }
    
      catch(error){
          console.log(error)
      }
    
    } 
  
  
  
    const displayUsers = async () => {
  
      const users = await getUsers()
  
      
       for(let user of users){
  
          document.getElementById('result').innerHTML +=
      
          `
          <a href="profile.html?id=${user.id}" class="list-group-item list-group-item-action py-3">
              <div><strong>${user.firstName}  ${user.lastName} </strong> </div>
              <div><small> ${user.email} </small> </div>
          </a>
          
          `
  
      } 
  
    }
  
  
    const displayUser = async () => {
  
      const params = new URLSearchParams(window.location.search)
      const id = params.get('id')
      console.log(id)
  
  
      const user = await getUser(id)
  
      
       document.getElementById('result').innerHTML =
        
            `
  
          <div>
              <div class= 'mb-3' >
                   <div><small> User ID </small> </div>
                   <div>${user.id} </div>
              </div>
              
              <div class= 'mb-3'>
                   <div><small> First Name </small> </div>
                   <div>${user.firstName} ${user.lastName} </div>
              </div>
  
              <div class= 'mb-3'>
                  <div><small> Email </small> </div>
                  <div>${user.email} </div>
              </div>
  
              <div class= 'mb-5'>
                  <div><small> Phone </small> </div>
                  <div>${user.phone} </div>
              </div>
  
              <div class= 'mb-5'>
                  <button onclick='deleteUser(${id})' class='btn btn-danger me-2'>DELETE</button>
                  <a href="edit.html?id=${id}" class="btn btn-warning">EDIT</a>
              </div>
  
          <div>
            
            ` 
  
    }
  
  
  
    const displayEditUser = async () => {
  
      const params = new URLSearchParams(window.location.search)
      const id = params.get('id')
      console.log(id)
  
  
      const user = await getUser(id)
  
       // You can also use for loop to get the values too...
       document.getElementById('id').value = user.id // Note the id is hidden in the html....
       document.getElementById('firstName').value = user.firstName
       document.getElementById('lastName').value = user.lastName
       document.getElementById('email').value = user.email
       document.getElementById('phone').value = user.phone
  
    }
  
  
  
    const handleEdit = async (event) => {
  
      event.preventDefault()
  
      const id = event.target['id'].value
  
      let errors = []
  
  
      for(let i=0; i<event.target.length; i++){
  
          if(event.target[i].required){
             let isValid = validate(event.target[i])  
             errors.push(isValid)
  
          } 
      }
  
  
      if(!errors.includes(false)){
          console.log('Nu är formularet validerat och klart och allt är OK')
  
              try {
  
                  const json = JSON.stringify({
                      
                      firstName: event.target['firstName'].value,
                      lastName: event.target['lastName'].value,
                      email : event.target['email'].value,
                      phone: event.target['phone'].value,
                      }) 
      
                  // API Not working....
                      const result = await fetch(`http://localhost:5500/api/users?id=${id}`, {
                         // Use put to get only one user
                          method : 'put',
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
              
                          let user
                          if(result.status === 201 ){
                              // Used to show an alert of success on the html if the code works    
                              document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert"> User was updated successfully! </div>`
                              user = await result.json()
                              window.location.replace(`profile.html?id=${id}`)
                        }else {
                              // Used to show an alert on the html if the code doesnt work  
                          document.getElementById('status-messages').innerHTML = `<div class="alert alert-alert" role="alert"> User was not updated successfully! </div>`
                          } 
                  
              } catch (error) {
                  console.error(error)
              }   
  
              
          }
    }
  
  
    const deleteUser = async (id) => {
  
      try {
  
          // API Not working....
              const result = await fetch(`http://localhost:5500/api/users?id=${id}`, {
                 // Use put to get only one user
                  method : 'delete'
                }) // The body and header is not needed for deleting a user
                  
                  // Get a response or result back and stored as data if everything is ok
                  let status = result.status
                  if( status === 200 ){
                      // Used to show an alert of success on the html if the code works    
                      document.getElementById('status-messages').innerHTML = `<div class="alert alert-success" role="alert"> User was deleted successfully! </div>`
                      window.location.replace(`index.html`)
                }else {
                      // Used to show an alert on the html if the code doesnt work  
                  document.getElementById('status-messages').innerHTML = `<div class="alert alert-alert" role="alert">  User was not deleted successfully! </div>`
                  } 
          
      } catch (error) {
          console.error(error)
      }  
  
    }
  
  
  
  
  
  
    // FOr the Validation of the Username email and Password
  
    /* Access the element using target using validateFormField target instead of if statement as seen above*/
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
  
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(element.value)) {
             
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
  