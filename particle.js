

class Particle {
    constructor() {
        this.pos = createVector(width/4, height/2);
        this.rays = []
        for (let i = 0; i < 40; i++) {
            this.rays.push(new Ray(this.pos, radians(i)));
        }
    }

    look(walls) {
        const scene = [];
        for (let ray of this.rays) {
            let closest = null;
            let record = 10000;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    const d = p5.Vector.dist(this.pos, pt);
                    if (d < record ) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            } 
            scene.push(record);
        }
        return scene;
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }
}