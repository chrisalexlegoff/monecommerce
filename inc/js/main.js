/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  let nav = document.querySelector("#myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}
