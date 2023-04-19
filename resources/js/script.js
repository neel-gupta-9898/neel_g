let nav = document.querySelector(".nav");
let navBar = document.querySelector(".navbar");
let burger = document.querySelector(".burger");
let darkBtn = document.querySelector(".dark-m");
let html = document.querySelector("#html");
let value = html.getAttribute("class");

// Made Navbar Resp

burger.addEventListener("click", () => {
  navBar.classList.toggle("resp");
  nav.classList.toggle("nav-resp");
});

// Made Dark/Light Mode

darkBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
});


// Made savable Dark/Light Mode 


theme = localStorage.getItem("theme");


function getVal() {
  let value = html.getAttribute("class");

  if (value == "dark") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  theme = localStorage.getItem("theme");

}

if (theme == "dark") {
  html.setAttribute("class", "dark");
}
else if(theme == "light") {
  // html.setAttribute("class", "light");
}


setInterval(getVal, 10);
