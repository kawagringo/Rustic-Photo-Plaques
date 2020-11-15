//Page loader, spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

//Move Hamburger X to right
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
  });

//Smoth Scroll
document.querySelector(".container").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  });

  //Contact Form move label outside box
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc() {
    let parent = this.parentNode;
    if(this.value == ""){
    }
    parent.classList.remove("focus");
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})


/*
//Hidding menu after click on link
$('.menu .menu-link').on('click', function () {
  $('.hamburger-menu').removeClass('open');
  $('.menu').removeClass('open');
});*/
