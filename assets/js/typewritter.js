var i = 0;
var txt = '"IT and Culinary Collaboration"';
var speed = 75;

function Write() {
    if(i < txt.length) {
        document.getElementById("typer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Write, speed);
    }
}

window.onload = function () {
    Write();
}