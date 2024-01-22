const accountId = 144553 
let accountEmail ="anurag@google.com"
var accountPassword= "12345"
accountCity= "Jaipur"

// accountId=2  not allowed to change 

accountEmail=" hc@hc.com"
accountPassword="2121112"
accountCity="Rewa"  //Bad practice
let accountState;

console.log(accountId);

/*
prefere not to use var
bcz of issue in block scope And functional scope
*/

console.table([accountId , accountEmail , accountPassword ,accountCity , accountState]);