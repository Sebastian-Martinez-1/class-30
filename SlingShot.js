class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 30
        }
        this.pointB=pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
       this.Sling.bodyA=null;//nothing
    }
    display(){
        if(this.Sling.bodyA!==null){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}