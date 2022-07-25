//Create a button , on click of which new Heading tag h1 should be added with text as
//"MERN stack" on the screen above button

const button=document.getElementById("btn");
button.addEventListener("click",function(){
    const head=document.getElementsByTagName("h1")[0];
    head.innerText="MERN stack";
})