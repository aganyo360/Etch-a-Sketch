// console.log("hello world")

let divContainer = document.querySelector(".container");

function getUserSize() {
  let squareSize = Number(prompt("Enter your value:"));
  return 960 / squareSize;
}

let squareSize = getUserSize();
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let grids = document.createElement("div");
    // grids.textContent = "a"
    // grids.style.cssText = `width: 60px; height: 60px; text-align:center; border: 1px solid white`;
    grids.style.width = `${squareSize}px`;
    grids.style.height = `${squareSize}px`;
    // grids.style.backgroundColor = getRandomColor();
   
    // grids.style.border = "1px solid black";
    grids.classList.add("gridSquare");
    divContainer.appendChild(grids);

    // lets now add an eventListener

    grids.addEventListener("mouseenter", () => {
      grids.style.backgroundColor = getRandomColor();
    });
  }
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

getUserSize();
