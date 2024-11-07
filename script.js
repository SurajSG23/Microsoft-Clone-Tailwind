const hamburger = document.getElementsByClassName("hamburger")[0];
const contents = document.getElementsByClassName("contents")[0];
contents.childNodes[1].style.left="-200px"
let flag = false;
hamburger.addEventListener("click", () => {
  if (flag) {
    flag = false;
    contents.style.visibility = "hidden";
    contents.childNodes[1].style.left='-200px'
  } else {
    flag = true;
    contents.style.visibility = "visible";
    contents.childNodes[1].style.left='2px'
  }
});
