const cells=document.querySelectorAll(".cell");
const statusText=document.getElementById("status");
const restbutton=document.getElementById("resetButton");
let CurrentPlayer = 'x';
let board = ['','','','','','','','',''];
let gameActive = true;


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
cells.forEach(cell => cell.addEventListener('click',handlecellclick));
restbutton.addEventListener('click',resetGame);

function handlecellclick(event){
    const cell = event.target;
    const index =cell.getAttribute('data-index');

    if(board[index] !== '' || !gameActive){
        return;
    }
    board[index] = CurrentPlayer;
    cell.textContent = CurrentPlayer;
    cell.classList.add(CurrentPlayer.toLowerCase());
    checkWinner();

}
function checkWinner(){
    let roundwon = false;

    for(let i = 0; i < winningConditions.length; i++){
        const winConditiion = winningConditions[i];
        const a = board[winConditiion[0]];
        const b = board[winConditiion[1]];
        const c = board[winConditiion[2]];

        if(a === '' || b === '' || c ===''){
            continue;
        }
        if(a === b && b === c){
            roundwon = true;
            break;
        }

    }
    if(roundwon){
        statusText.textContent = `player ${CurrentPlayer} Wins` ;
        statusText.classList.remove('status');
        statusText.classList.add('winner');
        gameActive = false;
        return;
    }
    if(!board.includes('')){
        statusText.textContent = 'DRAW' ;
        statusText.classList.add('winner');
        gameActive = false;
        return;
}
 CurrentPlayer = CurrentPlayer === 'x' ? 'o' : 'x';
 statusText.textContent = `player ${CurrentPlayer}'s Turn`;
 statusText.classList.remove('winner');
}
function resetGame(){
    CurrentPlayer = 'x';
    board = ['','','','','','','','',''];
    gameActive = true;
    statusText.textContent = `player ${CurrentPlayer}'s Turn` ;
    statusText.classList.add('winner');

    cells.forEach(cell =>{
        cell.textContent = '';
        cell.classList.remove('x');
        cell.classList.remove('o');
    });



}