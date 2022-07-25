//Given an array of 0's and 1's find out number of 0's


let arr=[1,1,1,1,1,0,0,0,0,0];
length=arr.length;
count=0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]==0)
    count=count+1;
}
console.log(count);