window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#010127";
    } else {
        header.style.backgroundColor = "transparent";
    }

    if (window.scrollY > 1000) {
    header.style.transform = "translateY(-100%)";
    header.style.transition = "transform 0.3s ease";
  }
 
  if (window.scrollY < 1000) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.transform = "translateY(0%)";
  }
});

const burgerButton = document.getElementById('burger');
const navList = document.querySelector('.nav-list');
const closeButton = document.getElementById('close-burger');


burgerButton.addEventListener('click', () => {
  navList.classList.add('active');  
});

closeButton.addEventListener('click', () => {
  navList.classList.remove('active');  
});


document.getElementById('scroll-up-container').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});