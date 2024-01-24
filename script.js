let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset");

let turnO = true;

const winPatterns =[
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [2,5,8],
        [3,4,5],
        [2,4,6],
        [6,7,8],
        [1,4,7],
];


boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");
            if(turnO){
                box.innerHTML="O"
                turnO=false;
            } else{
                box.innerHTML="X"
                turnO=true;
            }
            box.disabled = true;
        
        });
    });

    
   



   
