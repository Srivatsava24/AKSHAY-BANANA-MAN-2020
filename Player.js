class Bananaman extends BaseClass {
  constructor(x,y){
    
  if(height/20 >40){
    super(x,y,height/12,height/12);
  }else if(height/20 <40){
    super(x,y,50,50);
  }
    
    this.image = loadImage("Bananaman.png");

  
    
  }
  
  
  display() {
    

    super.display();

    
     
   
  
  }
}
