const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

const toDos = [];

function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = todo;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);

  todoList.appendChild(li);
}

function handleSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveTodo();
}

todoForm.addEventListener("submit", handleSubmit);
