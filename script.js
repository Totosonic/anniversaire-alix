// Date de l'anniversaire
const targetDate = new Date("2026-08-06T00:00:00");

const birthday = document.getElementById("birthday");
const container = document.querySelector(".container");
const music = document.getElementById("music");

function updateCountdown(){

    const now = new Date();

    const diff = targetDate - now;

    if(diff <= 0){

        container.style.display="none";
        birthday.classList.remove("hidden");

        if(music){
            music.pause();
        }

        launchConfetti();

        return;
    }

    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown,1000);
updateCountdown();


// ===== CONFETTIS =====

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});

let confettis=[];

function launchConfetti(){

for(let i=0;i<250;i++){

confettis.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height-canvas.height,

r:Math.random()*8+3,

dx:(Math.random()-0.5)*5,

dy:Math.random()*5+2,

color:`hsl(${Math.random()*360},100%,50%)`

});

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confettis.forEach(c=>{

ctx.fillStyle=c.color;

ctx.beginPath();

ctx.arc(c.x,c.y,c.r,0,Math.PI*2);

ctx.fill();

c.x+=c.dx;

c.y+=c.dy;

if(c.y>canvas.height){

c.y=-20;

}

});

requestAnimationFrame(animateConfetti);

}
