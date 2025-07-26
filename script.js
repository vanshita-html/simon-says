let gameseq = [];
let userseq = [];
let btns = ["yellow", "purple", "green", "red"];

let level = 0;
let started = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {

    userseq = []; // Reset user sequence at new level
    level++;
    h2.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randomidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){


    if (userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
        console.log("Correct");
    }
    else {
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }

}

function btnpress() {
    let btn = this;
    userflash(btn);

    usercolor=btn .getAttribute("id");
    userseq.push(usercolor);
    
    checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
