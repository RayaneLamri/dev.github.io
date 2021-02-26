const txt = document.querySelector(".todo-text");
const list = document.querySelector(".todo-list");

document.querySelector(".todo-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  div.setAttribute("class","todo-item");  
  div.innerHTML = "<li onblur='blurFunction(event)'>" + txt.value + "</li><button class='button todo-edit' onclick='editFunction(event)'>Edit</button><button onclick='deleteItem(event)' class='button todo-delete'>X</button>";
  list.appendChild(div);
  txt.value = "";
  back();
})

function deleteItem(event) {
  event.target.parentElement.remove(); 
  back();
}

function editFunction(event) {
  event.target.previousSibling.setAttribute("contenteditable","true");
  event.target.previousSibling.focus();
  back();
}

function blurFunction(event) {
  event.target.removeAttribute("contenteditable");
  back();
}

function back() {
  localStorage.toDolist = list.innerHTML;
}

function reload() {
  if(localStorage.toDolist !== undefined) {
    list.innerHTML = localStorage.toDolist;
  }
}

reload();
