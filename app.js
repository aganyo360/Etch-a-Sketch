// console.log("hello world")
let divContainer = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let grids = document.createElement("div")
        // grids.textContent = "a"
        grids.style.cssText = "width: 60px; height: 60px; text-align:center; border: 1px solid white"
        grids.classList.add("gridSquare")
        divContainer.appendChild(grids)
    }
}