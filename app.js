let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let draw = "It's a draw 🤝.  kindly reset or start a new game";
let turnO = true;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("turnO");
            
            turnO = false;
        }else{
            box.innerText = "X";
            box.classList.add("turnX");
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

let posVal1;
let posVal2;
let posVal3;

const drawmatch = ()=>{
    msg.innerText = draw;
    msgContainer.classList.remove("hide");
}

const showWinner = (winner)=>{
    msg.innerText = `congratulations🥳 Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
   let winnerFound = false;

    for(let pattern of winPatterns){
        posVal1 = boxes[pattern[0]].innerText;
        posVal2 = boxes[pattern[1]].innerText;
        posVal3 = boxes[pattern[2]].innerText;

    if(posVal1 !== "" && posVal2 !== "" && posVal3 !== "" ){
        if(posVal1 === posVal2 &&  posVal2 === posVal3 ){
            console.log("Winner: "+posVal1);
            showWinner(posVal1);
            winnerFound = true;
            boxes.forEach((box) => {box.disabled = true});
            return;
        }
    }
}

let allfilled = true;


boxes.forEach((box)=>{
    if(box.innerText==""){
        allfilled = false;
    }
})

if(!winnerFound && allfilled){
    drawmatch();
}


};

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("turnO","turnX");
    }
}







newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
