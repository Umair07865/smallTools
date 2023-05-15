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

  