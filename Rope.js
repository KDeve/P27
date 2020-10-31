class Rope{

    constructor(body1,body2, offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options ={
        bodyA:body1,
        bodyB:body2,
        stiffnes:0.05,
        length:50,
        pointB:{x:this.offsetX, y:this.offsetY}
        }
      this.rope=  Matter.Constraint.create(options)
        World.add(world,this.rope);
    }

    display(){
        push();
        strokeWeight(5)
        stroke("blue")
        
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    pop();
    }
}