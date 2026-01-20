const coding = ["php","java","python"]
coding.forEach(function(item){
   // console.log(item);
    
})

coding.forEach((val) => {
   // console.log(val);
    
})

function printMe(item){
    console.log(item);
}
//coding.forEach(printMe)
coding.forEach((item, index,arr) => {
   //console.log(item, index,arr);
   
})

const MyCodingArr = [
    {
        courseName: "MERN Stack",
        courseTime: "six month"
    },
    {
        courseName: "MEEN Stack",
        courseTime: "five month"
    },
    {
        courseName: "Php",
        courseTime: "two month"
    }
    
]

MyCodingArr.forEach((item) => {
    console.log(item.courseName);
    
})