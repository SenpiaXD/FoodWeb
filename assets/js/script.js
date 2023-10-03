// Mobile Functionality: Responsive Navbar

document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuButton = document.getElementById("toggle-menu");
    const navUl = document.getElementById("nav-ul");
    const home = document.getElementById("home");

    toggleMenuButton.addEventListener("click", function () {
        
        navUl.classList.toggle("show");
        toggleMenuButton.classList.toggle("active");

        if (navUl.classList.contains("show")) {
            // home.style.paddingTop = "310px";
        } else {
            home.style.paddingTop = "85px";
        }

        window.addEventListener("resize", function () {
            if (window.innerWidth <= 769) {
                // home.style.paddingTop = "250px";
            } else {
                //home.style.paddingTop = "200px";
            }
        });
    });
});

// Mobile Functionality: Responsive Navbar
const listView = document.getElementById("nav-ul");

listView.addEventListener("click", () => {
    listView.classList.toggle("show");
});

// Functionality for Every View: Modal View 

function modalShow(cardIndex) {

    var modal = document.getElementById("modal");

    var modalTitle = modal.querySelector(".modal-title");
    var modalId = modal.querySelector(".modal-id");
    var modalStrand = modal.querySelector(".modal-strand");
    var modalRole = modal.querySelector(".modal-role");
    var modalImage = modal.querySelector(".modal-image");

    var selectedData = jsonDataArray[cardIndex];

    modalTitle.innerHTML = selectedData.name;
    modalStrand.innerHTML = selectedData.strand;
    modalId.innerHTML = "<b><i>ID: </i></b>" + selectedData.id;
    modalRole.innerHTML = "<b>Worked on: </b>" + selectedData.role;

    modalImage.src = selectedData.imageUrl;

    modal.style.display = "block";
}

document.addEventListener("click", function () {
    var closeButton = document.querySelector(".modal .btn-close");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

//Internal JSON
var jsonDataArray = [
    // Leader of the Research/System
    {
        name: "Ronnel Cepada",
        strand: "Culinary Arts",
        id: "02000123456",
        role: "Leader of Culinary/Researcher/Designer",
        imageUrl: "./assets/img/Members/ronnel.jpg"
    },
    {
        name: "Fernando Villanueva Jr.",
        strand: "Information Technology",
        id: "02000567329",
        role: "Leader of IT/FrontEnd/BackEnd/Researcher",
        imageUrl: "./assets/img/Members/fernando.jpg"
    },
    // ----------------------End-------------------------
    {
        //Member of Culinary Index 2
        name: "Mark Vincent",
        strand: "Culinary Arts",
        id: "",
        role: "Researcher",
        imageUrl: "",
    },
    {
         //Member of Culinary Index 3
        name: "Jozh Ryle Jimenez",
        strand: "Culinary Arts",
        id: "",
        role: "Researcher",
        imageUrl: "",
    },  
    {   
        //Member of Culinary  Index 4
        name: "James Gesto",
        strand: "Culinary Arts",
        id: "",
        role: "Researcher",
        imageUrl: "",
    },
    {   
         //Member of IT  Index 5
        name: "memeber of culinary",
        strand: "Culinary Arts",
        id: "",
        role: "Researcher",
        imageUrl: ""
    },
    {
         //Member of IT  Index 6
        name: "Argie Delgado",
        strand: "Culinary Arts",
        id: "02000287369",
        role: "FrontEnd/BackEnd/Researcher",
        imageUrl: "",
    },
    {
         //Member of IT  Index 7
        name: "Ryan Consigna",
        strand: "Information Technology",
        id: "02000303132",
        role: "Researcher/Designer",
        imageUrl: "",
    },
    {
        //Member of IT  Index 8
        name: "Christopher Fegalan",
        strand: "Culinary Arts",
        id: "02000306245",
        role: "FrontEnd/BackEnd/Researcher",
        imageUrl: "",
    },
    {   
         //Member of IT  Index 9
        name: "Khyle Myrvin Macasilhig",
        strand: "Information Technology",
        id: "02000307446",
        role: "FrontEnd/Researcher",
        imageUrl: "",
        
    },
    {
         //Member of IT  Index 10
        name: "Jude Cedrick Seguin",
        strand: "Information Technology",
        id: "",
        role: "FrontEnd",
        imageUrl: "",
    }
];