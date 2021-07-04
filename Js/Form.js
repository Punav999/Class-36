class Form{
    constructor(){
        this.input = createInput("Name");
        this.title = createElement("h1");
        this.button1 = createButton("Play");
        this.button2 = createButton("Reset");
        this.greet = createElement("h2");
    }
        hide(){
        this.input.hide();
        this.title.hide();
        this.button1.hide();
        this.greet.hide();
        }
      display(){
          
          this.input.position(displayWidth/2-100,displayHeight/2-100);
          this.title.html("Car Racing Game");
          this.title.position(displayWidth/2-50,50);
          this.button1.position(displayWidth/2-100,displayHeight/2+50);
          this.button2.position(displayWidth-100,50);

          this.button1.mousePressed(()=>{
          
            this.input.hide();
            this.button1.hide();
             
            player.name=this.input.value();

            playerCount=playerCount+1;
            player.index=playerCount;

            player.update()
            player.updateCount(playerCount)

            this.greet.html("Welcome "+player.name)
            this.greet.position(displayWidth/2-100,displayHeight/2)

          })

          this.button2.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
            database.ref('/').update({
              players:null,finishedPlayers:0
            })
          })
      }
}

