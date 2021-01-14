class boy{
    constructor(x,y){
    var options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,150,200,options);
          this.width = 150;
          this.height = 200;
          this.image = loadImage("Plucking mangoes/boy.png");;
          World.add(world, this.body);
    }
          display(){
            var pos =this.body.position;
           //push();
            imageMode(CENTER);
            //fill("brown");
           image(this.image,pos.x, pos.y, this.width, this.height);
           // pop();
          }
    
    }