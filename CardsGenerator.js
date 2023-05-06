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

