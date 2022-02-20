//#2.13 Conditionals

//prompt() : 사용자 입력을 받는다.
//const age = prompt("How old are you?"); //입력이 들어올대까지 JavaScript를 정지시킨다.
//console.log(age,typeof age) // 입력은 String으로 들어온다.

//타입 변경하기
//console.log(parseInt(age), typeof parseInt(age))

const age = parseInt(prompt("How old are you?"));
console.log(age, typeof age)
console.log(isNaN(age))

if(isNaN(age) || age < 0){
    console.log("Please Input a real positive number");
}
else if(age < 18){
    console.log("You are too young");
}
else if(age >= 18 && age <= 50){
    console.log("You can drink!");
}
else if(age > 50 && age <= 80){
    console.log("You should do some exercise!");
}
else if(age === 100){
    console.log("wow you are wise")
    //==와 ===의 차이점
    // ==는 값만을 비교하고
    // ===는 유형도 비교하여 ==보다 ===를 주로 사용하는걸 추천한다.
    //ex)
    //  0 == false -> false
    //  0 === false -> true
}
else if(age>80){
    console.log("You can do whatever you want")
}