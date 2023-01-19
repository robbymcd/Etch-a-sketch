//for each .draw-grid element inside of .draw-grid-container add an event listener for click that runs of a function that makes the .draw-grid elements background color black and when clicked again makes the .draw-grid elements background color white
const grid = document.querySelector('.draw-grid');
let gridElements = document.querySelectorAll('.grid-element');
//add am event listener to the regular mode button that runs the regularMode function
const regularModeButton = document.querySelector('#regular');
regularModeButton.addEventListener('click', regularMode);
//add an event listener to the clear grid button that runs the clearGrid function
const clearGridButton = document.querySelector('#clear');
clearGridButton.addEventListener('click', clearGrid);
//add an event listener to the rainbow mode button that runs the rainbowMode function
const rainbowModeButton = document.querySelector('#rainbow');
rainbowModeButton.addEventListener('click', rainbowMode);
//add an event listener to the clear button that runs the eraseGrid function
const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', eraseGrid);
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
let touchDown = false;
document.body.ontouchstart = () => (touchDown = true);
document.body.ontouchend = () => (touchDown = false);
//add an event listener to slider that runs the slider function
const slider = document.querySelector('#slider');
slider.addEventListener('input', sliderFunction);
//display the value of the slider in #dimensions
slider.oninput = function() {
    document.getElementById('dimensions').innerHTML = this.value + ' x ' + this.value;
}
slider.onchange = () => setupGrid(slider.value);

function clearGrid() {
    gridElements.forEach(gridElements => gridElements.style.backgroundColor = 'white');
}

function setupGrid(size) {
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;   
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      grid.appendChild(gridElement);
    }
    gridElements = document.querySelectorAll('.grid-element');
}

setupGrid(16);

function regularMode() {
    //add the selected class to the regular mode button
    regularModeButton.classList.add('selected');
    //remove the selected class from all other buttons
    clearGridButton.classList.remove('selected');
    rainbowModeButton.classList.remove('selected');
    eraserButton.classList.remove('selected');
    //remove all other click event listeners from the .draw-grid elements
    gridElements.forEach (gridElements => gridElements.removeEventListener('mousedown', rainbowMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', eraseGrid)); 
    gridElements.forEach(gridElements => gridElements.addEventListener('mousedown', () => {
        gridElements.style.backgroundColor = 'black';
    }));

    gridElements.forEach(gridElements => gridElements.addEventListener('mouseover', () => {
        if (mouseDown)
            gridElements.style.backgroundColor = 'black';
    }));

    //make the function run smooth on mobile 
    //remove all other touch event listeners from the .draw-grid elements
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', rainbowMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', eraseGrid));
    gridElements.forEach(gridElements => gridElements.addEventListener('touchstart', () => {
        gridElements.style.backgroundColor = 'black';
    }));

    //touch move event listener
    gridElements.forEach(gridElements => gridElements.addEventListener('touchmove', () => {
        if (touchDown)
            gridElements.style.backgroundColor = 'black';
    }));
}

function rainbowMode() {
    //add the selected class to the rainbow button
    rainbowModeButton.classList.add('selected');
    //remove the selected class from all other buttons
    regularModeButton.classList.remove('selected');
    clearGridButton.classList.remove('selected');
    eraserButton.classList.remove('selected');
    //remove all other click event listeners from the .draw-grid elements
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', regularMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', eraseGrid));
    gridElements.forEach(gridElements => gridElements.addEventListener('mousedown', () => {
        gridElements.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }));
    gridElements.forEach(gridElements => gridElements.addEventListener('mouseover', () => {
        if (mouseDown)
            gridElements.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }));
    //make the function run smooth on mobile
    //remove all other touch event listeners from the .draw-grid elements
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', regularMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', eraseGrid));
    gridElements.forEach(gridElements => gridElements.addEventListener('touchstart', () => {
        gridElements.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    ));
    //touch move event listener
    gridElements.forEach(gridElements => gridElements.addEventListener('touchmove', () => {
        if (touchDown)
            gridElements.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    ));
}

function eraseGrid() {
    //add the selected class to the eraser button
    eraserButton.classList.add('selected');
    //remove the selected class from all other buttons
    regularModeButton.classList.remove('selected');
    clearGridButton.classList.remove('selected');
    rainbowModeButton.classList.remove('selected');
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', regularMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('mousedown', rainbowMode));
    gridElements.forEach(gridElements => gridElements.addEventListener('mousedown', () => {
        gridElements.style.backgroundColor = 'white';
    }));
    gridElements.forEach(gridElements => gridElements.addEventListener('mouseover', () => {
        if (mouseDown)
            gridElements.style.backgroundColor = 'white';
    }));
    //make the function run smooth on mobile
    //remove all other touch event listeners from the .draw-grid elements
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', regularMode));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', clearGrid));
    gridElements.forEach(gridElements => gridElements.removeEventListener('touchstart', rainbowMode));
    gridElements.forEach(gridElements => gridElements.addEventListener('touchstart', () => {
        gridElements.style.backgroundColor = 'white';
    }
    ));
    //touch move event listener
    gridElements.forEach(gridElements => gridElements.addEventListener('touchmove', () => {
        if (touchDown)
            gridElements.style.backgroundColor = 'white';
    }
    ));
} 
    
function sliderFunction(size) {
    clearGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      grid.appendChild(gridElement);
    }
}
