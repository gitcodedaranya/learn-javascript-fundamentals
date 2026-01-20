// const temparature = 41
// if(temparature < 50){
//     console.log("temparature is less than 50")
// } else {
//  console.log("temparature is executed")
// }

// < , >, <=, >=, ==, !=, !==, ===, 

/* const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power: ${power}`)
} */

//console.log(`User Power after statement: ${power}`)

const balance = 1000;
// if(balance > 500) console.log("test"), console.log("test2"); // do not use

//nested statemenr

/* if(balance < 500) {
 console.log("Less than 500")
} else if(balance < 750){
    console.log("Less than 750")
} else {
     console.log("Less than 1200")
} */

const userLoggedIn = true;
const debtCard = true;
const isLooggedinFromGoogle = false;
const isLooggedinFromEmail= true
if(userLoggedIn && debtCard && 2==2){
    console.log("Allow to buy course");
}
if(isLooggedinFromGoogle || isLooggedinFromEmail){
    console.log("Yes log in");
}