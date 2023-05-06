
// this is pragraph rewriter
// document.getElementById("icon2").addEventListener("click",()=>{
//     alert("clicked");
//     window.location.href="languageChanger.html";
// })


    // document.getElementById("btnnew").addEventListener("click",()=>{
    //     alert("clciked")
    // })
    //     var parag=document.getElementById("text2").value;
    
    //     const url = 'https://article-rewriter.p.rapidapi.com/api/v1/generate-variants';
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         'X-RapidAPI-Key': 'cb317de3eemsh321973d11497a40p1b0af3jsnb28b4969959b',
    //         'X-RapidAPI-Host': 'article-rewriter.p.rapidapi.com'
    //     },
    //     body: new URLSearchParams({
    //         text: `${parag}`
    //     })
    // };
    
    // try {
    //     const response =  fetch(url, options);
    //     const result =  response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }
    


    // language changer

   

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