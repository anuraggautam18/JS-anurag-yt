const name = "Anurag"
const cgpa = 8

// console.log(name + cgpa + " notgood");
console.log(" Hello my name is ${name} and my cgpa is ${cgpa} ");


const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);   //h
console.log(gameName.__proto__);  //{}  matalb bata rha hai ki obj hai 

console.log(gameName.length)    //8
console.log(gameName.toUpperCase())  //HITESHHC -->but dhyan rhe original value me kuch change nhi huya hai
console.log(gameName.charAt(4));  //s
console.log(gameName.indexOf("t")); //2

const newString = gameName.substring(0 , 4 )
console.log(newString);  //hite

const anotherString = gameName.slice(-8 , 4) //neg value kewal slice me hi use kr skte hai
console.log(anotherString); //ite      


const newStringone ="     hitesh     "
console.log(newStringone);    
console.log(newStringone.trim());  //bina space ke ajata hai REFER MDN PLESSSSS


const url = "https://hitesh.com/hitesh%20gautam"

console.log(url.replace('%20' , '-'));

console.log(gameName.split('-'));