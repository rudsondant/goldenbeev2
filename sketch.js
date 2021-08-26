//variaveis do heroi
var img_hero, x, y;

//variaveis dos inimigos
var carro1, xcarro1,ycarro1;

//distancias
var d, dDiploma;

//coletável
var xdiploma, ydiploma;

//huds
var heart, countLife, heartX, heartY;

//pontos
var pontos;

//temporizador para o jogo


/*function preload(){
  setImages();
}

function setup() {
  createCanvas(600,400);
   init();
  
}

function draw() {
 game();
 
}
  
*/


function setImages(){
  img_hero = loadImage('assets/hero/frog.png');
  carro1 = loadImage('assets/npc/car1.png');
  heart = loadImage('assets/hud/heart.png');
}

function init(){
  x = 200;
  y = 300;
  xcarro1 = 30;
  ycarro1 = 200;
  xdiploma =300;
  ydiploma = 40;
  pontos = 0;
  countLife = 2;
  heartX=width-80;
  heartY=-10;
}

function game(){
  //console.log(estado);
  background(255);
  HUD();
  //aqui é o sapo
  image(img_hero,x,y);
  noFill();
  stroke(0,0,255);
  ellipse(x+36,y+36,36,36);
  moveHero();
  
  //aqui é o carro
  image(carro1,xcarro1,ycarro1,100,50);
  stroke(0,0,255);
  text("80",xcarro1+50,ycarro1+25);
  //ellipse(xcarro1+50,ycarro1+25,100,50);
  moveCar();
  colide();
  
  //aqui é o diploma
  fill(255,0,0);
  rect(xdiploma, ydiploma,30,15);
  colideDiploma();
  
  //condição de gameOver
  if(countLife==0){
     estado=4;
  }
}

function moveHero(){
    
  if(keyIsDown(LEFT_ARROW)){
   
    x= x-5;  // x = x -5;
    
  }

  if(keyIsDown(RIGHT_ARROW)){
    x=x+5;
    
  }
  if(keyIsDown(UP_ARROW)){
    y=y-5;
    
  }
  if(keyIsDown(DOWN_ARROW)){
    y=y+5;
   
  }
  
  
}

function moveCar(){
  //define a velocidade do carro e aumenta sempre que a pontuação 
  //sobe
  xcarro1 = xcarro1 + 3 + pontos/2;
  if(xcarro1>700){
    xcarro1 = -100;
  }
}

function colide(){
  d = int(dist(x+36,y+36,xcarro1+50,ycarro1+25));
  stroke(0,0,255);
  //line(x+36,y+36,xcarro1+50,ycarro1+25);
  textSize(20);
  //text(d,30,30);
  if(d<47){
    text("colidiu",50,30);
    removeHeart();
    countLife--;
    x = 200;
    y = 300;
  }
}


function colideDiploma(){
  dDiploma = int(dist(x+36,y+36,xdiploma, ydiploma));
  stroke(0,0,255);
  //line(x+36,y+36,xcarro1+50,ycarro1+25);
  textSize(20);
  //text(d,30,30);
  if(dDiploma<47){
    //se colidir com o diploma, aumente os pontos e mude diploma
    text("colidiu",50,30);
    xdiploma = 300;
    pontos++;
    if(ydiploma==40){
      ydiploma = 300;
    }
    else if(ydiploma==300){
      ydiploma = 40;
    }
  }
  
}

//desenha os huds do jogo
function HUD(){
  fill(37,150,190);
  stroke(37,150,190);
  rect(0,0,width,30);
  stroke(255);
  text("Pontos: "+pontos,30,25)
  image(heart,heartX,heartY);
}

//remove os corações
function removeHeart(){
  heartY= -50;
} 

//define o game over
function gameOver(){
  background(255);
  textSize(20);
  fill(0);
  
  text("Game Over",width/2,height/2)
  reset();
  
  //timer = setInterval(reset,3000);
  
}

function reset(){
  //console.log(estado);
  pos_cursor = 1;
  init();
  
}
