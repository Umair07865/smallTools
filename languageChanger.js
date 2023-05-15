
   

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

     