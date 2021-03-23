const container = document.getElementById("container");

function generateGrid(number) {
  let newSize = number * number;
  let squareSize = 100 / number + "%";
  console.log(squareSize);

  for (i = 0; i < newSize; i++) {
    var square = document.createElement("div");
    square.classList.add("squares");
    square.style.cssText =
      "box-sizing: border-box;border: 1px solid black; background: #44D6E9";
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.addEventListener("mouseover", (e) => {
      e.target.style.background = "#080E2C";
    });

    container.appendChild(square);
  }
}

let clearGrid = function () {
  const sketchContainer = document.getElementById("container");
  const allPixels = sketchContainer.querySelectorAll("div");

  allPixels.forEach((pixel) => {
    console.log("borrar");
    sketchContainer.removeChild(pixel);
  });
};

function etchASketch(size) {
  generateGrid(size);
}

let initialGrid = function () {
  for (i = 0; i < 256; i++) {
    var square = document.createElement("div");
    square.classList.add("squares");
    square.style.cssText =
      "box-sizing: border-box;border: 1px solid black; background: #44D6E9; width: 6.25%; height: 6.25%";
    square.addEventListener("mouseover", (e) => {
      e.target.style.background = "#080E2C";
    });

    container.appendChild(square);
  }
};

initialGrid();

let userInput = function () {
  let input;
  do {
    input = prompt("¿How many squares per side?");
    if (input === null) {
      input = 16;
      return input;
    }
    if (isNaN(input)) {
      alert("That's not a number");
    } else if (input < 1 || input > 100) {
      alert("Please enter a number between 1 and 100");
    }
  } while (input < 1 || input > 100 || isNaN(input));

  clearGrid();
  generateGrid(input);
};

const button = document.getElementById("btn");

button.addEventListener("click", userInput);
