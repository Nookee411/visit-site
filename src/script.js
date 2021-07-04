let link = document.querySelector(".intro-page__nav");

let animationTime = 1500;

link.style.transitionDuration = `${animationTime}ms`;
setInterval(() => {
  link.style.bottom = link.style.bottom === "" ? "5px" : "";
}, animationTime);

let posts = document.getElementsByClassName("post");

for (let post of posts) {
  let expandButton = post.querySelector(".post__expander");
  let content = post.querySelector(".post__content");
  let cross = post.querySelector(
    ".post__expander span,.post__expander span:after"
  );
  if (expandButton.tagName === "BUTTON") {
    expandButton.addEventListener("click", function (e) {
      this.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
