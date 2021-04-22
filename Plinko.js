class Plinko{
  constructor(x,y){
      var options = {
          restitution: 1,
          friction: 0,
          isStatic: true
      }
      this.r = 10
      this.body = Bodies.circle(x,y,this.r,options)
      this.image=loadImage("abcd.png");
      World.add(world,this.body)
  }
display(){
var pos = this.body.position

push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image ,0,0,30,30);
pop();
}
}