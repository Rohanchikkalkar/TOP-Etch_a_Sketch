//this functions creates grid by taking size from the user, default is 6*6 grid
function createGrid(size) {
  let board = document.querySelector("#board");
  let container = document.createElement("div");

  container.classList.add("container");
  container.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", function (e) {
      e.target.classList.add("hovered");
    });
    cell.classList.add("cell");
    container.appendChild(cell);
  }
  board.innerHTML = "";
  board.appendChild(container);
}
//initial grid;
createGrid(6);

// resize button
let resize = document.querySelector(".resize");
resize.addEventListener("click", () => {
  let size = prompt("what is your size?");
  createGrid(size);
});
