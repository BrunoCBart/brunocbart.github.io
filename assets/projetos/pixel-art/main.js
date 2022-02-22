const pixelBoard = document.querySelector(".pixel-board__container");
const collorPallets = document.querySelectorAll(".color-pallete");
const cleanBtn = document.querySelector("#clean-btn");
const erasers = document.querySelectorAll(".eraser");
const vqv = document.querySelector("#vqv");
const guide = document.querySelector("#guide");
const guideInfo = document.querySelector(".pixel-art__guide");

const deviceWidth = window.innerWidth;

let color = "";

const makePixel = () => {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  return pixel;
};

function makeBoardPixelLine(line, board) {
  for (let i = 1; i <= board; i += 1) {
    const pixel = makePixel();
    line.appendChild(pixel);
  }
}

const boardLine = () => {
  const line = document.createElement("div");
  line.classList.add("line");

  return line;
};

function makeBoard(board = 32) {
  for (let i = 1; i <= board; i += 1) {
    const line = boardLine();
    pixelBoard.appendChild(line);
    makeBoardPixelLine(line, board);
  }
}

function randomColor() {
  const r = Math.floor(Math.random() * 256 + 1);
  const g = Math.floor(Math.random() * 256 + 1);
  const b = Math.floor(Math.random() * 256 + 1);
  return `rgb(${r},${g},${b})`;
}

const makeDiv = () => {
  const div = document.createElement("div");
  return div;
};

const fillCollorPalletes = (quantity = 12) => {
  collorPallets.forEach((pallete, index) => {
    for (let i = 0; i < quantity; i++) {
      const div = makeDiv();
      div.classList.add("color");
      div.style.backgroundColor = randomColor();
      if (index === 0 && i === 0) div.style.backgroundColor = "black";
      pallete.appendChild(div);
    }
  });
};

collorPallets.forEach((pallete) => {
  pallete.addEventListener("click", (e) => {
    const el = e.target;
    const previousSelected = document.querySelector(".color-selected");
    if (previousSelected) previousSelected.classList.remove("color-selected");
    if (el.classList.contains("color")) {
      el.classList.add("color-selected");
      color = el.style.backgroundColor;
    }
  });
});

let draw = false;

const paintPixels = () => {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      // const color = document.querySelector(".color-selected");
      if (!draw) return;
      pixel.style.backgroundColor = color;
    });
    pixel.addEventListener("mousedown", () => {
      pixel.style.backgroundColor = color;
    }); 
  });
};

window.addEventListener("mousedown", () => {
  draw = true;
});

window.addEventListener("mouseup", () => {
  draw = false;
}); 

cleanBtn.addEventListener("click", () => {
  pixelBoard.innerHTML = "";
  makeBoard();
  paintPixels();
});

erasers.forEach((eraser) => {
  eraser.addEventListener("click", () => {
    const selected = document.querySelector(".color-selected");
    if (selected) selected.classList.remove("color-selected");
    color = "#ffffff";
  });
});

vqv.addEventListener("click", () => {
  collorPallets.forEach((pallete) => {
    pallete.innerHTML = "";
  });

  if (deviceWidth <= 615) {
    fillCollorPalletes(6);
    return;
  }
  fillCollorPalletes();
});

guide.addEventListener("click", () => {
  guideInfo.classList.toggle("active");
});

// pixelBoard.addEventListener("click", (e) => {
//   const el = e.target;
//   const selected = document.querySelector(".color-selected");
//   if (el.classList.contains("pixel")) {
//     el.style.backgroundColor = selected.style.backgroundColor;
//   }
// });

window.onload = () => {
  if (deviceWidth <= 615) {
    const palletes = document.querySelectorAll(".pixel-board .color-pallete");
    palletes.forEach((pallet) => pallet.remove());
    makeBoard(16);
    fillCollorPalletes(6);
  } else {
    makeBoard();
    fillCollorPalletes();
  }
  paintPixels();
};
