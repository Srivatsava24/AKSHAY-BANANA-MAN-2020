class GameLost {

    constructor() {
  
       this.button = createButton('Restart');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.title.hide();
    }
    show(){
        this.greeting.show();
        this.button.show();
        this.title.show();  
    }
    display(){
        this.show()
        push()
        translate((camera.position.x - width/2),(camera.position.y - height/2))
        
      this.title.html("Game Over");
      this.title.position(width/2.3,height*0.4);
    

      this.button.position(width/2.1,height*0.56);
  2
      this.button.mousePressed(()=>{
        Score=0;
        gameState = 0
        this.hide()
        Matter.Body.setPosition(player.body, {x:width/2,y:height/2})
          });
      pop();
    }
}