// Write a code snippet that adds an element to the end of an array, then removes the first element.
var a=[10,20,30,40,50];
a.push(60,70,80);
console.log(a);
a.shift()
console.log(a);

// How can you reverse an array and then join the elements into a string?
var b=[10,20,30,40,50];
var b1=b.reverse();
console.log(b1);
var b2=b1.join(" ");
console.log(b2);

// Write a code that first sorts an array in ascending order, then removes the last element.
var x=[30,20,10,50,40,70,60];
var x1=x.sort();
console.log(x1);
x1.pop();
console.log(x1);

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var y=[30,40,50];
y.unshift(10,20);
console.log(y);
y.shift()
console.log(y);
console.log(y.length);

// How do you combine two arrays, sort the combined array, and then remove the last element?
var z=[30,10,20,50,40];
var z1=[70,60,90,80];
var res=z.concat(z1);
console.log(res);
var sort=res.sort();
console.log(sort);
sort.pop();
console.log(sort);
