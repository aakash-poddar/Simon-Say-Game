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
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    //Random button choose
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor)
    console.log(ranColor)
    btnFlash(randBtn);
    
    }

    function checkAns(){
        let idx = level-1;
      if(userSeq[idx] === gameSeq[idx]){
        console.log("Same color")
      }else{
        h2.innerText = `Game Over! Enter Any key to restart`
      }
    }

    function btnPress(){
        let btn = this;
        btnFlash(btn);

        userColor = btn.getAttribute("id")
        userSeq.push(userColor)
        checkAns();

    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress)
    }
