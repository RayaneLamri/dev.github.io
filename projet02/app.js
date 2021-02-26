const txt = document.querySelector(".todo-text");
const list = document.querySelector(".todo-list");

document.querySelector(".todo-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const num = Date.now();
  list.innerHTML +=
    "<div data-num='" +
    num +
    "' class='todo-item'><li onblur='blurFunction(event)'>" +
    txt.value +
    "</li><button class='button todo-edit' onclick='editFunction(event)'>Edit</button><button onclick='deleteItem(event)' class='button todo-delete'>X</button></div>";
  localStorage.setItem(num, txt.value);
  txt.value = "";
});

function deleteItem(event) {
  if (event.target.className == "button todo-delete") {
    event.target.parentElement.remove();
    localStorage.removeItem(
      event.target.parentElement.getAttribute("data-num")
    );
  }
}

function editFunction(event) {
  event.target.previousSibling.setAttribute("contenteditable", "true");
  event.target.previousSibling.focus();
}

function blurFunction(event) {
  event.target.removeAttribute("contenteditable");
  localStorage.setItem(
    event.target.parentElement.getAttribute("data-num"),
    event.target.innerText
  );
}
