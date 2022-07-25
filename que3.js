//Write code to implement timer clock using JS -- display HH:MM:SS -- the time 
//should keep updating every second

setInterval(function(){
    let time=new Date();
     let a=time.getHours();
     let b=time.getMinutes();
     let c= time.getSeconds(); 
const hours=document.getElementById("Hours");
const minutes=document.getElementById("Minutes");
const seconds=document.getElementById("Seconds");

hours.innerText=a;
minutes.innerText=b;
seconds.innerText=c;


},1000);




