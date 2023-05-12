// targetting the elements of data card
var Name=document.getElementById("name");
var city=document.getElementById("city");
var org=document.getElementById("org");
var gender=document.getElementById("gender");
var occop=document.getElementById("occop");
var country=document.getElementById("country");
var btnSubmit=document.getElementById("btnSubmit");
// targetting the card one
var dataCard= document.getElementById("dataCard");


//targeting the element of the card has to be shown
var  Cname=document.getElementById("nameData");
var Ccity=document.getElementById("cityData");
var Corg=document.getElementById("orgData");
var Cgender=document.getElementById("genderData");
var Coccop=document.getElementById("occopData");
var Ccountry=document.getElementById("countryData");
// var cancleBtn=document.getElementById("cancleBtn")

//targetting ends here
// targetting the second id card
var idCard=document.getElementById("idCard");
//functionalities starts from here

btnSubmit.addEventListener("click",()=>{
    dataCard.style.display="none";
    idCard.style.display="block";
    Ccity.textContent=city.value;
    Corg.textContent=org.value;
    Cname.textContent=Name.value;
    Cgender.innerText+=`  ${gender.value}`;
    Coccop.innerText+=`  ${occop.value}`;
    Ccountry.innerText+=`  ${country.value}`;
    document.querySelector(".cardCloser").addEventListener("click",()=>{
       
        idCard.style.display="none";
        dataCard.style.display="block";
    })
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
