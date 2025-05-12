// triangle star
const lines = 10
let shape = ""

for ( let i = 1; i <= lines; i++) {
    shape += "#".repeat(i) + "\n"
}

document.getElementById("left-star").textContent = shape

for ( let i = 1; i <= lines; i++) {
    shape += " ".repeat(lines - i) + "#".repeat(i) + "\n"
}

document.getElementById("right-star").textContent = shape
