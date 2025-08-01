let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer= document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO= true;//playerX playero

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
 const resetGame=() => {
    turnO = true;
 }
 
function enableBoxes() {
  // logic to enable boxes
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO){// palyero
            box.innerText="O";
            turnO= false;
        }
            else{// palyerx
                box.innerText= "X";
                turnO= true;
                enableBoxes();
                msgContainer.classList.add("hide");



            }
            box.disabled= true;

            checkWinner();
        

    });

});

     const disableBoxes =() => {
        for(let box of boxes ){
            box.disabled = true;
        }
     };
     const enableBoxes =() => {
        for(let box of boxes ){
            box.enable = true;
            box.innerText="";
        }
     };
const showWinner =() => {
    msg.innerText=`congrulation, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
// };
// let winner; // Declare at the top of your script

function checkWinner() {
  // Logic to determine the winner
  winner = "X"; // or "O", or null
  showWinner();
}

// function showWinner() {
  if (winner) {
    alert(`${winner} wins!`);
  }



 const checkWinner=()=> {
    for( let pattern of winPattern) {
        
        let pos1Val =  boxes[pattern[0]].innerText;
        let pos2Val =  boxes[pattern[1]].innerText;
        let pos3Val =  boxes[pattern[2]].innerText;
         
        if(pos1Val !=""&& pos2Val != " " && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);

            }
        }
        
            
    }
 };
 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);
}