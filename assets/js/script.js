// Mobile Functionality: Responsive Navbar

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const navUl = document.getElementById("nav-ul");
    const home = document.getElementById("home");

    toggleMenuButton.addEventListener("click", function () {
        
        navUl.classList.toggle("show");
        toggleMenuButton.classList.toggle("active");

        if (navUl.classList.contains("show")) {
            home.style.paddingTop = "310px";
        } else {
            home.style.paddingTop = "85px";
        }

        window.addEventListener("resize", function () {
            if (window.innerWidth <= 769) {
                home.style.paddingTop = "250px";
            } else {
                home.style.paddingTop = "200px";
            }
        });
    });
});

// Functionality for Every View: Modal View 

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