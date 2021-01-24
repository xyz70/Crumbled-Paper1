class PaperBall {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2
      }
      this.body = Bodies.circle(x, y,20,options);
    this.radius=10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);

      fill("white");
      ellipse(0, 0,this.radius*2,this.radius*2);
      pop();
    }
  };