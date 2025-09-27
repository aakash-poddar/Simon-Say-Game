let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","blue"];
 
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    //Random button choose
    let ranIdx = Math.floor(Math.random() * 3);
    let ranColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${ranColor}`);
    console.log(ranColor)
    btnFlash(randBtn);
    
    }

