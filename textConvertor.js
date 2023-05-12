// targetting the elements

var target1=document.getElementById("btnnew1");
var target2=document.getElementById("btnnew2");
var target3=document.getElementById("btnnew3");
var target4=document.getElementById("btnnew4");
var target5=document.getElementById("btnnew5");

var text=document.getElementById("text3");
// button one cursive
var convertedTextContainer=document.getElementById("convertFont");
target1.addEventListener("click",()=>{

    


convertedTextContainer.textContent=text.value;
convertedTextContainer.style.fontFamily="cursive"
})

// button two Roman

var convertedTextContainer=document.getElementById("convertFont");
target2.addEventListener("click",()=>{

    


convertedTextContainer.textContent=text.value;
convertedTextContainer.style.fontFamily="roman"
})
// button 3 largetext
var convertedTextContainer=document.getElementById("convertFont");
target3.addEventListener("click",()=>{

    


convertedTextContainer.textContent=text.value;
convertedTextContainer.style.fontSize="30px"
})
//button 4 Bold
var convertedTextContainer=document.getElementById("convertFont");
target4.addEventListener("click",()=>{

    


convertedTextContainer.textContent=text.value;
convertedTextContainer.style.fontWeight="bold"
})
//butoon 5 small text
var convertedTextContainer=document.getElementById("convertFont");
target5.addEventListener("click",()=>{

    


convertedTextContainer.textContent=text.value;
convertedTextContainer.style.fontSize="8px"
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

//login button
document.getElementById("logInBtn").addEventListener("click",()=>{
    localStorage.clear();
    window.location.href="Signup.html";
})
