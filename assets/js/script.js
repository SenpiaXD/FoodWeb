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

var jsonDataArray = [
    {
        name: "Ronnel Cepada",
        strand: "Culinary Arts",
        id: "02000123456",
        role: "Researcher",
        imageUrl: "./assets/img/ronnel.jpg"
    },
    {
        name: "Fernando Villanueva Jr.",
        strand: "Information Technology",
        id: "02000567329",
        role: "FrontEnd/BackEnd",
        imageUrl: "./assets/img/shizuku.jpg"
    },
];

function modalShow(cardIndex) {
    var modal = document.getElementById("modal");

    var modalTitle = modal.querySelector(".modal-title");
    var modalId = modal.querySelector(".modal-id");
    var modalStrand = modal.querySelector(".modal-strand");
    var modalRole = modal.querySelector(".modal-role");
    var modalImage = modal.querySelector(".modal-image");

    var selectedData = jsonDataArray[cardIndex];

    modalTitle.textContent = selectedData.name;
    modalStrand.textContent = selectedData.strand;
    modalId.textContent = "ID: " + selectedData.id;
    modalRole.textContent = "Worked: " + selectedData.role;

    modalImage.src = selectedData.imageUrl;

    modal.style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    var closeButton = document.querySelector(".modal .btn-close");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}