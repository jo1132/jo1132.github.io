const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    // event.target : the button clicked
    // event.target.parentElement : clicked button's parents
    const li = event.target.parentElement;

    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    // li remove
    li.remove();
    saveToDos();
}

function paintToDo(newToDoObj){
    //when create todo list, li안에 span에 text를 넣고 이를 삭제할 버튼도 만들어준다.
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button")

    // span에 텍스트 넣고 li에 추가하기
    li.appendChild(span);
    span.innerText = newToDoObj.text;

    //button에 텍스트넣고, EventListener넣고 li에 추가
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    //prevent refresh
    event.preventDefault();
    const newTodo = toDoInput.value;
    
    //input refresh
    toDoInput.value = "";

    const newToDoObj = {
        text: newTodo,
        // Date.now()는 현재 시간을 ms로 보여준다.
        // 거의 랜덤넘버로 사용해 id로 사용할 것이다.
        id: Date.now(),
    }
    toDos.push(newToDoObj);

    //create li 
    paintToDo(newToDoObj);

    //Save todo text
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHellos(item){
    console.log(item);
    paintToDo(item)
}
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);

    //two diffrent ways to use function
    //parsedToDos.forEach(sayHellos)
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

