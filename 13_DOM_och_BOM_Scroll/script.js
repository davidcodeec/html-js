/* 

Continuation of DOM AND BOM

*/

/* A function to scroll to the Top of the page */

/* Adding eventlistner show button or hide button after scrolling*/

window.addEventListener('scroll',() => {
    const toGoTop = document.querySelector("#goto-top")
    const header = document.querySelector("header")

    if(window.scrollY>60){
        toGoTop.classList.remove("hidden")
        header.classList.add("sticky")
    }else{
        toGoTop.classList.add("hidden")
        header.classList.remove("sticky")
    }

})

/* To scroll directly to the Top */
function gotoTop(){
   window.scrollTo({
        top: 0,
        behavior:"smooth"
   })
}