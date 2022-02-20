// #4.0 Input Value
// #4.1 Form Submission
// #4.3 Events part Two
// #4.4 Getting Username
// #4.6 Loading Username

//const loginForm = document.querySelector("#login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenClassName = "hidden";
const link = document.querySelector("a")

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // 어떤 이벤트의 기본행동을 막아준다.
    // 기본행동 : 어떤 fumction에 대해 브라우저가 기본적으로 수행하는 동작.

    //hidden 클래스에는 display:none; 이 있다.
    loginForm.classList.add(hiddenClassName);

    //    console.dir(loginInput);
    // loginput 의 값을 가져오기 위해 console.dir(loginInput)해서 안에 property를 살펴본다.
    //console.log(loginInput.value)
    const value= loginInput.value;

    //브라우저에서 지원하는 localStorage를 사용한다. 
    localStorage.setItem(USERNAME_KEY, value);
    // 문자열에 변수를 넣고싶으면 따옴표가 아닌 ` (~)키에 있는거 로 입력하면된다.
    greeting.innerText = `Hello ${value}`;
    
    paintGreetings();
}

//loginForm.addEventListener("submit", onLoginSubmit);

function handleLinkClick(event){
    //a 태그의 기본 행동은 페이지 이동이다.
    event.preventDefault();
    alert("Click!");
    console.log(event)
}
link.addEventListener("click",handleLinkClick);
//onLoginSubmit({argument})를 호출하게 될때, argument로 발생할 일에 대한 정보를 준다.
//EventListener functino의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 제공된다.
// 어떤 Event로 들어왔는지 나오게 된다.


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.classList.remove(hiddenClassName);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//브라우저 localStorage에 저장된 username이 없다면
if(savedUsername === null){
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{paintGreetings();}