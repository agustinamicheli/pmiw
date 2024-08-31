//micheli agustina
//comision 1
//https://www.youtube.com/watch?v=fqgCiqiiJO0

let foto;
let cant;
let tam;
let tamRombo;
let original,efectoActivo;

function preload(){
  foto = loadImage("data/opart.jpeg");
}

function setup(){
  createCanvas(800,400);
  background (255);
  cant = 4;
  
  tam = width/2/cant;
  tamRombo = width/2/cant;
  original=0;
  efectoActivo=0;
}


function draw(){
  image(foto,0,0,400,400);
 
  if(efectoActivo==1){
  //movimineto de los rombos
    tamRombo = map(mouseX, 0, width, 0, 100);
  }
  
  for ( let i=0; i<cant; i++){
    for(let j=0; j<cant; j++){
      
      //cuadrados
      cuadrado(i,j);
      //rombos
      rombos (i, j);
    }
  }
}

 //cuadrados
function cuadrado(i,  j) {
  if(esPar(i+j)){
    if(original==0){
      fill(255);
    }else{
      fill(0);
    }
   } else if(original==0){     
      fill(0);
   } else{
      fill(255);
   }
   rectMode(CORNER);
   rect(i*tam+400, j*tam,tam,tam);
 }

 // rombos
 function rombos ( x,  y) {
   push();
   if (esPar(x+y)){
      if(original==0){
      fill(0);
    }else{
      fill(255);
    }
   } else if(original==0){     
      fill(255);
   } else{
      fill(0);
   }
   translate(x*tam+400+tam/2, y*tam+tam/2);
   rotate(radians(45));
   rectMode(CENTER);
   rect(0,0,tamRombo-30,tamRombo-30);
   pop();
 }
 
 
function esPar( num){
  return num % 2 ==0;
}

//iniciar e invertir colores
function mousePressed(){
  if(original==0){
    original=1;
    efectoActivo=1;
  }else{
    original=0;
  }
}

//reiniciar 
function keyPressed(){
    original=0;
    efectoActivo=0;
    tamRombo = width/2/cant;
}
