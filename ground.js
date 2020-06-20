class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            density: 1,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
        rectMode(CENTER);
        
        fill(255,0,0);
        rect(this.x,this.y,this.width,this.height);
        
        
        pop();
    }
}