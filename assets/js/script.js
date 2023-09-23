const openMenuButton = document.getElementById("open-menu");
const closeMenuButton = document.getElementById("close-menu");
const ul = document.getElementById("nav-ul");
const home = document.getElementById("home");

openMenuButton.addEventListener("click", () => {
    closeMenuButton.style.visibility = "visible";
    ul.style.display = "block";
    closeMenuButton.style.display = "block";
    openMenuButton.style.display = "none";
    home.style.paddingTop = "270px";
});

closeMenuButton.addEventListener("click", () => {
    ul.style.display = "none";
    closeMenuButton.style.display = "none";
    openMenuButton.style.display = "block";
    home.style.paddingTop = "85px";
});