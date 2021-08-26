//coordenadas dos botões
var xbotao1, ybotao1;

var xbotao2, ybotao2;

//label para nome do jogador
var player;
var name;

//coordenadas do cursor
var xcursor, ycursor;

//variavel de estado
var estado, pos_cursor;

var timer;

function preload(){
 setImages();
  
}

function setup() {
  createCanvas(600, 400);
  xbotao1 = 140;
  ybotao1 = 120;
  
  xbotao2 = 140;
  ybotao2 = 220;
  
  xcursor = 140;
  ycursor = 120;
  
  estado = 1;
  
  pos_cursor = 1;
  init();

  name ="Bixin";
  player = createDiv(name);
  player.id("namePlayer")
  //player.style('font-size', '16px');
  player.position(xbotao1, ybotao1-80);
}

function draw() {
  if(estado==1){
    clearInterval(timer);
    menu();
    //console.log(estado);
  }
  else if(estado==2){
     //start();
     game();
  }
  else if(estado==3){
    creditos();
  }
  else if(estado==4){
    gameOver();
  }
}

function keyPressed(){
  if(keyCode==UP_ARROW){
      pos_cursor=1; 
      ycursor = ybotao1;
      //console.log(pos_cursor)
  }
  if(keyCode==DOWN_ARROW){
      pos_cursor=2;
      ycursor = ybotao2;
      //console.log(pos_cursor)
      
  }
  
  if(keyCode==ENTER){
    if(pos_cursor ==1){
        estado = 2;
      
    }
    else if(pos_cursor ==2){
        estado = 3;
    }
    console.log("start");
  }
  if(keyCode==ESCAPE){
    if(estado==2 || estado==3 || estado==4){
      estado = 1;
    }
  }
  
}

function menu(){
  //console.log(estado);
  background(255);
  stroke(0);
  fill(220);
  strokeWeight(2);
  rect(100,100,180,200);
  
  //desenho de uma div com texto
  
  //desenho do botao1
  fill(180);
  rect(xbotao1, ybotao1, 100,60);
  fill(0);
  textSize(12);
  text("START",xbotao1+50-12,ybotao1+30+6);
  
  fill(180);
  rect(xbotao2, ybotao2, 100,60);
  fill(0);
  textSize(12);
  text("CREDITOS",xbotao2+50-20,ybotao2+30+6);
  
  noFill();
  stroke(0,0,255);
  strokeWeight(4);
  rect(xcursor, ycursor, 100,60);
  
}

function start(){
  background(150);
  textSize(22);
  fill(0);
  stroke(0);
  text("Start 1",width/2,height/2);
}

function creditos(){
  //console.log(estado);
  background(50,50,150);
  textSize(22);
  fill(0);
  stroke(0);
  text("Creditos 2",width/2,height/2);
}