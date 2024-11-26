const cells=document.querySelectorAll('.cell');
const statusText=document.getElementById("status");
const resetButton=document.getElementById("resetButton");
let currentPlayer='x';
let board=['','','','','','','','',''];
let gameActive='true';

const winningConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
];

cells.forEach(cell =>cell.addEventListener('click',handleClick));
resetButton.addEventListener('click',resetGame);

function handleClick(event){
    const cell=event.target;
    const index=cell.getAttribute('data-index');

    if(board[index] !== '' || !gameActive ){
        return;
    }
    board[index] = currentPlayer;
    cell.textContent=currentPlayer;
    cell.classList.add(currentPlayer.toLocaleLowerCase());
    checkWinner();
}
function checkWinner(){
    
}