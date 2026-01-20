const user = {
    username:"aranya",
    price: "999",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username="Sam";
// user.welcomeMessage();

 //console.log(this);

//  function one(){
//     let username="Aranya D"
//      console.log(this.username);
//  }



// const one = function(){
//     let username="Aranya D"
//     console.log(this);

// }

//arrow function start
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
//const addTwo = (num1,num2) => ( num1 + num2 )

const addTwo = (num1,num2) => ({username:"Shyam"}) //for object return you should use parentheses ()
 console.log(addTwo(3,4));

 const obj1 = {
    name:"JS",
    show: function(){
        const arrow = () =>{
            console.log(this.name);
            
        }
        arrow();
    }
 }

 obj1.show(); // JS

 const obj2 = {
  name: "Js Obj",
  getName: () => {
    console.log(this.name);
  }
};

obj2.getName(); //undefined
//Reason : (i) Arrow function doesn’t have its own this.
//(ii) It takes this from global scope → this.name is undefined.

const obj3 ={
    name:"React",
    getName(){
        const arrow = () => {
            console.log(this.name);
        };
        arrow();
    }
}
obj3.getName(); // React
//Reason: Arrow function inherits this from getName().

function test(){
    this.a=10;
    setTimeout(() => {
        console.log(this.a);
    },1000);
}
new test(); //10
//Reason: Arrow function captures this from constructor function.

function test1(){
    this.a = 10;
    setTimeout(function(){
        console.log(this.a);
    },1000);
}
new test1(); // undefined
//Reason: Regular function gets its own this (not constructor’s).