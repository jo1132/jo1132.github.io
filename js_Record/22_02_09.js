//2.3 const and let

//기본적으로 const를 사용하며,
//변경해야할 변수만 let을 사용한다.
const a = 10;
const b = 2;
//let a = 5;
//let b = 2;

//위 const와 let은 비교적 최근에 사용된것이다.
//기존에는 var만 사용되었다. 
//그러나 앞으로 사용하지 않는것이 좋다.
//var a = 5;
//var b = 2;

//CamelNaming
//const myName = 'JHK';
let myName ='jhk';

//Snake_naming
const my_name = 'JHK';


//2.4 Booleans
//true, false, null, undefined
const amlFat = null;
let something; // undefined
console.log(amlFat);


//2.5 Arrays
const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);

const nonsense = [1, 2, 'hello', false, null, 'jhk'];
console.log(nonsense);
console.log(nonsense[2]) // Get Item from Array

nonsense.push('sun'); // Add on more day to the array
console.log(nonsense);

const toBuy = ['potato', 'tomato', 'pizza']
toBuy.push('kimbab');
console.log(toBuy);


//#2.6 Objects
// Vaiable로 했을때, 보기좋지 않다.
const playerName = 'JHK';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

// array로 했을때도 역시 좋지 않다.
// 인덱스를 일일이 기억해야한다.
const playerArr = [playerName, playerPoints, playerHandsome, playerFat];

//Object로 한다면?
const player = {//중괄호를 사용한다.
    name : "JHK", // Python에서 dictionary처럼 정의한다.
    points : 10,
    fat : true,
};

//player의 정보를 보는 다양한 방법
console.log(player);
console.log(player.name);
console.log(player['name'])

//const지만 object가 아닌 안에 데이터를 바꾸는건 가능하다.
player.fat = false;
console.log(player['fat']);

//object에서 새로운 데이터를 추가하는것도 가능하다.
player.lastName = 'potato';
console.log(player.lastName);

player.points = player.points + 15;
console.log(player.points);