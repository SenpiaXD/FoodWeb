// Mobile Functionality

const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const ul = document.getElementById("nav-ul");
const home = document.getElementById("home");

openMenuButton.addEventListener("click", () => {
    closeMenuButton.style.visibility = "visible";
    ul.style.display = "block";
    closeMenuButton.style.display = "block";
    openMenuButton.style.display = "none";
    home.style.paddingTop = "310px";
});

closeMenuButton.addEventListener("click", () => {
    ul.style.display = "none";
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "block";
    home.style.paddingTop = "85px";
});


// Modal View

const modalClose = document.getElementById("modal-close");
const modal = document.getElementById("modal");

modalClose.addEventListener("click", () => {
    // close a modal
    modal.style.display = "none";
});

function modalShow() {
    // showing a modal
    modal.style.display = "block";
}