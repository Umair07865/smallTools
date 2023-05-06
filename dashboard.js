
// targeting the elements

document.getElementById("btn").addEventListener("click",()=>{

 
    var dataText=document.getElementById("text").value; 


    var splitedWords=dataText.split(" ");

   console.log(splitedWords)
   var count=splitedWords.length;
   console.log(count);
   document.querySelector("#result").textContent=count;

})
