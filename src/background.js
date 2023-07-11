const background = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
];

const image = background[Math.floor(Math.random() * background.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${image}`;
bgImage.alt = "background img";
bgImage.classList.add("background");

document.body.appendChild(bgImage);
