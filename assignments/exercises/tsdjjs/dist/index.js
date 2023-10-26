"use strict";
const x = document.createElement("div");
x.style.height = "100px";
x.style.width = "100px";
x.style.outline = "3px solid black";
x.addEventListener("mouseover", function () {
    x.style.backgroundColor = "blue";
});
document.body.appendChild(x);
