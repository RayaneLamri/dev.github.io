const txt = document.querySelector(".todo-text");
const list = document.querySelector(".todo-list");

document.querySelector(".todo-submit").addEventListener("click", (e) => {
  e.preventDefault();
  list.innerHTML += "<div class='todo-item'><li onblur='blurFunction(event)'>" + txt.value + "</li><button class='button todo-edit' onclick='editFunction(event)'>Edit</button><button class='button todo-delete' onclick='deleteFunction(event)'>X</button></div>";
  txt.value = ""; 
  back();
})

function deleteFunction(event) {
  event.target.parentElement.classList.toggle("todo-anim");
  event.target.parentElement.addEventListener("transitionend", deleteItem); 
}

function deleteItem(){
  this.remove();
  back();
}

function editFunction(event){
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
