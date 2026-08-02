const menu = document.getElementById("menu");
const playButton = document.getElementById("playButton");
const road = document.getElementById("road");
const player = document.getElementById("player");
const gameOver = document.getElementById("gameOver");
const scoreText = document.getElementById("score");
const speedText = document.getElementById("speed");

let playerX = 145;
let score = 0;
let speed = 120;
let playing = false;

playButton.onclick = startGame;

function startGame(){

    menu.style.display="none";

    playing=true;

    createEnemy();

    setInterval(updateScore,100);

}

function updateScore(){

    if(!playing)return;

    score++;

    scoreText.innerHTML="Puntaje: "+score;

    speedText.innerHTML="Velocidad: "+speed+" km/h";

if(score % 100 == 0){
    speed += 10;
}
}

road.addEventListener("touchstart",movePlayer);
road.addEventListener("mousedown",movePlayer);

function movePlayer(e){

    if(!playing)return;

    let x;

    if(e.touches){

        x=e.touches[0].clientX;

    }else{

        x=e.clientX;

    }

    let rect=road.getBoundingClientRect();

    playerX=x-rect.left-35;

    if(playerX<0)playerX=0;

    if(playerX>290)playerX=290;

    player.style.left=playerX+"px";

}

function createEnemy(){

    if(!playing)return;

    const enemy=document.createElement("div");

    enemy.className="enemy";

    enemy.style.width="70px";

    enemy.style.height="120px";

    enemy.style.background="dodgerblue";

    enemy.style.borderRadius="15px";

    enemy.style.position="absolute";

    enemy.style.top="-130px";

    enemy.style.left=Math.floor(Math.random()*290)+"px";

    road.appendChild(enemy);

    let y=-130;

    let move=setInterval(()=>{

        if(!playing){

            clearInterval(move);

            return;

        }

        y+=6;

        enemy.style.top=y+"px";

        if(checkCollision(enemy)){

            finishGame();

        }

        if(y>window.innerHeight){

            enemy.remove();

            clearInterval(move);

        }

    },20);

    setTimeout(createEnemy,1200);

}

function checkCollision(enemy){

    let a=player.getBoundingClientRect();

    let b=enemy.getBoundingClientRect();

    return !(

        a.bottom<b.top ||

        a.top>b.bottom ||

        a.right<b.left ||

        a.left>b.right

    );

}

function finishGame(){

    playing=false;

    gameOver.style.display="flex";

}