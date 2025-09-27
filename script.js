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
    userSeq = [];
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

    function checkAns(idx){
        
      if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
           
        }
        console.log("Same color")
      }else{
        h2.innerHTML = `Game Over! Your Score Was <b>${level}</b> <br> Press Any Key To Restart The Game.`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"

        },150)
        reset();
      }
    }

    function btnPress(){
        let btn = this;
        btnFlash(btn);

        userColor = btn.getAttribute("id")
        userSeq.push(userColor)
        checkAns(userSeq.length - 1);

    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress)
    }

    function reset(){
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }