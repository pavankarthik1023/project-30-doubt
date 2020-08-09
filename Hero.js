class Hero extends Baseclass {
  constructor(x,y){
    super(x,y,50,50);
   
  }

  display() {
    
    var pos =this.body.position;
    rectMode(CENTER);
    fill(28,167,115);
    rect(pos.x, pos.y, this.width, this.height);

  }
}
