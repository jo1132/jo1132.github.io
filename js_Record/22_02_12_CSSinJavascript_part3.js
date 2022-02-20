// #3.6 CSS in Javascript part One
// const h1 = document.querySelector("h1");

// function handleMouseEnter(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }
//     else{
//         newColor = 'blue';
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click",handleMouseEnter);


// #3.7 CSS in Javascript part Two
// const h1 = document.querySelector("h1");
// function handleMouseEnter(){
//     // 클래스이름 오타를 없애기 위해 클래스 이름을 함수로 저장한다.
//     const clickedClass = "clicked";
//     if(h1.className === clickedClass){
//         h1.className = "";
//     }
//     else{
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleMouseEnter)


// #3.8 CSS in JavaScript part Three 
const h1 = document.querySelector("h1");
 function handleMouseEnter(){
     // 클래스이름 오타를 없애기 위해 클래스 이름을 함수로 저장한다.
     const clickedClass = "clicked";

     // h1.classlist.contains() : 명시한 class가 h1의 class들중에 포함되어있는지 체크 가능하다.
     //if(h1.classList.contains(clickedClass)){
        //h1의 classList에서 클래스를 삭제한다. 
       // h1.classList.remove(clickedClass);
     //}
     //else{
         //h1의 classList 에서 clickedClass를 추가한다.
      //   h1.classList.add(clickedClass)
     //}

     //toggle사용 : toggle은 있으면 삭제, 없으면 추가한다.
     h1.classList.toggle(clickedClass);
 }

 h1.addEventListener("click", handleMouseEnter)