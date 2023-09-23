const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const ul = document.getElementById("nav-ul");

openMenuButton.addEventListener("click", () => {
    closeMenuButton.style.visibility = "visible";
    ul.style.display = "block";
    closeMenuButton.style.display = "block";
    openMenuButton.style.display = "none";
});

closeMenuButton.addEventListener("click", () => {
    ul.style.display = "none";
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "block";
});