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

} */


// Another way of writing the async function using the arrow function
const getUsers = async () => {
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



// Another way of writing the async function using the arrow function
const getUser = async () => {

    const params = new URLSearchParams(window.location.search)
      const id = params.get('id')
      console.log(id)


    try {
      
        const result = await fetch(`http://localhost:5500/api/users/user?id=${id}`)
        const user = await result.json()
        console.log(user)
    
  
          document.getElementById('result').innerHTML =
      
          `

        <div>
            <div class= 'mb-3' >
                 <div>><small> User ID </small> </div>
                 <div> >${user.id} </div>
            </div>
            
            <div>
                 <div>><small> First Name </small> </div>
                 <div> >${user.firstName} </div>
            </div>

            <div>
                <div>><small> Email </small> </div>
                <div> >${user.email} </div>
            </div>

            <div>
                <div>><small> Phone </small> </div>
                <div> >${user.phone} </div>
            </div>
        <div>
          
          `
  
  }
  
    catch(error){
        console.log(error)
    }
  
  } 



