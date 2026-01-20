// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=0; i<10; i++){
//     const element = i;
//     if(element==5){
//         console.log("5 is best no");
//     }
//     console.log(element);
// }

for(let i=1; i<=10; i++){
    //console.log(`Outer loop is ${i}`)
    for(let j=1; j<=10; j++){
       // console.log(`Innerloop value is ${j} and inner loop value is ${i}`)
      // console.log(i + '*'+ j + '='+ i*j)
    }
}

let myArray = ['Math','Physics','Stat'];
for(let index=0;index<myArray.length;index++){
   // console.log(myArray[index])
}

/* for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index==5){
        console.log("Detect 5")
        break;
    }
    console.log(`value of i is ${index}`)
    
} */

 for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index==5){
        console.log("Detect 5")
        continue;
    }
    console.log(`value of i is ${index}`)
    
}