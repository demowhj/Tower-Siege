class Box{
    constructor(x, y){
        var options = {
            restitution:0.8,
            friction:1,
            density:1
        }

        this.body = Bodies.rectangle(x, y, 40, 60, options);
        World.add(world, this.body);

        this.width = 40;
        this.height = 60;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle); 
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}