// for of

[" ", "", ""]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`)
}
//Map
const map = new  Map();
map.set("In","India");
map.set("UK","United Kingdom")
map.set("FR","France")
//console.log(map)

for (const [key, value] of map) {
    console.log(key, ":-" ,value)
}
// ** iteration is not possible for map

//Object
const myObject = {
    sub1: 'Math',
    sub2: 'Phsics',
    sub3: 'Bio'
}
// for (const [key,value] of myObject) {
//     console.log(key,":-",value)
    
// }  //Not working

for (const key in myObject) {
    //if (!Object.hasOwn(object, key)) continue;
      //console.log(key);
    
     console.log(`${key} value is short form for ${myObject[key]} `)
}

//Array
const progrmming = ["js","php","python"];
for (const key in progrmming) {
   
   //console.log(key);
   console.log(progrmming[key])
   
}