//global table variable to help create rows
let table = document.getElementById("pixelCanvas");

//initialise a grid to allow firstElementChild.remove() function
height = document.getElementById("inputHeight").value;
width = document.getElementById("inputWidth").value;
makeGrid(height - 1, width - 1);

//event listener for how large the grid will be
const tableSize = document.querySelector('#sizePicker');

tableSize.addEventListener("submit", (function (event) {
    event.preventDefault();

//remove initial grid each time to reset values
    table.firstElementChild.remove();

//run makeGrid function with input values from user, compensate for start at 0
    height = document.getElementById("inputHeight").value;
    width = document.getElementById("inputWidth").value;
    makeGrid(height - 1, width -1);
}));

//makeGrid function
function makeGrid(height, width) {

//for loop that creates number of rows by number of cells
for (let x = 0; x <= height; x++) {
    let row = table.insertRow(x);
    for (let y = 0; y <= width; y++) {
      let cell = row.insertCell(y);

//event listener for color change to an individual cell
cell.addEventListener('click', (function (event)  {
    changeColor();

//changeColor function
function changeColor() {
  cell.style.backgroundColor = document.getElementById("colorPicker").value
}
}));
}
}
};
