// targeting the elements


var city=document.getElementById("d1");
var country=document.getElementById("d2");

var countryCode=document.getElementById("d3");

var isp=document.getElementById("d4");

var lat=document.getElementById("d5");

var lon=document.getElementById("d6");

var org=document.getElementById("d7");

var query=document.getElementById("d8");

var region=document.getElementById("d9");

var regionName=document.getElementById("d10");

var Status=document.getElementById("d11");

var timeZone=document.getElementById("d12");

var zip=document.getElementById("d13");

var AS=document.getElementById("d14");

//targetting the input field text and button
var input=document.getElementById("Ipadress");

var fetchBtn=document.getElementById("btn");
//calling the api on click
fetchBtn.addEventListener("click",()=>{
 
 if(input.value=="")
 {
    alert("Empty Input Please Enter valid IP Address")
   
    exit(1);
 }
 
    fetch(`http://ip-api.com/json/${input.value}`).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data.city);
        city.textContent=data.city;
        country.textContent=data.country;
        countryCode.textContent=data.countryCode;
        isp.textContent=data.isp;
        lat.textContent=data.lat;
        lon.textContent=data.lon;
        org.textContent=data.org;
        query.textContent=data.query;
        region.textContent=data.region;
        regionName.textContent=data.regionName;
        Status.textContent=data.status;
        timeZone.textContent=data.timezone;
        zip.textContent=data.zip;
        AS.textContent=data.as;


    }).catch((err)=>{
        console.log("error: " +err.message)
    })

})
