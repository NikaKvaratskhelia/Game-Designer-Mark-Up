const section = document.querySelector(".section1");
const images = ["Images/bg1.jpg", "Images/bg2.jpg", "Images/bg 3.jpg"];
let index = 0;

function changeBackground() {
  index = (index + 1) % images.length;

  let backgroundWrapper = section.querySelector(".background-wrapper");
  if (!backgroundWrapper) {
    backgroundWrapper = document.createElement("div");
    backgroundWrapper.classList.add("background-wrapper");
    section.appendChild(backgroundWrapper);
  }

  backgroundWrapper.style.setProperty("--bg-img", `url('${images[index]}')`);
  backgroundWrapper.style.opacity = 0;

  setTimeout(() => {
    backgroundWrapper.style.backgroundImage = `url('${images[index]}')`;
    backgroundWrapper.style.opacity = 1;
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
  let backgroundWrapper = section.querySelector(".background-wrapper");
  if (!backgroundWrapper) {
    backgroundWrapper = document.createElement("div");
    backgroundWrapper.classList.add("background-wrapper");
    section.appendChild(backgroundWrapper);
  }
  backgroundWrapper.style.backgroundImage = `url('${images[index]}')`;
  backgroundWrapper.style.opacity = 1; 
});

setInterval(changeBackground, 10000);
