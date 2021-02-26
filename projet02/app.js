const txt = document.querySelector(".todo-text");
const list = document.querySelector(".todo-list");

document.querySelector(".todo-submit").addEventListener("click", (e) => {
  e.preventDefault();
  const num = Date.now()
  const div = document.createElement("div");
  div.setAttribute("data-num",num);
  div.setAttribute("class","todo-item");  
  div.innerHTML += "<li onblur='blurFunction(event)'>" + txt.value + "</li><button class='button todo-edit' onclick='editFunction(event)'>Edit</button><button onclick='deleteItem(event)' class='button todo-delete'>X</button>";
  list.insertBefore(div, list.childNodes[0]);
  localStorage.setItem(num,txt.value);
  txt.value = "";
});

function deleteItem(event) {
  if(event.target.className == "button todo-delete") {
    event.target.parentElement.remove();
    localStorage.removeItem(event.target.parentElement.getAttribute("data-num"));
  } 
}

function editFunction(event) {
  event.target.previousSibling.setAttribute("contenteditable","true");
  event.target.previousSibling.focus();
}

function blurFunction(event) {
  event.target.removeAttribute("contenteditable");
  localStorage.setItem(event.target.parentElement.getAttribute("data-num"),event.target.innerText);
}

function back() {
  let keys = Object.keys(localStorage);
  //if(keys.length !== 0){    
  for (let key of keys) {
    const div2 = document.createElement("div");
    div2.setAttribute("data-num",key);
    div2.setAttribute("class","todo-item");  
    div2.innerHTML += "<li onblur='blurFunction(event)'>" + localStorage[key] + "</li><button class='button todo-edit' onclick='editFunction(event)'>Edit</button><button onclick='deleteItem(event)' class='button todo-delete'>X</button>";
    list.insertBefore(div2, list.firstChild);
  };
};
//};

back();
