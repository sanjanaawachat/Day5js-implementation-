//Write a code to create two objects with 2 properties each, one will be string and 
//other will be an array. Create a function to check if all the elements of the arrays in 
//both the objects are same

obj = {name: "sakshi", age: 24};
arr =["sakshi", 24];
console.log(obj);
console.log(arr);
function foo() {
  const obj1Length = Object.keys(obj).length;
  const obj2Length = Object.keys(arr).length;

  if (obj1Length == obj2Length){
    return Object.keys(obj1Length).every(
      key => obj2.hasOwnProperty(key) && obj2[key] == obj1[key])
  }
  return false
}
console.log(foo());