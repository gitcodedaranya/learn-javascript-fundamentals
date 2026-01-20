(function(){
    console.log("IIFE execute");
})();

(() => {
console.log("IIFE executed in arrow function");

})();

(function(name){ //Pass Arguments to IIFE
    console.log("Hello "+name);
})("Aranya");

const counter = (function(){
    let value = 0;
    return {
        increment(){
        value++;
        return value;
        },
        decrement(){
            value--;
            return value;
        }
    };
})();
counter.increment(); 