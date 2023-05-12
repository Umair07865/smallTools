//dashboard validation

if(!localStorage.getItem("access_token"))
{
    alert(" sign up first");
    window.location.href="signup.html"
}

//login button
document.getElementById("logInBtn").addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="signup.html";
})

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


// side bar management with burger button targetting the elements

var bugerBtnTarget=document.getElementById("burgerBtn");
var sideBarTarget=document.querySelector(".sideBar");
var cancleBtnTarget=document.getElementById("cancleBtn")
bugerBtnTarget.addEventListener("click",()=>{

sideBarTarget.style.display="block"

document.body.style.overflow="hidden "

})
cancleBtnTarget.addEventListener("click",()=>{
   
    document.body.style.overflow="scroll"
    sideBarTarget.style.display="none"

})


//targeting the sticky buttons

var whatsappbtn=document.getElementById("stickyBtns");
whatsappbtn.addEventListener("click",()=>{
    alert(" the button has been clicked")
    window.location.href="https://web.whatsapp.com/"
   
})



    
/* Drop dow section elements targetting*/ 

var textLang=document.getElementById("languageTextTools");
var calculationsTools=document.getElementById("CalculationsTool");
var generationTools=document.getElementById("GenerationTools");

var calcTools= document.getElementById("calcTools");
var  generateTools=document.getElementById("generateTools");

var textToolLi=document.getElementById("textToolLi");
calcTools.addEventListener("click",()=>{
   
 
    generationTools.style.display="none";
      
    textLang.style.display="none";
    calculationsTools.style.display="block";
    calculationsTools.style.display="flex";

  
})


generateTools.addEventListener("click",()=>{
   

    calculationsTools.style.display="none";
    textLang.style.display="none";
    generationTools.style.display="block";
    generationTools.style.display="flex";
   
})

textToolLi.addEventListener("click",()=>{
    calculationsTools.style.display="none";
    generationTools.style.display="none";
    textLang.style.display="block";
    textLang.style.display="flex";
    
})

