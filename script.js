const road = document.getElementById("road");
const player = document.getElementById("player");

player.innerHTML="🏎️";

for(let i=0;i<12;i++){

    let line=document.createElement("div");

    line.className="line";

    line.style.top=(i*120)+"px";

    road.appendChild(line);

}

function animate(){

    document.querySelectorAll(".line").forEach(line=>{

        let y=parseInt(line.style.top);

        y+=8;

        if(y>window.innerHeight){

            y=-120;

        }

        line.style.top=y+"px";

    });

    requestAnimationFrame(animate);

}

animate();