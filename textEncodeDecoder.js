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
    