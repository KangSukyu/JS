const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

//https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
