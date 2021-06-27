let walls = [];
let ray;
let particle;

const sceneW = 800;
const sceneH = 800;

function setup() {
    createCanvas(1600, 800);
    walls.push(new Boundary(0, 0, width/2, 0));
    walls.push(new Boundary(0, 0, 0, height));
    walls.push(new Boundary(0, height, width/2, height));
    walls.push(new Boundary(width/2, height, width/2, 0));
    for (let i = 0; i < 5; i++) {
        walls.push(new Boundary(random(width/2), random(height), random(width/2), random(height)));
    }
    particle = new Particle()
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();
    const scene = particle.look(walls);
    const w = sceneW / scene.length;
    push();
    translate(sceneW, 0);
    for (let i = 0; i < scene.length; i++) {
        fill(scene[i]);
        rect(i * w, 0, w, height);
    }
    pop();

}