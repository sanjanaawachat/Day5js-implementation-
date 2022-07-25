// When user will click on this button page content should be changed to "Welcome to 
 //Elevation academy"


 const button =document.getElementById("btn");
 button.addEventListener("click",function(){

    const head=document.getElementsByTagName("h1")[0];
    head.innerText="Welcome to Elevation academy";
 })