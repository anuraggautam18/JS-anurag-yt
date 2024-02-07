const myArr = [0 ,1 , 2 , 3 ,7 , 8]
const myHeros = ["Anurag" , "KOIBHI"]
//console.log(myArr[0]);

const myArr2 = new Array(1 ,2 ,3, 4)
//console.log(myArr2[1]);

// Array Methods

myArr.push(6)
//console.log(myArr)
myArr.pop()

myArr.unshift(9)  // arrays ke starting me add karna element
myArr.shift() 
//console.log(myArr)

//console.log(myArr.includes(99));  //kya array me 99 present hai ya nhi -->false
//console.log(myArr.indexOf(99));   //if not present then returns -1 is ans 

const newArr = myArr.join()
//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)


/*****  Slice and Splice Methods ******/
// console.log("A" ,   myArr);

// const myn1= myArr.slice(1 , 3)   //3 ka matlb 2nd digit tak print hogi values starting from 0 means 0th 1st and 2nd values will print and 3rd is excluding

// console.log(myn1);
// console.log("B" , myArr);


// const myn2= myArr.splice(1 , 3)  //3 ka matlb 3rd digit tak print hogi values starting from 0 means 0th 1st 2nd and 3rd values will print and none is excluding

// console.log(myn2);
// console.log("C" , myArr);

/*************************  Methods in Arrya  *************************/


const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros= ["superman" , "Flash" ,"batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros); //total 4 element in ans --> bhale hi fourth elem ke subelement present ho
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
/*combine two or more arrays this method returns a new array */
//console.log(allHeros);

/*means jo hamara push methods hai wo existing array me hi change karta hai par jo concate method hai wo new array me change karta hai */

/*Spread operator---> ex-drop kaaach ka glass --spread ho jayega */
const all_new_heros = [...marvel_heros , ...dc_heros]
//console.log(all_new_heros);




const another_array = [1 ,2,3, [4 ,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);

/*coverting another datatypes into an array */
console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag"))
console.log(Array.from({name: "Anurag"}))  //impppppppp hai  --->keys provide karni padegi hame

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));
//console.log(Array.from(score1 , score2 , score3));  //provide a error 



/***********   You dont know array in JAVASCRIPT  ***************/
//until you will not go to the docs of mdn or w3schools