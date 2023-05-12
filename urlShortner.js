// targetting the elements
var urlField=document.getElementById("urlField");
var shrinkBtn=document.getElementById("btn");
var shortUrlField=document.getElementById("shortUrlField").value;
var copyBtn=document.getElementById("bt2");


//funcitonalities starts from here
document.getElementById("btn").addEventListener("click",()=>{

 alert(" button is clicked");
 console.log(urlField);
 console.log(" button has been clicked")
   
        const url = new URL(
"https://t.ly/api/v1/link/shorten"
);

const params = {
"api_token": "ZiWUDRjrLPVkNux2SztwAPlML7hGnnLzII2hWHpcDhjMtF0NIxKUcMWaq8Dd",
};
Object.keys(params)
.forEach(key => url.searchParams.append(key, params[key]));

const headers = {
"Content-Type": "application/json",
"Accept": "application/json",
};

let body = {
"long_url":urlField.value,
"domain": "",
"include_qr_code": false
};

fetch(url, {
method: "POST",
headers,
body: JSON.stringify(body),
}).then(response => response.json().then((data)=>{
console.log(data);
alert(" the response is running")
shortUrlField = data.short_url

}).catch((err)=>{
    alert("error: " + err)
})
);



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

