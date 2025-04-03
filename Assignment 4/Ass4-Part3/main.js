// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Balls class
class Ball {
    constructor(x,y,velX,velY, color, size,) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
}

draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

update() {
    if( this.x + this.size >= width) {
        this.velX = Math.abs(this.velX); // To make it bouns inwards
    }

    if (this.x - this.size <= 0 ) {
        this.velX = Math.abs(this.velX); // for bounce inwards
    }

    if (this.y + this.size >= height) {
        this.velY = -Math.abs(this, velY); // same for bounce
    }

    if (this.y - this.size <= 0 ) {
        this.velY = Math.abs(this.velY); // same for bounce
    }

    this.x += this.velX;
    this.y += this.velY;
} 

collisonDetect() {
    for (const ball of balls) {
        if (this !== ball) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
                // To change the color of both the balls after collided
                const newColor = randomRGB();
                this.color = ball.color = newColor;
            }
        }
    }
}

// Time to create balls
const ball = []
const ballCount = 25; // The number of balls

while (balls.length < ballCount) {
    const size = random(10 , 20);
    const ball = new ball(
        random(size, width - size), // the x position
        random(size, height - size), // the y position
        random (-7, -7), // x values
        random (-7, 7), // y values
        randomRGB(), // the color
        size // the size
    );
    balls.push(ball);
}

// The animation
function loop() {
    ctx.fillStyle = "rfba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisonDetect();
    }

    requestAnimationFrame(loop);
}

// Starting animation
loop();

// Handel window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    width = canvas.width;
    height = canvas.height;
});