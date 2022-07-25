//Create an HTML page having content as Hello world and a button named "Hide Text." 
//When user will click on this button hide the "Hello World" text

const button=document.getElementById("btn");
button.addEventListener("click",function(){
    const head=document.getElementsByTagName("h1")[0];
    head.style.display='none';
})