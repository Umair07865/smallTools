//targetting the elements
var textInput=document.getElementById("textInput").value;
var Encode=document.getElementById("codeBtn1");
var Decode=document.getElementById("codeBtn2");
var Refresh=document.getElementById("codeBtn3");
var textArea=document.getElementById("textArea");

textArea.value="";
var EncodedText=[];
//funtionalitie starts from here
Encode.addEventListener("click",()=>{
   
   
   var textArray=[];

   textArray=document.getElementById("textInput").value.split("");
   var length=textArray.length;
console.log(textArray); 



for(var i=length;i>=0;i--)
{
    console.log("this : " +textArray[i]);
  
       
        // EncodedText[i]=textArray[i];
         EncodedText.push(textArray[i]);

   
   
    
}
textArea.value=EncodedText;

})
// Decode function coading starts from here

Decode.addEventListener("click",()=>{
    textArea.value=document.getElementById("textInput").value;
})

// refresh button functionality
Refresh.addEventListener("click",()=>{
    document.getElementById("textInput").value="";
    textArea.value="";
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
    window.location.href="signup.html";
})
