class Obstacle {

    constructor() {
        this.r = 70;
        this.x = width;
        this.y = height - this.r;
    }

    move() {
       this.x -= 16; 

    }

    show() {
        image(oImg, this.x, this.y, this.r, this.r);
    }
}