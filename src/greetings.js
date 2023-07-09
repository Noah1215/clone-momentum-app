const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const loginButton = loginForm.querySelector("button");

const USERNAME_KEY = "username";

function handleSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add("hidden");
  paintGreeting(userName);
}

//   innerHTML vs innerText
function paintGreeting(userName) {
  greeting.innerHTML = `Hello ${userName}`;
  greeting.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleSubmit);
} else {
  paintGreeting(savedUsername);
}
