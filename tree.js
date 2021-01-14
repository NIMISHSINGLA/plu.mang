class tree{
constructor(x,y){
var options = {
    isStatic : true
}
this.body = Bodies.rectangle(x,y,50,100,options);
      this.width = 50;
      this.height = 100;
      this.image = loadImage("Plucking mangoes/tree.png")
      World.add(world, this.body);
}
      display(){
        var pos =this.body.position;
       //push();
        imageMode(CENTER);
        //fill("brown");
       image(this.image,pos.x, pos.y,500,500);
       // pop();
      }

}