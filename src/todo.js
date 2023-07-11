const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let toDos = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintToDo(todo) {
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerHTML = todo.text;
  const button = document.createElement("button");
  button.innerHTML = "🗑️";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  // if (toDos.length < 8) {
  //   todoInput.value = "";
  //   const newTodoObj = {
  //     text: newTodo,
  //     id: Date.now(),
  //   };
  //   toDos.push(newTodoObj);
  //   paintToDo(newTodoObj);
  //   saveTodo();
  // } else {
  //   alert("You can not add 'todo' more than 8, delete one!");
  // }
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleSubmit);

const savedTodo = localStorage.getItem("todos");

if (savedTodo) {
  const parsedTodos = JSON.parse(savedTodo);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}
