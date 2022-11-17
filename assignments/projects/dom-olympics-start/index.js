const header = document.getElementById("header")
header.textContent = "JavaScript Made This!!"
header.style.fontSize = "x-large"
header.style.textAlign = "center"
header.style.fontWeight = "bold"

const br = document.createElement("br")
header.appendChild(br)

const span = document.createElement("span")
span.textContent = "Dan "
span.style.color = "orange"
span.style.fontSize = "medium"
span.style.textAlign = "center"
header.appendChild(span)

const h4 = document.createElement("span")
h4.textContent = "wrote the JavaScript"
h4.style.fontSize = "medium"
h4.style.textAlign = "center"
header.appendChild(h4)

const left = document.getElementsByClassName("message left")
left[0].textContent = "Good Afternoon. My name is Vincent Twice, Vincent Twice."
left[1].textContent = "No one cares. No one cares."

const right = document.getElementsByClassName("message right")
right[0].textContent = "I'm Count Dracula!"
right[1].textContent = "You said that twice. Ha! Ha! Ha!"

const messages = document.getElementsByClassName("messages")
document.getElementById("clear-button").addEventListener("click", function() {
    for(i = 0; i < messages.length; i++) { 
        messages[i].textContent = ""
    }
})

const dropDown = document.getElementById("theme-drop-down")
dropDown.addEventListener("change", function(e) {
    console.log(messages[0].children)
    // if(e.target.value === "theme-one") {
    //     for(i = 0; i < left.length; i++) {
    //         left[i].style.backgroundColor = "burlywood"
    //         right[i].style.backgroundColor = "lightblue"
    //         right[i].style.color = "black"
    //     }
    // } 
    // else if(e.target.value === "theme-two") {
    //     for(i = 0; i < left.length; i++) {
    //         left[i].style.backgroundColor = "red"
    //         right[i].style.backgroundColor = "black"
    //         right[i].style.color = "white"
    //     }
    // }
    for(i = 0; i < messages.length; i++) {
        let x = messages[i] % 2 === 0
        let y = messages[i] % 2 === 1
        if(e.target.value === "theme-one") {
            left[i].style.backgroundColor = "burlywood"
            // y.style.backgroundColor = "lightblue"
            // y.style.color = "black"
        }
        else if (e.target.value === "theme-two") {
            left[i].style.backgroundColor = "red"
            // y.style.backgroundColor = "black"
            // y.style.color = "white"
        }
    }
})
const main = document.getElementById("main")
const test = document.createElement("div")
test.innerHTML = "test"
test.setAttribute("class", "message left")
// messages.appendChild(test)

// function change() {
//     var e = document.getElementById("theme-drop-down");
//     var value = e.value;
//     var text = e.options[e.selectedIndex].text;
//     if(value === "theme-one") {
//         one()
//     } else if (value === "theme-two") {
//         two()
//     }
// }
// var e = document.getElementById("theme-drop-down");
// var value = e.value;
// var text = e.options[e.selectedIndex].text;
// console.log(value)


