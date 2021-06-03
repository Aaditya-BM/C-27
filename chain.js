class Chain {
    constructor(bodyA, bodyB){
        var opt = {
            bodyA : bodyA,
            bodyB : bodyB,
            length : 100,
            stiffness : 0.05
        }
        this.chain = Matter.Constraint.create(opt);
        World.add(world, this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}