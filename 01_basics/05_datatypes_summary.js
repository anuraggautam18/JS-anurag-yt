// Primitive ---> call by value  ---> Copy me change hongi chize , Originality me nhiii

// 7 types : String  , Number , Boolean  , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp = null   // (null !=0  it is basicall a hawa )
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)


// Refrence type (Non Premitive) -->  memory ka refrence direct allocate kiya jaa skta hai  -----> means jo bhi change karene main memory me change hoga copied me nhi ,,

// Array , Objects , Functions

const heros = ["anurag" , " anuj" , " mansi"];

let myObj = {
    name: "keshav",
    age: 20,
    // data types to kuch bhi ho skta hai andar boolean etc
}

 const myfunction = function(){
    console.log("Hello ");
 }

 console.log(typeof myfunction);

/* mainly app ye jaan lo ki non primitive data types ka typeof ----- function hi ataaa hai , but function ka type of obj function kahte hai more precisly  */
// sabka typeof nikal sakte ho brooo easily .



/************ MEaMORY *************/
//stack (Primitive) , Heap (Non -Prmitive)

let myYoutubename = "hitesdotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

/* above eg is a perfect example of Stack(primitive memory --> jisme copied value atti hai so original value me koi change nhi hota isse ) */




let userOne = {
    email: "anurag@goole.com" , 
    upi: "anurag@ybl"
}

let userTwo = userOne

userTwo.email = "mayank@google.com"  //access kar rhe hai bhai obj ko 

console.log(userOne.email);
console.log(userTwo.email);

/* above eg is best eg for Heap meamory (Non primitive---> jisme original value ka acces mil jata  hai so original valu ehi change hoti hai isse) */