const header = document.getElementById("header")
const h = document.createElement("h1")
const j = document.createElement("h2")
const s = document.createElement("span")

// header.textContent = "JAVASCRIPT MADE THIS";
h.textContent = "JavaScript Made This!!";
header.appendChild(h);
s.textContent = "Dan Patterson";
s.style.color = '#00FF00';
header.appendChild(s)
j.appendChild(s)
j.innerHTML += " wrote the JavaScript";
header.appendChild(j);

// document.getElementById(h).innerHTML = "Dan Patterson wrote the JavaScript"

const left = document.getElementsByClassName("left")
const right = document.getElementsByClassName("right")
const messages = document.getElementsByClassName("message")

const mes = ["Hello ", "How are you?", "I'm doing well thanks!", "Great to hear!"]
function fixLeft (arr) {
    for( i = 0; i < messages.length; i++) {
        messages[i].textContent = mes[i]
    }
}
fixLeft(messages)
console.log(messages)

const button = document.getElementById("clear-button")

button.addEventListener("click", function(e) {
    e.preventDefault();
    for (i = 0; i < messages.length; i++)
    messages[i].textContent = ""
    
})





