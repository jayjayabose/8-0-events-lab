// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 400; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//set the event listeners on pallet colors to update current collor
const currentColor = document.querySelector("#current-color");
const colors = document.querySelectorAll(".color");
for (const color of colors ) {
  color.addEventListener("click",()=>{
    currentColor.style.backgroundColor = color.style.backgroundColor;// ??
  });
  
}

//set event listeners on cells to "paint"
const cells = document.querySelectorAll('.cell');
let paint;

for (const cell of cells){
  cell.addEventListener("mousedown",()=>{
    paint = true;
    cell.style.backgroundColor = currentColor.style.backgroundColor;
    console.log('mousedown: ' + paint);
  });
  cell.addEventListener("mousemove",()=>{
    if (paint) cell.style.backgroundColor = currentColor.style.backgroundColor;
    console.log('mousemove: ' + paint );
  });  
  cell.addEventListener("mouseup",()=>{
    paint = false;
    console.log('mouseup: ' + paint);
  });  
}

const resetCanvas = document.querySelector('#reset-canvas');
resetCanvas.addEventListener("click",()=>{
  for (const cell of cells) {
    cell.style.backgroundColor = 'white';
  }
});

const setCanvas = document.querySelector('#set-canvas');
setCanvas.addEventListener('click', ()=>{
  for (const cell of cells) {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  }
})