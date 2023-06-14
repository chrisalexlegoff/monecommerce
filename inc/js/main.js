/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
  let nav = document.querySelector("#myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

function previewImage() {
  var preview = document.getElementById("preview");
  var fileInput = document.getElementById("photo");
  var file = fileInput.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    preview.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
