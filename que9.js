//Given a string find out number of vowels 

function vowel(str) {
    let length=str.length;
    let count=0;
    for (let i = 0; i < length; i++) {
      
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count=count+1;
        }
        
    }
    console.log(count);
}
vowel("sanjana");