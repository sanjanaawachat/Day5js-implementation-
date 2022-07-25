//Given an array find out total no. of odd and even nos.

const arr=[2,3,4,5,8,9,1];

let even=0;
let odd=0;
for (let i = 0; i < arr.length; i++) {
    if((arr[i]%2)==0)
    {
        even=even+1;
    }else
    {
        odd=odd+1;
    }
}
console.log(even,odd);


