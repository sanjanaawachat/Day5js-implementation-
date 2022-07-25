//Create an HTML page having content as Hello world and a button named Replace Text.

const button=document.getElementById("btn");
button.addEventListener("click",function(){
    const head=document.getElementsByTagName("h1")[0];
    head.innerText="Welcome to prepbytes group";
})