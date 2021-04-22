class Particles{
  constructor(x,y,r) {
      var options ={
          restitution:0.4
      }
      this.r = r;

      this.body = Bodies.circle(x,y,this.r,options);
      this.image=loadImage("asas.png");
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x,pos.y)
      rotate(angle);
      noStroke();
      imageMode(CENTER);
      image(this.image ,0,0,30,30);
      pop();
  }
};