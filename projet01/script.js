let full;

setInterval(monAffichage, 1000);

function monAffichage() {
  full = new Date();
  document.getElementById("demo").innerHTML =
    (full.getHours() < 10 ? "0" + full.getHours() : full.getHours()) +
    ":" +
    (full.getMinutes() < 10 ? "0" + full.getMinutes() : full.getMinutes()) +
    ":" +
    (full.getSeconds() < 10 ? "0" + full.getSeconds() : full.getSeconds());
}
