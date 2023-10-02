const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

const r = 30;
const speed = 2;
const colors = ["red","green","blue", "orange","purple","yellow","pink" ,"white"];
let balloons = [];
let score = 0;
let over = false;

function printscore() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 20, 40);
}

function newBalloon() {
    const balloonColor = colors[Math.floor(Math.random() * colors.length)];
    const balloon = {
        x: Math.random() * (canvas.width - 2 * r) + r,
        y: canvas.height,
        color: balloonColor
    };
    balloons.push(balloon);
}

function updateGameArea() {
    if (over) 
    {
        ctx.font = "50px bold";
        ctx.fillStyle = "white";
        ctx.fillText(" Game over!",canvas.width / 2 - 150, canvas.height / 2);
        ctx.textAlign = "center";
        return;
    }
    else{
    clearCanvas();

    for (const balloon of balloons) {
        ctx.beginPath();
        ctx.arc(balloon.x, balloon.y, r, 0, Math.PI * 2);
        ctx.fillStyle = balloon.color;
        ctx.fill();
        ctx.closePath();

        balloon.y -= speed;

        if (balloon.y < 0) {
            over = true;
        }
    }
    function printscore() {
        ctx.font = "24px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score, 20, 40);
    }

    printscore();
    setTimeout(updateGameArea, 16);}
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
updateGameArea();
setInterval(newBalloon, 2000);
