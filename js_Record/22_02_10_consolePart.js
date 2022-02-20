// #2.7 Functions part One
function sayHello(arg, age){
    console.log("Hello my name is " + arg + " and I'am " + age);
}

sayHello('nico', 10)
sayHello('dal', 23)
sayHello('lynn', 21)

//#2.8 Functions part Two
function plus(a, b){
    console.log(a+b);
}
plus(1, 2)
plus('a','b')

function divide(a, b){
    console.log(a / b);
}
divide(98, 20)

const player = {
    name : "JHK",
    sayHelloSecond: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHelloSecond("lynn");
player.sayHelloSecond("nico");


// #2.9 Recap
// #2.10 Recap2
const player2 = {
    name: 'Nico',
    age : 98,
};

player2.name = "JoHyeon";
console.log(player2);

player2.sexy = "soon";
console.log(player2)

const calculator = {
    add : function (a, b){
        console.log(a + b);
    },
    sub : function (a, b){
        console.log(a - b);
    },
    divide : function (a, b){
        console.log(a / b);
    },
    multi : function (a, b){
        console.log(a * b);
    },
    pow : function(a, b){
        console.log(a**b);
    }
};

calculator.add(1,2);
calculator.divide(2232, 3);
calculator.sub(10, 20);
calculator.multi(123, 10000);
calculator.pow(2, 3);


// #2.11 return
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge)

