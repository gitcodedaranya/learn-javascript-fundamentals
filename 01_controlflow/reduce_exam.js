const nums = [1,2,3]

/* const MyTotal = nums.reduce(function(acc,currval){
    console.log(`acc: ${acc} & currVal: ${currval}`);
    
    return acc+currval;
},0) */

const MyTotal = nums.reduce((acc,currval) => acc+currval , 0)
//console.log(MyTotal);

const shoppingCart = [
    { itemname:"Js Course", price: 2999 },
    { itemname:"Python Course", price: 999 },
    { itemname:"mobile app Course", price: 10000 },
    { itemname:"Data Science Course", price: 12999 }

]
const shoppingCartTotal = shoppingCart.reduce((acc , item) => acc + item.price, 0)
console.log(shoppingCartTotal);

