
// targetting all the attributes
let target1=document.querySelector("#b1");
 let target2=document.querySelector("#b2");
 let target3=document.querySelector("#b3");
 let target4=document.querySelector("#b4");
 let target5=document.querySelector("#b5");
 let target6=document.querySelector("#b6");
 let target7=document.querySelector("#b7");
 let target8 = document.querySelector("#b8");
 let target9=document.querySelector("#b9");
 let target10=document.querySelector("#bneg");
 let target11=document.querySelector("#badd");
 let target12=document.querySelector("#bmult");
 let target13=document.querySelector("#bdiv");
 let target14=document.querySelector("#bper");
 let target15=document.querySelector("#bx");
 let target16=document.querySelector("#AC");
 let target17=document.querySelector(".container2");
 
 let target18=document.querySelector("#bzero");
 let target19=document.querySelector("#bequal");
 let target20=document.querySelector("#bpoint");
 let target21=document.querySelector(".container21");
 let arr=[];
 function disabling()
 {
    target10.disabled=true;
    target10.style.opacity="50%";
    target11.disabled=true;
    target11.style.opacity="50%";
    target12.disabled=true;
    target12.style.opacity="50%";
    target13.disabled=true;
    target13.style.opacity="50%";
    target14.disabled=true;
    target14.style.opacity="50%";
 }
 function enabling()
 {
    target10.disabled=false;
    target10.style.opacity="100%";
    target11.disabled=false;
    target11.style.opacity="100%";
    target12.disabled=false;
    target12.style.opacity="100%";
    target13.disabled=false;
    target13.style.opacity="100%";
    target14.disabled=false;
    target14.style.opacity="100%";

 }
 function validations()
{
      let valid=target17.textContent.slice(-1);
      let invalid=target17.textContent.charAt(0);
         if(valid=="+" ||  valid=="-"  ||  valid=="/"  ||  valid=="%"  ||  valid=="*" || invalid=="+" ||  invalid=="-"  ||  invalid=="/"  ||  invalid=="%"  ||  invalid=="*" )
         {
            
            target17.textContent="ERROR";
            alert(" please press 'X' for erassing the last entry invalid entries");
         
           target17.classList.add("custom");
    
           
         }else{
          console.log("true");
         }
        
    }

 
function addintheupperfield()
{
   
    target1.addEventListener("click", ()=>{
        arr.push(target1.textContent);
        console.log(arr);
        let number=arr.toString();
        let narr=number.split(",").join("");
        target17.innerText=narr;
  

      
        console.log(" 1 button has beeen pressed");
        enabling();

   });
   target2.addEventListener("click", ()=>{
     
    target17.textContent=target2.textContent;
    arr.push(target2.textContent);
    console.log(arr);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
    enabling();
});
target3.addEventListener("click", ()=>{
     
    target17.textContent=target3.textContent;
    arr.push(target3.textContent);
    console.log(arr);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
   enabling();
});
target4.addEventListener("click", ()=>{
     
    target17.textContent=target4.textContent;
      arr.push(target4.textContent);
        console.log(arr);
        let number=arr.toString();
        let narr=number.split(",").join("");
        target17.innerText=narr;
  enabling();

});
target5.addEventListener("click", ()=>{
     
    target17.textContent=target5.textContent;
    arr.push(target5.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
 enabling();
});
target6.addEventListener("click", ()=>{
     
    target17.textContent=target6.textContent;
    arr.push(target6.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;

 enabling();
});
target7.addEventListener("click", ()=>{
     
    target17.textContent=target7.textContent;
    arr.push(target7.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
  enabling();

});
target8.addEventListener("click", ()=>{
     
    target17.textContent=target8.textContent;
    arr.push(target8.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
    enabling();
  
});

target9.addEventListener("click", ()=>{
     
    target17.textContent= target9.textContent;
    arr.push(target9.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
  
    enabling();

});
// negetive operator
target10.addEventListener("click", ()=>{
     
 
    arr.push(target10.textContent);

    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
     
    disabling();
    
    
    

});
 // add operator
target11.addEventListener("click", ()=>{
    target17.textContent=target11.textContent;
    arr.push(target11.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
    
     disabling();

});
// multi operator
target12.addEventListener("click", ()=>{
     
    arr.push(target12.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
   
    disabling();
});
// div operator
target13.addEventListener("click", ()=>{
     
    arr.push(target13.textContent);
  
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
  
    disabling();

});

target18.addEventListener("click", ()=>{
    arr.push(target18.textContent);
     
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
    enabling();
  
});

target16.addEventListener("click",()=>{

    target17.textContent="0";
    target21.textContent="Result";
    arr=[];
    document.querySelector(".allresult").innerText="";
})
target19.addEventListener("click",()=>{
    validations();
    let number=arr.toString();
    let narr=number.split(",").join("");
   
    narr=eval(narr);
    console.log("this is last array " + narr);
   
  
    target21.textContent= narr;
   
   
  
 
})
target15.addEventListener("click",()=>{
   
    arr.pop(target12.textContent);
    let number=arr.toString();
    let narr=number.split(",").join("");
    target17.innerText=narr;
    });

    // percentage operator
    target14.addEventListener("click",()=>{
   
        arr.push(target14.textContent);
        let number=arr.toString();
        let narr=number.split(",").join("");
        target17.innerText=narr;

         disabling();
        });
        target20.addEventListener("click", ()=>{
     
            target17.textContent=target20.textContent;
            arr.push(target20.textContent);
            console.log(arr);
            let number=arr.toString();
            let narr=number.split(",").join("");
            target17.innerText=narr;
            enabling();
        });

}

addintheupperfield();


    
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
