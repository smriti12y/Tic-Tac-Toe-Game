let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgg");
let msgContainer = document.querySelector(".msg-container");
let msggg = document.querySelector("#msggg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [3, 4, 5],
    [2, 4, 6],
    [6, 7, 8],
    [1, 4, 7],
];
const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// Move the function declarations here
const showWinner = (winner) => {
    msggg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBoxes= () =>{
    for (let box of boxes){
        box.disabled= true;

    }
}

const enableBoxes= () =>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";

    }
}

   newGameBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);



   
