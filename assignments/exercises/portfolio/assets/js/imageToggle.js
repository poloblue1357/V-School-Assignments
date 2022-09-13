let colorImage = document.getElementById("colorImage");
let button2 = document.getElementById("button2");

function changeToBW(e) {
    e.preventDefault()
    if (colorImage.getAttribute('src') === "images/beamLending.jpg") {
        colorImage.setAttribute('src', "images/beamLending2.jpg");
    }
    else {
        colorImage.setAttribute('src', "images/beamLending.jpg");
    }
}

button2.addEventListener("click", changeToBW);