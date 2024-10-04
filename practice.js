var a=["mahe","msd","mahe",4,5];
var b=["mahesh",{id:1,name:"kohli"},[1,2,3],"rohith"];
var c=a.concat(b);
var d=c.length;
var e=b.indexOf("mahesh");
console.log(c);
console.log(d);
console.log(e);
var f=c.slice(3,9);
console.log(f);
c.unshift(10,20,30)
console.log(c);
c.push(50,60,70)
console.log(c);
c.shift()
c.shift()
c.shift()
c.shift()
console.log(c);
c.pop()
c.pop()
c.pop()
console.log(c);
var x=[10,20,30,40];
console.log(x.includes(50));
console.log(x.includes(20));
var y="hello how are you";
var y1=y.split(" ");
console.log(y1);
var y2=y1.reverse()
console.log(y2);
var y3=y2.join(" ")
console.log(y3);

