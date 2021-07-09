import "./styles/contacts.css";
import "./styles/examples.css";
import "./styles/intro-page.css";
import "./styles/list.css";
import "./styles/page.css";
import "./styles/profile-page.css";
import "./images/ann-large.jpeg";
import "./images/ann-med.jpeg";
import "./images/ann-small.jpeg";
import "./images/book.svg";
import "./images/brain.svg";
import "./images/cafe_man.svg";
import "./images/EktVNDbYSSg-01.jpg";
import "./images/mailing.svg";
import "./images/money.svg";
import "./images/VK.com-logo.svg";
import "./images/writing.ico";

let link = document.querySelector(".intro-page__nav");
let animationTime = 1500;

link.style.transitionDuration = `${animationTime}ms`;
setInterval(() => {
  link.style.bottom = link.style.bottom === "" ? "5px" : "";
}, animationTime);

let posts = document.getElementsByClassName("post");

Array.from(posts).forEach((element, index) => {
  let content = element.querySelector(".post__content");
  let expandButton = element
    .querySelector(".post__expander")
    .addEventListener("click", function (e) {
      this.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
});
