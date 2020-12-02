menu.onclick = function myFunction() {
var x = document.getElementById('menuwrap');
 if (x.className === "menu-wrapper") {
  x.className += " responsive";
 } else {
  x.className = "menu-wrapper";
 }
}