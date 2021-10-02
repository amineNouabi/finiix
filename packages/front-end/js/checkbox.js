
let checkbox = document.querySelector("#nav-toggle");

function toggleNav(){
  if(screen.width <= 600)
    checkbox.checked = false;
}