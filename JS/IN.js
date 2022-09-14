function ShowMenu() {
  let menu = document.querySelector(".container-aside"),
      btnShowMenu = document.querySelector(".containerMain-ShowMenu");
  menu.classList.toggle("showMenu");
  if (btnShowMenu.innerHTML == "<i class=\"bi-list\"></i>")
      btnShowMenu.innerHTML = "<i class=\"bi-x-lg\"></i>";
  else
      btnShowMenu.innerHTML = "<i class=\"bi-list\"></i>";
}

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
  $(".slide-up").click(function(){
      $(".box").slideUp();
  });
  $(".slide-down").click(function(){
      $(".box").slideDown();
  });
});

function ShowMenu() {
  let menu = document.querySelector(".container-aside"),
      btnShowMenu = document.querySelector(".containerMain-ShowMenu");
  menu.classList.toggle("showMenu");
  if (btnShowMenu.innerHTML == "<i class=\"bi-list\"></i>")
      btnShowMenu.innerHTML = "<i class=\"bi-x-lg\"></i>";
  else
      btnShowMenu.innerHTML = "<i class=\"bi-list\"></i>";
}

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

