const code = ["php","java","perl","sql"]
/* const values = code.forEach((item) => {
    console.log(item);
    return item;
    
})
 console.log(values); */

 const MyNums = [1,2,3,4,5,6,7,8,9,10];
 /* const NewNums = MyNums.filter((num) => {
    return num > 4
 })
 console.log(NewNums); */

 const Books = [
    {title:"Book one", generation: "Fiction", publish: "1981", edition: "1989"},
    {title:"Book two", generation: "Non-fiction", publish: "1985", edition: "2014"},
    {title:"Book three", generation: "Science", publish: "2000", edition: "2023"},
    {title:"Book four", generation: "Fiction", publish: "1981", edition: "2000"},
    {title:"Book five", generation: "History", publish: "1981", edition: "2012"},
    {title:"Book six", generation: "Non-fiction", publish: "2011", edition: "2016"},
    {title:"Book seven", generation: "Science", publish: "1986", edition: "1996"},
    {title:"Book Eight", generation: "Fiction", publish: "1990", edition: "2017"},
    {title:"Book Nine", generation: "History", publish: "1981", edition: "2000"}
 ]
 const genarationFilter = Books.filter((gf) => gf.generation === "History")
 //console.log((genarationFilter));
 
 const publishfilter =  Books.filter((pf) => {
    //return pf.publish > "2000"
    return pf.publish > "1981" && pf.generation == "Fiction"
 })
 console.log(publishfilter);
 