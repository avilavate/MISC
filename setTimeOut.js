"use strict";
/*class Toppings {
    constructor(toppings) {
        this.toppings = Array.isArray(toppings) ? toppings : [];
    }
    outputList() {
        this.toppings.forEach((topping, i) => {
            console.log(topping, i + '/' + this.toppings.length); // `this` will be undefin
        });
    }
}
var myToppings = new Toppings(['cheese', 'lettuce']);
myToppings.outputList();
*/
var i;
for (i = 0; i < 10; i += 1) {
let j = i;
let k = i;
}
console.log(j); // 9
console.log(k); // undefined