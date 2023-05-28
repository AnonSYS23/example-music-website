//selecting elements
const menuBtn = document.querySelector("header button");
const playBtns = document.querySelectorAll(".play-button button");

//adding click event to menu button
menuBtn.addEventListener("click", () => {
  //toggle a class to show/hide the menu
  document.querySelector(".section3").classList.toggle("show-menu");
});

//adding click event to each play button
playBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    //Code to play the selected album
  });
});
