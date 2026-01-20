/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("Apr")
        break;

    default:
        console.log("default code match")
        break;
}

//truthy values
const userEmai = []; //'test@gmail.com'
if(userEmai){
    console.log("Got value")
} else {
    console.log("Do not get value")
}

//falsy values
// 0 , -0, BigInt 0N, NAN, '', NULL, undefined 

//truthy values
//"0",  'flase', " ", [],  {}, function(){} 

if(userEmai.length===0){
     console.log("empty arrays")
}

const emptyArr = {}
if(Object.keys(emptyArr).length===0){
    console.log("Object is empty")
}


//let val1 = 5 ?? 10;

//let val1 = null ?? 10;
//let val1 = undefined ?? 10;

let val1 = null ?? 10 ?? 15;

console.log(val1);

//Ternary Operatior
// condition ? true : false
const price = 100;
price >= 80 ? console.log("price greater than 80") :  console.log("price less than 80")