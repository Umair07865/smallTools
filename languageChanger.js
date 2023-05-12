
   

    document.querySelector("#btnnew").addEventListener("click",()=>{

       var data= document.querySelector("#text2").value;
       var translation;
       

        fetch(` https://api.mymemory.translated.net/get?q=${data}!&langpair=en|ur-PK`).then((response)=>{
            return response.json();
        }).then((data)=>{
           
            console.log(data);
            translation=data.responseData.translatedText;
            document.querySelector('#translate').textContent=translation;

        }).catch((err)=>{
            console.log("error: " + err.message);
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
