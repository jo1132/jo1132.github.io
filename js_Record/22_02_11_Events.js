//document : html을 function처럼 쓸 수 있다.
// document.title : "Momentum", 이건 html에서 title태그에 저장되어있는 값을 가져온다.
// document.title = "TEST", 타이틀이 TEST로 바뀐다.
document.title = "Hello! From JS"

// #3.1 HTML in Javascript
console.log(document.getElementById("title"))
const title = document.getElementById("title")

//document는 HTML을 그대로 가져오는것이 아니라 object로 가져온다.
//console.dir(title)
//dir을 붙이면 object의 functions들과 property들을 볼 수 있다.
//title.innerText = "Got you~"

//console.log(title.id)
//console.log(title.className)



// #3.2 Searching For Elements
//const title2 = document.getElementsByTagName('hello')
//console.log(title2)

//querySelector : element를 css방식으로 가져올 수 있다.
//querySelector는 조건에 맞는 아이템이 여러개일때 제일 처음 것만 가져오게 된다.
const title2 = document.querySelector(".hello h1")
title2.textContent = "Changed!"
console.log(title2)

const title3 = document.querySelectorAll(".hello h1")
console.log(title3)


// #3.3 Events
console.dir(title2)

//title의 스타일 변경도 할 수 있다.
title2.style.color = 'white'

//이벤트 리스터 부착하기
function handleTitleClick(){
    console.log("title was clicked!")
}
function handleMouseEnter(){
    title2.textContent = "Mouse is here"
}
function handleMouseLeave(){
    title2.textContent = "Mouse is out!"
}
//click 이벤트에 handleTitleclick함수를 실행할 것이다.
//title2.addEventListener("click", handleTitleClick)
//title2.addEventListener("mouseenter", handleMouseEnter)
//title2.addEventListener("mouseleave", handleMouseLeave)



// #3.5 More Events
//위와 같다.
title2.onclick = handleTitleClick;
title2.onmouseenter = handleMouseEnter;
title2.onmouseleave = handleMouseLeave;

//window 이벤트 
function heandleWindowResize(){
    document.body.style.backgroundColor ="tomato"
}
function handleWindowCopy(){
    alert("copy is done!")
}
function handleWindowOffline(){
    alert("SOS no WIFI!")
}
function handleWindowOnline(){
    alert("Welcome to Internet!")
}
window.addEventListener("resize", heandleWindowResize)
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline)
window.addEventListener("online", handleWindowOnline)