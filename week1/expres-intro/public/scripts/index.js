let i = 6;
function addLi() {
  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.innerText = i;
  i++;

  ul.appendChild(newLi);
}

document.querySelector("#button").onclick = addLi;
