// --- Set up button and its event
const btnCont = document.querySelector('.btndiv');
const button = document.createElement('button');
button.textContent = "Set grid size";
btnCont.appendChild(button);
button.addEventListener('click', ()=>{
    removeGrid();
    let size = prompt('Size?'); 
    displayGrid(size);
});
//---

function displayGrid(size){ //make row divs and fill them with cells
    const grid = document.querySelector('.main');
    let range = size;
    if (size>100) return console.error("size < 100, please") //for performance purposes
    for(let i=0;i<range;i++){
        const row = document.createElement('div')
        row.setAttribute('class',"row")
        for(let j=0;j<range;j++){
            const cell = document.createElement('div');
            cell.addEventListener('mouseover',()=>{
                cell.setAttribute('class','painted')})
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

function removeGrid(){//removes every row from the main container
    const rows = document.querySelector('.main').children
    const table = document.querySelector('.main')
    Array.from(rows).forEach((e)=>{table.removeChild(e)})
}

