const patt = [/^(?=.*[a-z])/, /(?=.*[A-Z])/, /(?=.*[0-9])/, /.{8,}$/];

document.addEventListener("click", (e) => {
  if (e.target.classList[0] == "tab-anchor") {
    for (
      let i = 0;
      i < document.getElementsByClassName("tab-anchor").length;
      i++
    ) {
      document
        .getElementsByClassName("tab-anchor")
        [i].classList.remove("active");
      document.getElementsByClassName("item")[i].style.display = "none";
    }
    e.target.classList.add("active");
    for (let j = 0; j < document.getElementsByClassName("item").length; j++) {
      if (
        document.getElementsByClassName("tab-anchor")[j].classList[1] ==
        "active"
      ) {
        document.getElementsByClassName("item")[j].style.display = "flex";
      }
    }
  }
});

function myParam(element) {
  for (let k = 0; k < patt.length; k++) {
    if (!patt[k].test(element.value)) {
      document.getElementsByTagName("p")[k].style.display = "block";
    } else {
      document.getElementsByTagName("p")[k].style.display = "none";
    }
  }
}

function myGet() {
  for (const [key, value] of Object.entries(localStorage)) {
    if (
      document.getElementById("login-username").value ==
        JSON.parse(value).username &&
      document.getElementById("login-password").value ==
        JSON.parse(value).password
    ) {
      location.reload();
    }
  }
}

function mySet() {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      document.getElementById("signin-username").value
    ) &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(
      document.getElementById("signin-password").value
    ) &&
    document.getElementById("signin-password").value ==
      document.getElementById("signin-confirmation").value
  ) {
    localStorage.setItem(
      Date.now(),
      JSON.stringify({
        username: document.getElementById("signin-username").value,
        password: document.getElementById("signin-password").value,
      })
    );
  }
}

function myRemove() {
  for (const [key, value] of Object.entries(localStorage)) {
    if (
      document.getElementById("remove-username").value ==
      JSON.parse(value).username
    ) {
      localStorage.removeItem(key);
    }
  }
}
