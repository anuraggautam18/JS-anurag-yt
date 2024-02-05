let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
/* these all aboves are methods to find a date in different pattern */


console.log(typeof myDate);   //object 

/*** Note : Date eak object hai --> means ham usse kuch bhi nikal skte hai jo chahe dot ka use krke  */

let myCreatedDate = new Date(2023 , 0 , 23)  //months 0 se start hota hai js me bcz array hai na bro
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate1 = new Date(2023 , 0 , 23 , 5 , 3) 
// console.log(myCreatedDate1);
// console.log(myCreatedDate1.toLocaleString());

// let myCreatedDate2 = new Date("01-14-2023")  //mm-dd-yy
// console.log(myCreatedDate2);
// console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());  // since date is obj so ham usse value nikal rahe hai dot ka use krke 
console.log(Date.now()/1000);  //second me convert krne kke liye 1000 se divide kiya***************
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()); 
//anything u want you will get it by the use of dot bcz of date is object 

'${newDate.getDay()} and the time '

/********* IMPORTANT hai ye *******/
newDate.toLocaleString('default' , {
    // control space press krne me suggestion deta hai badhiya
    weekday: "long",  
})
