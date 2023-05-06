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
})
cancleBtnTarget.addEventListener("click",()=>{
    sideBarTarget.style.display="none"
})


//targeting the sticky buttons

var whatsappbtn=document.getElementById("stickyBtns");
whatsappbtn.addEventListener("click",()=>{
    alert(" the button has been clicked")
    window.location.href="https://web.whatsapp.com/"
   
})



// different apis this one is the language changer
//  var parag=document.getElementById("text2").value;
// document.getElementById("btn2").addEventListener("click", async ()=>{


// const url = 'https://japerk-text-processing.p.rapidapi.com/phrases/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': 'cb317de3eemsh321973d11497a40p1b0af3jsnb28b4969959b',
// 		'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
// 	},
// 	body: new URLSearchParams({
// 		language: 'spanish',
// 		text: `${parag}`
// 	})
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// })

    



