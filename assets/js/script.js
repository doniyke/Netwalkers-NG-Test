var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function openTab(e,tabName) {
    var elems = document.querySelectorAll("button");

    [].forEach.call(elems, function(el) {
        el.classList.remove("open");
    });

    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      x[i].classList.remove("open");
    }
    document.getElementById(tabName).style.display = "block";
    (e).classList.add("open");
}

function toggleNav(){
    let navElement = document.getElementById("side-nav");
    let profileContent = document.getElementById("profile-content")
    navElement.classList.toggle("side-nav-hide")
    profileContent.classList.toggle("profile-content-full")
}