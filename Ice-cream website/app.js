const menu = document.querySelector("#bars");
const navbar = document.querySelector(".navbar");
// const links = document.querySelector(".links");

// menu.addEventListener("click", function () {
//   //console.log(links.classList.contains('something'));
//   // console.log(links.classList.contains("fa-bars"));
//   // if (links.classList.contains("fa-bars")) {
//   //   links.classList.remove("fa-bars");
//   // } else {
//   //   links.classList.add("fa-bars");
//   // }
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// });

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
console.log("it work!!");
