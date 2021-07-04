class Game{
    constructor(){

    }
    getState(){
     database.ref('gameState').on("value",(data)=>{
         gameState=data.val()
     })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState==0){
            player=new Player()
            var playerCountref=await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form=new Form()
            form.display()
        }
        car1=createSprite(100,200,20,20);
        car2=createSprite(300,200,20,20);
        car3=createSprite(500,200,20,20);
        car4=createSprite(700,200,20,20);
        cars=[car1,car2,car3,car4]
        car1.addImage(c1);
        car2.addImage(c2);
        car3.addImage(c3);
        car4.addImage(c4);
        passed = false; 

    }

    play(){
     form.hide();
     Player.getPlayerInfo()
     player.getFinishedPlayers()

     if(allPlayers!=undefined){
         background(ground);
         image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
         var index=0;
         var x=235;
         var y;

         for(var plr in allPlayers){
             index=index+1;
             x=x+280;
             y=displayHeight-allPlayers[plr].distance;
             cars[index-1].x=x;
             cars[index-1].y=y;

             if(index==player.index){
                 camera.position.x=displayWidth/2
                 camera.position.y=cars[index-1].y
             }
             textAlign(CENTER);
             textSize(25);
             text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75);
         }
     }

     if(keyIsDown(UP_ARROW)&& player.index!=null && passed!=true){
         player.distance=player.distance+10;
         player.update()
         console.log(player.distance);
     } 
     if(player.distance>5140 && passed == false){
         Player.updateFinishedPlayers()
         player.rank = finishedPlayers
         player.update()
         passed = true;
     }

drawSprites()
    }

    displayRank(){
        camera.position.x=0;
        camera.position.y=0;
        imageMode(CENTER);
        Player.getPlayerInfo()






        textAlign(CENTER)
        textSize(40)
         
        fill("black");

        for(var plr in allPlayers){
        if (allPlayers [plr].rank==1){
        
            text("FIRST RANK "+allPlayers[plr].name,0,85)

        }
        else if(allPlayers[plr].rank==2){
            text("SECOND RANK"+allPlayers[plr].name,0,165)
        }
        else if(allPlayers[plr].rank==3){
            text("THIRD RANK"+allPlayers[plr].name,0,245)
        }
        else
        text("BETTER LUCK NEXT TIME"+allPlayers[plr].name,0,325)
      }

   }
}