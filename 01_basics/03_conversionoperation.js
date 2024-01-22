let score = 33
let Score= "33"

console.log(typeof score);
console.log(typeof Score);

// but we want Score --convert ho jaye string se number me 
let valueInNumber = Number(Score)
console.log(typeof valueInNumber);
console.log( valueInNumber);

//but agar hamne 33 ko 33abc kar diye tab dekhte hai 
let Score2= "33abc"
let valueInNumber2 = Number(Score2)
console.log(typeof valueInNumber2);
console.log( valueInNumber2);

//33abc ko agar Null kar diya tab dekhte hai
let Score3= null
let valueInNumber3 = Number(Score3)
console.log(typeof valueInNumber3);
console.log( valueInNumber3);


//null ko agar undefined kar diya tab dekhte hai
let Score4= undefined
let valueInNumber4 = Number(Score4)
console.log(typeof valueInNumber4);
console.log( valueInNumber4);

//undefined ko agar Anurag kar diya tab dekhte hai
let Score5= "Anurag"
let valueInNumber5 = Number(Score5)
console.log(typeof valueInNumber5);
console.log( valueInNumber5);


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=> true; 0=>false;
// ""=> false
//"Anurag" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);