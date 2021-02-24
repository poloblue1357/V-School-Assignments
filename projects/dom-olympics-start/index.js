const header = document.getElementById("header")
header.textContent = "Javascript Made This!!"
header.style.fontSize = "x-large"
header.style.textAlign = "center"
header.style.fontWeight = "bold"

const br = document.createElement("br")
header.appendChild(br)

const span = document.createElement("span")
span.textContent = " Dan "
span.style.color = "red"
header.appendChild(span)

const h4 = document.createElement("span")
h4.textContent = "wrote the JavaScript"
h4.style.fontSize = "medium"
h4.style.textAlign = "center"
header.appendChild(h4)

const left = document.getElementsByClassName("message left")
left[0].textContent = "Good morning. How are you doing?"
left[1].textContent = "I'm doing great thanks. TGIF!"

const right = document.getElementsByClassName("message right")
right[0].textContent = "I'm doing great thanks! What about you?"
right[1].textContent = "Absolutely! Time to get freaky!"

const button = document.getElementById("clear-button")
button.addEventListener("click", function() {
    left[0].textContent = ""
    left[1].textContent = ''
    right[0].textContent = ''
    right[1].textContent = ''
} )

const theme = document.getElementById("theme-drop-down")
const option = document.getElementsByClassName("option")

// theme-one = blue/brown
// theme-two = red/black

option.addEventListener("change", function(event) {
    if(event.target.value !== "theme-one") {
        left.style.backgroundColor = "black"
        left.style.color = "white"
    } else if(event.target.value == "theme-two") {
        left.style.backgroundColor = "burlywood"
        right.style.backgroundColor = "lightblue"
    }
})
