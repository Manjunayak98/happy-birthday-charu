// =============================
// Happy Birthday Charu ❤️
// Part 1
// =============================

const startBtn = document.getElementById("startBtn");
const game = document.getElementById("game");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const finalPage = document.getElementById("final");

const letterBtn = document.getElementById("letterBtn");
const finalBtn = document.getElementById("finalBtn");

const heartArea = document.getElementById("heartArea");
const scoreText = document.getElementById("score");

let score = 0;

// Start button
startBtn.addEventListener("click",()=>{

document.querySelector(".hero").style.display="none";

game.classList.remove("hidden");

createHeart();

});

// Create Hearts

function createHeart(){

const interval=setInterval(()=>{

if(score>=10){

clearInterval(interval);

game.classList.add("hidden");

gallery.classList.remove("hidden");

return;

}

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.fontSize="40px";

heart.style.left=Math.random()*90+"%";

heart.style.top="-50px";

heart.style.cursor="pointer";

heart.style.transition="4s linear";

heartArea.appendChild(heart);

setTimeout(()=>{

heart.style.top="460px";

},100);

heart.onclick=()=>{

score++;

scoreText.innerHTML=score+" / 10";

heart.remove();

};

setTimeout(()=>{

heart.remove();

},4500);

},700);

}

// Letter

letterBtn.onclick=()=>{

gallery.classList.add("hidden");

letter.classList.remove("hidden");

}

// Final Surprise

finalBtn.onclick=()=>{

letter.classList.add("hidden");

finalPage.classList.remove("hidden");

confetti();

}

// Confetti

function confetti(){

for(let i=0;i<200;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-50px";

c.style.fontSize=(20+Math.random()*25)+"px";

c.style.transition="5s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},100);

setTimeout(()=>{

c.remove();

},5000);

}

}
