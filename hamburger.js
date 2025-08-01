const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navbar");

const page1 = document.querySelector(".page1")
const page2 = document.querySelector(".page2")
const textbox1 = document.querySelector(".textbox-1")
const textbox2 = document.querySelector(".textbox-2")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
})

document.querySelectorAll(".header-button").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("active");
  })
)

function activatePage1(){
  textbox1.classList.toggle("active")
}

page1.addEventListener("click", () => {
  textbox1.classList.toggle("active");
  textbox2.classList.remove("active");
})

page2.addEventListener("click", () => {
  textbox1.classList.remove("active");
  textbox2.classList.toggle("active");
})