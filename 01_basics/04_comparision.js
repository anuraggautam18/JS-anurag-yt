 // > , < , = , !=  these are the compairision a

// Do no compair two different data types

// console.log( "2" > 1);   /* TRUE bcz js automatically converts string into no in this case */
// console.log( "02" > 1);

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

// The reason of above variations is that an equality check == ,, and comparision > , < , >=, <= work differently . Compairison convert null to the number treating it as 0. Thats why 3rd one is true and first two are false

console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false 

// ===                  Strict check
console.log("2" === 2);
