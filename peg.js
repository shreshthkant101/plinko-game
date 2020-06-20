class peg{
    constructor(x,y,radius){
        var options={
            isStatic: true,
            density: 1,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(CENTER);
        ellipse(this.x,this.y,this.radius);
        fill(255,255,255);
        stroke(255,0,0);
        strokeWeight(0.5);
        pop();
    }
}