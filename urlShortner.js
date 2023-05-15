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
    