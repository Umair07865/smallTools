//dashboard validation

if(!localStorage.getItem("access_token"))
{
    alert(" sign up first");
    window.location.href="Signup.html"
}

//login button
// document.getElementById("logInBtn").addEventListener("click",()=>{
//     localStorage.clear();
//     window.location.href="Signup.html";
// })

// targetting the elements



document.getElementById("icon1").addEventListener("click",()=>{
  
    window.location.href="dashboard.html";


})
document.getElementById("icon2").addEventListener("click",()=>{
  
    window.location.href="languageChanger.html";


})

document.getElementById("icon3").addEventListener("click",()=>{
 
    window.location.href="textConvertor.html";


})
document.getElementById("icon4").addEventListener("click",()=>{
    window.location.href="ipLocator.html"
})
document.getElementById("icon5").addEventListener("click",()=>{
    window.location.href="urlShortner.html"
})

document.getElementById("icon6").addEventListener("click",()=>{
    window.location.href="CardsGenerator.html"
})
document.getElementById("icon7").addEventListener("click",()=>{
    window.location.href="textEncodeDecoder.html"
})
document.getElementById("icon8").addEventListener("click",()=>{
    window.location.href="calc.html"
})




//targeting the sticky buttons

var whatsappbtn=document.getElementById("stickyBtns");
whatsappbtn.addEventListener("click",()=>{
  
    window.location.href="https://web.whatsapp.com/"
   
})



    