var t = 0;
var baseSpeed = 2
var varySpeed = 1
var baseSize = 5
var varySize = 5
var people = [];
var numPeople = 50;
var screenWidth = 800;
var screenHeight = 600;
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

class Person {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = baseSize + Math.random() * varySize;

        //Get random direction with some circle math
        var angle = Math.random() * Math.PI * 2;
        var speed = baseSpeed + Math.random() * varySpeed;

        this.velX = speed * Math.cos(angle);
        this.velY = speed * Math.sin(angle);
    
        this.state = Math.floor(Math.random() * colors.length);
        this.color = colors[this.state];
    }

    update() {
        //this.color = "black";
        this.x = (this.x + this.velX + screenWidth) % screenWidth;
        this.y = (this.y + this.velY + screenHeight) % screenHeight;
    }

    checkCollision(other) {
        var distance = Math.sqrt(Math.pow((this.x - other.x), 2) + Math.pow((this.y - other.y), 2));

        if (distance <= this.radius) {
            this.hit(other);
            other.hit(this);
        }
    }

    hit(other) {
        //var otherColor = other.color;
        //other.color = this.color;
        //this.color = otherColor;

        //this.color = "red";
        //other.color = "red";

        this.nextState();
    }

    nextState() {
        this.state = (this.state + 1) % colors.length;
        this.color = colors[this.state];
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fillStyle = this.color;
        context.fill();
    }
}

function start() {
    init();
    loop();
}

function init() {
    people = [];
    for (let i = 0; i < numPeople; i++) {
        var x = Math.random() * screenWidth;
        var y = Math.random() * screenHeight;

        people.push(new Person(x, y));
    }
}

function loop() {
    update();
    checkCollisions();
    draw();
    setTimeout(loop, 1);
}

function update() {
    for (let i in people) {
    people[i].update();
    }
}

function checkCollisions() {
    for (let i = 0; i < people.length - 1; i++) {
        for (let j = i + 1; j < people.length; j++) {
    people[i].checkCollision(people[j]);
        }
    }
}

function draw() {
    var canvas = document.getElementById('covidSim');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //ctx.fillStyle = 'rgb(200, 0, 0)';
        //ctx.fillRect(10, 10, 50, 50);

        //ctx.moveTo(100, 100);
        /*
        ctx.beginPath();
        
        ctx.arc(100, 100, 25, 0, Math.PI * 2, true);
        ctx.stroke();

        drawCircle(ctx, 10, 10, 10, false);
        drawCircle(ctx, 10, 30, 10, true);
        drawCircle(ctx, 30, 10, 10, false, "red");
        drawCircle(ctx, 30, 30, 10, true, "green");
        drawCircle(ctx, 50, 10, 10, false, "rgb(0, 0, 255, 0.5)");
        drawCircle(ctx, 50, 30, 10, true, "rgb(255, 255, 0, 0.5)");
        drawCircle(ctx, t, t, t, false);
        

        t = (t + 1) % 300;
        */

        for (i in people) {
            people[i].draw(ctx);
        }

    } else {
        //Canvas isn't supported, be sad :(
    }
}

function drawCircle(context, x, y, radius, isFilled, color = 'black') {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    if (isFilled) {
        context.fillStyle = color;
        context.fill();
    } else {
        context.strokeStyle = color;
        context.stroke();
    }
}
