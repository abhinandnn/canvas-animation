const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");
const colors = ["red","green", "blue","orange","purple","yellow"];
const radius = 30;
const speed = 2;
let balloons = [];
let score = 0;
function newBalloon() {
    const bcolor = colors[Math.floor(Math.random() * colors.length)];
    const balloon = {
        x: Math.random() * (canvas.width - 2 * balloonRadius),
        y: canvas.height,
        color: bcolor
    };
    balloons.push(balloon);
}