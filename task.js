// How do you add an element to the end of an array?
var a=[10,20,30];
a.push(40,50,60);
console.log(a);

// How do you remove the last element from an array?
var b=[10,20,30,40];
b.pop();
console.log(b);

// How do you add an element to the beginning of an array?
var a1=[10,20,30];
a1.unshift(40,50,60);
console.log(a1);

// How can you remove the first element from an array?
var b1=[10,20,30,40];
b1.shift();
console.log(b1);

// How do you reverse the elements in an array?
var x=[10,20,30,40,50,60];
var x1=x.reverse()
console.log(x);

// How can you find the index of a specific value in an array?
var y=[10,20,30,40,60];
var y1=y.indexOf(30)
console.log(y1);

// How can you check if a certain value exists in an array?
var x2=[10,20,30,40,50,60];
var x3=x2.includes(30);
var x4=x2.includes(80);
console.log(x3,x4);

// How can you sort the elements of an array in ascending order?
var y2=[20,10,40,50,30];
var y3=y2.sort();
console.log(y3);

// How can you convert an array to a string using commas as separators?
var z=[10,20,30,40,50,60];
var z1=z.join();
console.log(z1);

