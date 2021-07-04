class Player{
    constructor(){
      this.name=null;
      this.rank=0;
      this.distance=0;
      this.index=null;
    }

    getCount(){
     database.ref('playerCount').on("value",(data)=>{
         playerCount=data.val()
     })
    }

    updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
    }

    getFinishedPlayers(){
        var finishedPlayersRef=database.ref('finishedPlayers')
        finishedPlayersRef.on("value",(data)=>{
        finishedPlayers=data.val()
        })
    }

     static updateFinishedPlayers(){
     database.ref('/').update({
         finishedPlayers:finishedPlayers+1
     })
     this.rank=this.rank+1   
    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance,
            rank:this.rank
        })
    }

    static getPlayerInfo(){
        var playerInfoRef=database.ref('players')
        playerInfoRef.on("value",(data)=>{
        allPlayers=data.val()
        })
    }

}