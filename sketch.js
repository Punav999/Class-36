
var database;
var gameState=0;
var playerCount;
var distance=0;
var finishedPlayers=0;
var allPlayers ;
var form,player,game;
var passed;
var car1,car2,car3,car4,cars;
var c1,c2,c3,c4,track,ground;

function setup(){

    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    
    game=new Game()
    game.getState()
    game.start()

}
function preload(){
    c1 = loadImage("images/car1.png");
    c2 = loadImage("images/car2.png");
    c3 = loadImage("images/car3.png");
    c4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");
}

function draw(){
    
background("white");

if(playerCount==4&&finishedPlayers==0){
    game.updateState(1);
}
 
if(gameState==1){
    game.play()
}

if(finishedPlayers==4){
    game.updateState(2);
}

if(gameState==2&&finishedPlayers==4){
    game.displayRank()
}

 }
