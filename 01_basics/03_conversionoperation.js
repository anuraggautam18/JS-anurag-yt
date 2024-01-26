/* 
let score = 33
let Score= "33"

console.log(typeof score);  //number
console.log(typeof Score);  //string

// but we want Score --convert ho jaye string se number me 
let valueInNumber = Number(Score)
console.log(typeof valueInNumber);  //number
console.log( valueInNumber);

//but agar hamne 33 ko 33abc kar diye tab dekhte hai 
let Score2= "33abc"
let valueInNumber2 = Number(Score2)
console.log(typeof valueInNumber2);   //number
console.log( valueInNumber2);         //nan bcz 33abc is not a number 

//33abc ko agar Null kar diya tab dekhte hai
let Score3= null
let valueInNumber3 = Number(Score3)
console.log(typeof valueInNumber3); //number
console.log( valueInNumber3);       //0


//null ko agar undefined kar diya tab dekhte hai
let Score4= undefined
let valueInNumber4 = Number(Score4)
console.log(typeof valueInNumber4);  //number
console.log( valueInNumber4);        //nan

//undefined ko agar Anurag kar diya tab dekhte hai
let Score5= "Anurag"
let valueInNumber5 = Number(Score5)
console.log(typeof valueInNumber5);  //number
console.log( valueInNumber5);      //nan bcz bro string kaise no ho skta hai 


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);    true

//1=> true; 0=>false;
// ""=> false
//"Anurag" => true    omgggggggg

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);    

*/


/**********************           OPERATIONS     **********************/
let value = 3
let negvalue = -value
console.log(negvalue)

let str1 = "Anurag"
let str2 =" always"
let str3= " loveu"
let str4= str1+str2+str3
console.log(str4)

console.log( "1" + 2);
console.log( 1 + "2");
console.log( "1"+ 2 +2);
console.log( 1+ 2 +"2");  //very bad practice to write this way of code
console.log( "1"+ 2 +"2");

let gamecounter =100
gamecounter++  //post fix--> uses ke baad value inc hogi 
console.log(gamecounter);