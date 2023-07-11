const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  //const dayOrNight = date.getHours() > 11 ? "PM" : "AM";
  clock.innerHTML = `${hours}:${min}:${sec}`;
}

// function getClock() {
//   clock.innerText = new Date().toLocaleTimeString();
// }

getClock();
setInterval(getClock, 1000);
