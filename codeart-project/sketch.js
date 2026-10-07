let mode = 'circles';
let particles = [];
let time = 0;

function setup() {
    let container = document.getElementById('p5-container');
    let w = Math.min(window.innerWidth - 40, 800);
    let h = Math.min(window.innerHeight - 300, 600);

    let canvas = createCanvas(w, h);
    canvas.parent('p5-container');

    background(15);
    generateParticles();
}

function draw() {
    background(15, 25);
    time += 0.01;

    switch(mode) {
        case 'circles':
            drawCircles();
            break;
        case 'lines':
            drawFlowLines();
            break;
        case 'particles':
            drawParticles();
            break;
        case 'mandala':
            drawMandala();
            break;
    }
}

// Pattern 1: Concentric Circles with waves
function drawCircles() {
    translate(width / 2, height / 2);

    let numCircles = 8;
    for (let i = 0; i < numCircles; i++) {
        let radius = (i + 1) * (min(width, height) / 20);
        let hue = (i * 30 + time * 50) % 360;

        stroke(hue, 100, 80);
        strokeWeight(2);
        noFill();

        // Modulate circle with sine wave
        let points = 100;
        beginShape();
        for (let j = 0; j < points; j++) {
            let angle = map(j, 0, points, 0, TWO_PI);
            let r = radius + sin(angle * 4 + time * 2) * 10;
            let x = r * cos(angle);
            let y = r * sin(angle);
            vertex(x, y);
        }
        endShape(CLOSE);
    }
}

// Pattern 2: Flow field with lines
function drawFlowLines() {
    colorMode(HSL);

    let gridSize = 40;
    let spacing = min(width, height) / 8;

    for (let x = spacing; x < width - spacing; x += spacing) {
        for (let y = spacing; y < height - spacing; y += spacing) {
            // Perlin noise based angle
            let angle = noise(x / 200, y / 200, time) * TWO_PI;
            let length = 30;

            let x2 = x + cos(angle) * length;
            let y2 = y + sin(angle) * length;

            let hue = (atan2(y - height/2, x - width/2) * 180 / PI + 180 + time * 50) % 360;
            stroke(hue, 80, 60);
            strokeWeight(2);

            line(x, y, x2, y2);
        }
    }
}

// Pattern 3: Particle system
function drawParticles() {
    colorMode(HSL);

    for (let p of particles) {
        p.update(time);
        p.display();
    }
}

// Pattern 4: Mandala pattern
function drawMandala() {
    translate(width / 2, height / 2);
    colorMode(HSL);

    let petals = 8;
    let layers = 6;

    for (let layer = 0; layer < layers; layer++) {
        let radius = map(layer, 0, layers, 20, min(width, height) / 2.2);

        for (let i = 0; i < petals; i++) {
            push();
            rotate(TWO_PI * i / petals + time * 0.5);

            let hue = (layer * 60 + i * 45 + time * 30) % 360;
            fill(hue, 80, 50);
            noStroke();

            // Draw petals using curves
            beginShape();
            for (let j = 0; j <= 100; j++) {
                let x = (j / 100) * radius * 0.8;
                let y = sin(j / 100 * PI) * 30;
                vertex(x, y);
            }
            for (let j = 100; j >= 0; j--) {
                let x = (j / 100) * radius * 0.8;
                let y = -sin(j / 100 * PI) * 30;
                vertex(x, y);
            }
            endShape(CLOSE);

            pop();
        }
    }
}

// Particle class
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-2, 2);
        this.vy = random(-2, 2);
        this.life = 255;
    }

    update(t) {
        this.x += this.vx + sin(t + this.x / 100) * 0.5;
        this.y += this.vy + cos(t + this.y / 100) * 0.5;
        this.life -= 1.5;

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    display() {
        let hue = (atan2(this.y - height/2, this.x - width/2) * 180 / PI + 180) % 360;
        fill(hue, 100, 60, this.life / 255);
        noStroke();
        circle(this.x, this.y, 4);
    }
}

function generateParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function setMode(newMode) {
    mode = newMode;
    if (newMode === 'reset') {
        mode = 'circles';
        time = 0;
        background(15);
    }
    if (mode === 'particles') {
        generateParticles();
    }

    // Update display
    const modeNames = {
        'circles': 'Circles',
        'lines': 'Flow Lines',
        'particles': 'Particles',
        'mandala': 'Mandala'
    };
    document.getElementById('mode-display').textContent = modeNames[mode] || mode;
}

// Press SPACE to randomize
function keyPressed() {
    if (key === ' ') {
        time = random(1000);
        generateParticles();
        return false;
    }
}

// Responsive canvas
function windowResized() {
    if (document.getElementById('p5-container')) {
        let w = Math.min(window.innerWidth - 40, 800);
        let h = Math.min(window.innerHeight - 300, 600);
        resizeCanvas(w, h);
    }
}