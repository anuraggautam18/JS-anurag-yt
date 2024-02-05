const score = 400
console.log(score) // 400-->by default maaan leta hai number me hi hai 

const balance = new Number(100)
console.log(balance); // Number:400 ---> iss tarh se print hoga bata kar ke

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //precision value me ans ayega 

const otherNumber =23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber1 =123.8966
console.log(otherNumber1.toPrecision(3));

const otherNumber2 =1123.8966
console.log(otherNumber2.toPrecision(3)); 

//we have to noticed this thing --precision value gives the priority of number from L to R upto given precision digit 
//jo bhi find krna ho likh do bas aur mdn se padh lo 

/*************** Maths ******************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));  //ceil and floor bhi hote hai
console.log(Math.min(4 , 5 , 7 ,2 ));

console.log(Math.random());  //always in between 0 and 1
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);  //0 ko avoid karne ke liye bcz 0 point something bhi askta hai 
console.log(Math.floor(Math.random()*10) + 1); //roundoff in lowest value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min  + 1)) + min)