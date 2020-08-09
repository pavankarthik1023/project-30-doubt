class Box extends Baseclass{
   
    constructor(x,y){
      super(x,y,50,50);
     this.visiblity=255;
    }
  
  
display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill(289,9,30);
  rect(pos.x, pos.y, this.width, this.height);

  if(this.body.speed < 0.5){
    this.visiblity=255;
   }

   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
    
     pop();
   }
    

 
    
  }

}

