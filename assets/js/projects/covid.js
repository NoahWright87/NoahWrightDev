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

var fps = 60;
var waitTime = 1000 / fps;

var COLOR_HEALTHY = "green";
var COLOR_SICK = "red";
var COLOR_VAXED = "blue";
var COLOR_DEAD = "grey";

var STATE_HEALTHY = 0;
var STATE_SICK = 1;
var STATE_VAXED = 2;
var STATE_DEAD = 3;
var stateColors = [COLOR_HEALTHY, COLOR_SICK, COLOR_VAXED, COLOR_DEAD];

var chanceToDie = 0.01;
var infectionLength = 5 * 1000;
var lifespanMin = 15 * 1000;
var lifespanMax = 20 * 1000;
var lifespanDiff = lifespanMax - lifespanMin;

var initialSickNumber = 1;

var numWell = 0;
var numDead = 0;
var numSick = 0;

class Person {

    constructor(x, y, isSick) {
        this.x = x;
        this.y = y;
        this.radius = baseSize + Math.random() * varySize;
        this.maskSize = 0 + Math.random() * 0;
        this.timeTilHealthy = 0;
        this.timeTilDead = lifespanMin + Math.random() * (lifespanMax - lifespanMin);

        this.timeBetweenTurns = 0 + Math.random() * 5000; //TODO: Make this customizable
        this.timeUntilTurn = this.timeBetweenTurns;

        //Get random direction with some circle math
        this.speed = baseSpeed + Math.random() * varySpeed;

        this.changeDirection();
    
        //this.state = Math.floor(Math.random() * colors.length);
        if (isSick) {
            this.getSick();
        } else {
            this.state = STATE_HEALTHY;
            this.color = stateColors[this.state];
        }
    }

    changeDirection() {
        this.angle = Math.random() * Math.PI * 2;

        this.velX = this.speed * Math.cos(this.angle);
        this.velY = this.speed * Math.sin(this.angle);
    }

    update() {
        if (this.state == STATE_SICK) {
            this.timeTilHealthy -= waitTime;
            this.timeTilDead -= waitTime;
            if (this.timeTilDead <= 0) {
                this.state = STATE_DEAD;
            } else if (this.timeTilHealthy <= 0) {
                this.state = STATE_HEALTHY;
            }
            this.color = stateColors[this.state];
        }

        if (this.state != STATE_DEAD) {
            this.timeUntilTurn -= waitTime;
            if (this.timeUntilTurn <= 0) {
                this.changeDirection();
                this.timeUntilTurn += this.timeBetweenTurns;
            }

            this.x = (this.x + this.velX + screenWidth) % screenWidth;
            this.y = (this.y + this.velY + screenHeight) % screenHeight;
        }
    }

    checkCollision(other) {
        if (this.state != STATE_DEAD && other.state != STATE_DEAD) {
            var distance = Math.sqrt(Math.pow((this.x - other.x), 2) + Math.pow((this.y - other.y), 2));

            if (distance <= this.radius) {
                this.hit(other);
                other.hit(this);
            }
        }
    }

    hit(other) {
        //var otherColor = other.color;
        //other.color = this.color;
        //this.color = otherColor;

        //this.color = "red";
        //other.color = "red";

        //this.nextState();
        if (other.state == STATE_SICK) {
            this.getSick();
        }
    }

    getSick() {
        this.state = STATE_SICK;
        this.color = stateColors[this.state];
        this.timeTilHealthy = infectionLength;
    }

    //TODO: I think I can safely scrap this
    nextState() {
        this.state = (this.state + 1) % colors.length;
        this.color = colors[this.state];
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        context.fillStyle = this.color;
        context.fill();

        //TODO: Add masks back later
        // context.beginPath();
        // context.arc(this.x, this.y, this.radius + this.maskSize, Math.PI, Math.PI * 2, true);
        // context.fillStyle = "black";
        // context.fill();
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
        
        var isSick = i < initialSickNumber;
        people.push(new Person(x, y, isSick));
    }
}

function loop() {
    update();
    checkCollisions();
    draw();
    setTimeout(loop, waitTime);
}

function update() {
    numWell = 0;
    numSick = 0;
    numDead = 0;

    for (let i in people) {
        people[i].update();
        if (people[i].state == STATE_SICK) {
            numSick++;
        } else if (people[i].state == STATE_DEAD) {
            numDead++;
        } else {
            numWell++;
        }
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
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        drawStats(ctx);

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

function drawStats(context) {
    context.font = '18px serif';
    context.fillStyle = stateColors[STATE_HEALTHY];
    context.fillText('Well: ' + numWell, 10, 20);
    context.fillStyle = stateColors[STATE_SICK];
    context.fillText('Sick: ' + numSick, 10, 40);
    context.fillStyle = stateColors[STATE_DEAD];
    context.fillText('Dead: ' + numDead, 10, 60);
}
